
// const ApiBaseUrl = "https://nowedgebackend.herokuapp.com" ; // for test
// const ApiBaseUrl = "https://nowedgebackendprod.herokuapp.com" ; // for prod

//const ApiBaseUrl = "http://127.0.0.1:8000" ; // for laravel
//const ApiBaseUrl = "https://pybackend.nowedge.io/api/nowedge_access_point" ;

const ApiBaseUrl = import.meta.env.REACT_APP_API_URL
export { ApiBaseUrl };
