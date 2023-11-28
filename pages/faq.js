import FaqPage from '../src/screens/Perguntas/faq';
import Link from '../src/componentes/Link';
import React, { useEffect, useState } from 'react';
import { Box } from '../src/themes/components';
import Head from 'next/head';

export default FaqPage;

// função usando props
// export async function getStaticProps(){
//         const FAQ_API_URL = "https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json"
//         const faq = await fetch(FAQ_API_URL)
//             .then((response) => {
//                 return response.json();
//             })
//             .then((response) => {
//                 return (response);
//             });

    
//     return {
//         props: {
//             faq, 
//         },
//     };
// }
// export default function FAQPage({faq}) {

//     return (
//         <div>
//             <Head>
//                 <title>Perguntas</title>
//             </Head>
//             <h1>Pagina de Perguntas FAQ</h1>
//             <Link href="/">
//                 Voltar para a home
//             </Link>
//             <ul>
//                 {faq.map(({answer, question}) => (
//                 <li key={question}>
//                     <strong>
//                         <h2>{question}</h2>
//                     </strong><br />
//                     <p>{answer}</p>
//                 </li>
//                 ))}
//             </ul>
//         </div>
//     )
// } 

// função intermediaria
// export default function FAQPage(props) {
//     const [faqData, setFaqData] = useState([]);
//     useEffect(() => {
//         const FAQ_API_URL = "https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json"
//         fetch(FAQ_API_URL)
//             .then((response) => {
//                 console.log(response);
//                 return response.json();
//             })
//             .then((response) => {
//                 console.log(response);
//                 setFaqData(response);
//             });

//     }, []);

//     return (
//         <div>
//             <h1>Pagina de Perguntas FAQ</h1>
//             <Link href="/">
//                 Voltar para a home
//             </Link>
//             <ul>
//                 {faqData.map(({answer, question}) => (
//                 <li>
//                     <strong>
//                         <h2>{question}</h2>
//                     </strong><br />
//                     <p>{answer}</p>
//                 </li>
//                 ))}
//             </ul>
//         </div>
//     )
// } 


// função simples
// function Title({children, as}){
//     const Tag = as;
//     return(
//         <React.Fragment>
//             <Tag>
//                 {children}
//             </Tag>
//             <style jsx>{`
//                 ${Tag} {
//                     color: blue;
//                     font-family: cursive;
//                     font-size: 35px;
//                     font-weight: bold;
//                 }
//             `}
//             </style>
//         </React.Fragment>
//     );
// }

// export default function FaqPage() {
//     return (
//     <div>
//         <Title as="h1">Perguntas frequentes</Title>
//         <Link href="/">
//             Ir para home
//         </Link>
//     </div>
//     )
// }