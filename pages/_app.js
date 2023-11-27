import GlobalStyle from "../src/themes/GlobalStyle";

function MyApp({Component, pageProps}){
    return ( 
    <>
        <GlobalStyle/>
        <Component {...pageProps}/>
    </>
    )
}

export default MyApp;