import { Box, Text } from "../../themes/components"
import { theme } from "../../themes/theme"
import Link from "../../componentes/Link"
export default function FaqPage(){
    return(
        <Box>
            <Link href="/">
                Ir para home
            </Link>
            <Box
                styleSheet={{
                    marginTop: theme.space.x6,
                    maxWidth: theme.space.xcontainer_sm,
                }}
                >

                <Text
                    as="h2"
                    styleSheet={{
                        textVariant: theme.typography.variants.heading3,
                        color: theme.colors.primary["400"],
                    }}
                >
                    O que é e para que serve um framework?
                </Text>
                <Text
                    as="p"
                    styleSheet={{
                        textVariant: theme.typography.variants.body1,
                        color: theme.colors.neutral["500"],
                        marginTop: theme.space.x1,
                    }}
                >
                    Um framework é basicamente uma estrutura fornecida pela comunidade, de forma padronizada, para você poder utilizar em seus projetos. Seria uma arquitetura pronta, com todas as configurações necessárias para você economizar tempo, ter maior produtividade em seus projetos e focar apenas em problemas que possam aparecer, não na arquitetura e nas configurações que seu projeto terá. 
                    
                </Text>
            </Box>
            <Box
                styleSheet={{
                    marginTop: theme.space.x6,
                    maxWidth: theme.space.xcontainer_sm,
                }}
                >

                <Text
                    as="h2"
                    styleSheet={{
                        textVariant: theme.typography.variants.heading3,
                        color: theme.colors.primary["400"],
                    }}
                >
                    O que é o React e qual a relação com NEXT.js?
                </Text>
                <Text
                    as="p"
                    styleSheet={{
                        textVariant: theme.typography.variants.body1,
                        color: theme.colors.neutral["500"],
                        marginTop: theme.space.x6,
                    }}
                >
                   O React.js é uma biblioteca criada e mantida pelo Facebook, para a construção de interfaces gráficas para a Web. Como o Next.js é um framework para o React.js, o Next.js adiciona algumas funcionalidades a mais na biblioteca do Facebook, como otimização de imagens, ajuda com a SEO, etc. Essas características serão abordadas adiante. 
                   
                </Text>
            </Box>
            <Box
                styleSheet={{
                    marginTop: theme.space.x6,
                    maxWidth: theme.space.xcontainer_sm,
                }}
                >

                <Text
                    as="h2"
                    styleSheet={{
                        textVariant: theme.typography.variants.heading3,
                        color: theme.colors.primary["400"],
                    }}
                >
                    Quais as 12 principais características do NEXT JS?
                </Text>
                <Text
                    as="p"
                    styleSheet={{
                        textVariant: theme.typography.variants.body1,
                        color: theme.colors.neutral["500"],
                        marginTop: theme.space.x6,
                    }}
                >
                   1. Possibilidade de criação de back-end de aplicações
                   Sim! Como o Next.js funciona com um servidor Node.js rodando no lado back-end, você pode criar uma estrutura, por mais simples que ela seja, para simular a conexão entre as partes de front-end e back-end de seu aplicativo. Além disso, o Next.js traz facilidades na hora de fazer conexões com a base de dados de sua aplicação.
                   2. Server-side rendering
                   Essa propriedade é utilizada para sites dinâmicos no Next JS, que precisem de atualizações constantes, como um site de notícias, por exemplo. No caso, o servidor precisará requisitar os arquivos atualizados por um tempo determinado. 
                </Text>
            </Box>
        </Box>
    )
}