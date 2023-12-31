import Head from "next/head";
import GlobalStyle from "../src/themes/GlobalStyle";

function MyApp({Component, pageProps}){
    return ( 
    <>
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500&display=swap" rel="stylesheet"/>
        </Head>
        <GlobalStyle/>
        <Component {...pageProps}/>
    </>
    )
}

export default MyApp;