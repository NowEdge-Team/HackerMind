import React, {useEffect, useMemo} from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import CryptoJS from "crypto-js";
import {Cookies, useCookies, withCookies} from "react-cookie";
import {initDaysData} from "../redux/daysPvCh/actions.js";
import {useDispatch} from "react-redux";
import { useLocation , useHistory } from 'react-router-dom'


const LoaderPage = (props) => {
    let history = useHistory();
    const dispatch = useDispatch();

    const { search } = useLocation()
    const values = queryString.parse(search)

    useEffect(() => {
        try {
            
            const bytes = CryptoJS.AES.decrypt(values.token, "4IR8DCqv8AV9Wg&nixq7L9%&fD!pJ");
            const data = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
            const cookies = new Cookies();
            cookies.set("token",data.token ,  { path: '/' } );
            cookies.set("gameSessionId",data.gameSessionId ,  { path: '/' } );

            dispatch(initDaysData());

            history.push("/");

        }catch (e){
            history.push("/404");
        }
    }, []);

    return (
        <div style={{width:"100vw",wordWrap:"break-word"}} >
            {/* <p>Value of term: {queryParams.token}</p> */}
            <p>
                All query params <pre></pre>
            </p>
        </div>
    );
};

LoaderPage.propTypes = {};
LoaderPage.defaultProps = {};


export default withCookies(LoaderPage) ;