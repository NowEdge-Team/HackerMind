import React, { Component, Suspense, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { routes } from "./routes/routes.jsx";
import detectBrowserLanguage from "detect-browser-language";
import { useTranslation } from "react-i18next";
import strategicGameLayout from "./components/strategicGameLayout.jsx";
import "./assets/scss/DefaultTheme.scss";
import ModalArticel from "./components/modal/ModalArticle/index.jsx";

const queryClient = new QueryClient()

const loading = () => <div></div>;

const withLayout = (WrappedComponent) => {
    const HOC = class extends Component {
        render() {
            return <WrappedComponent {...this.props} />;
        }
    };

    return connect()(HOC);
};

/**
 * Main app component
 */
const App = () => {

    /** change language to french */
    const { i18n } = useTranslation();
    const userLanguage = detectBrowserLanguage().split("-")[0];

    useEffect(() => {
        if (["fr", "en"].includes(userLanguage)) {
            i18n.changeLanguage(userLanguage);
        } else {
            i18n.changeLanguage("fr");
        }
    }, [userLanguage]);



    /** end */

    return (
        // rendering the router with layout
        <>
            <ModalArticel />
            <BrowserRouter>
                <Switch>
                    {routes.map((route, index) => {
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                exact
                                roles={route.roles}
                                component={withLayout((props) => {
                                    const Layout = strategicGameLayout;
                                    return (
                                        <Suspense fallback={loading()}>
                                            <Layout {...props} title={route.title} name={route.name}>
                                                <QueryClientProvider client={queryClient}>
                                                    <route.component {...props} />
                                                    <ReactQueryDevtools initialIsOpen={false} />
                                                </QueryClientProvider>
                                            </Layout>
                                        </Suspense>
                                    );
                                })}
                            />
                        );
                    })}
                </Switch>
            </BrowserRouter>
        </>

    );
};

const mapStateToProps = (state) => {
    return {
        // isAuthenticated: state.Auth.isAuthenticated,
        isAuthenticated: false
    };
};

export default connect(mapStateToProps, null)(App);
