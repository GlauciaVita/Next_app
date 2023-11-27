import Link from '../src/componentes/Link';
import React from 'react';

function Title({children, as}){
    const Tag = as;
    return(
        <React.Fragment>
            <Tag>
                {children}
            </Tag>
            <style jsx>{`
                ${Tag} {
                    color: red;
                    font-size: 35px;
                    font-weight: bold;
                }
            `}
            </style>
        </React.Fragment>
    );
}

export default function Page404() {
    return (
    <div>
        <Title as="h1">Pagina não encontrada</Title>
        <Link href="/">
            Voltar para HomePage
        </Link>
    </div>
    )
}