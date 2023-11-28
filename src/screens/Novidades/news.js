import { Box, Text } from "../../themes/components"
import { theme } from "../../themes/theme"
import Link from "../../componentes/Link"
import Head from "next/head"
export default function News(){
    return(
        <Box>
          <Head>
            <title>Novidades</title>
          </Head>
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
                        textVariant: theme.typography.variants.heading2,
                        color: theme.colors.primary["400"],
                    }}
                >
                    Next.js 14
                </Text>
                <Text
                    as="p"
                    styleSheet={{
                        textVariant: theme.typography.variants.body1,
                        color: theme.colors.neutral["500"],
                        marginTop: theme.space.x1,
                    }}
                >
                    Conforme anunciamos na Next.js Conf, Next.js 14 é nosso lançamento mais focado com:
                    Turbopack : 5.000 testes aprovados para App & Pages Router
                    Inicialização de servidor local 53% mais rápida
                    Atualizações de código 94% mais rápidas com Fast Refresh
                    Ações do servidor (estáveis) : mutações progressivamente aprimoradas
                    Integrado com cache e revalidação
                    Chamadas de função simples ou funciona nativamente com formulários
                    Pré-renderização parcial (visualização) : resposta estática inicial rápida + streaming de conteúdo dinâmico
                    Next.js Learn (Novo) : Curso gratuito que ensina App Router, autenticação, bancos de dados e muito mais.
                    Confira conteúdo completo em:
                    <Link href="https://nextjs.org/blog/next-14"
                        styleSheet={{
                            display: "inline-flex",
                            alignItems: {
                              xs: "flex-start",
                              sm: "center",
                            },
                            flexDirection: {
                              xs: "column",
                              sm: "row",
                            },
                          }}
                    >
                    <Text
                      styleSheet={{
                        textVariant: theme.typography.variants.body4,
                        fontWeight: "600",
                        borderRadius: theme.space.x64,
                        color: theme.colors.primary["400"],
                        backgroundColor: theme.colors.primary["100"],
                        paddingHorizontal: theme.space['x2.5'],
                        paddingVertical: theme.space['x1'],
                        marginRight: theme.space.x2,
                        marginBottom: {
                          xs: theme.space.x2,
                          sm: theme.space.x0
                        },
                      }}
                    >
                      Update news
                    </Text>
                    </Link>
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
                        textVariant: theme.typography.variants.heading2,
                        color: theme.colors.primary["400"],
                    }}
                >
                    Como pensar sobre segurança em Next.js
                </Text>
                <Text
                    as="p"
                    styleSheet={{
                        textVariant: theme.typography.variants.body1,
                        color: theme.colors.neutral["500"],
                        marginTop: theme.space.x6,
                    }}
                >
                   React Server Components (RSC) no App Router é um novo paradigma que elimina
                   grande parte da redundância e dos riscos potenciais associados aos métodos convencionais. 
                   Dada a novidade, os desenvolvedores e, posteriormente, as equipes de segurança podem achar
                   um desafio alinhar seus protocolos de segurança existentes com este modelo.
                   Confira conteúdo completo em:
                   <Link href="https://nextjs.org/blog/security-nextjs-server-components-actions"
                        styleSheet={{
                            display: "inline-flex",
                            alignItems: {
                              xs: "flex-start",
                              sm: "center",
                            },
                            flexDirection: {
                              xs: "column",
                              sm: "row",
                            },
                          }}
                    >
                    <Text
                      styleSheet={{
                        textVariant: theme.typography.variants.body4,
                        fontWeight: "600",
                        borderRadius: theme.space.x64,
                        color: theme.colors.primary["400"],
                        backgroundColor: theme.colors.primary["100"],
                        paddingHorizontal: theme.space['x2.5'],
                        paddingVertical: theme.space['x1'],
                        marginRight: theme.space.x2,
                        marginBottom: {
                          xs: theme.space.x2,
                          sm: theme.space.x0
                        },
                      }}
                    >
                      Update news
                    </Text>
                    </Link>
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
                        textVariant: theme.typography.variants.heading2,
                        color: theme.colors.primary["400"],
                    }}
                >
                    Atualização do roteador do aplicativo Next.js
                </Text>
                <Text
                    as="p"
                    styleSheet={{
                        textVariant: theme.typography.variants.body1,
                        color: theme.colors.neutral["500"],
                        marginTop: theme.space.x6,
                    }}
                >
                    O App Router representa uma nova base para o futuro do Next.js, 
                    mas reconhecemos que há oportunidades para melhorar a experiência. 
                    Gostaríamos de atualizar quais são nossas prioridades atuais.
                    Para os próximos lançamentos do Next.js, estamos nos concentrando nas seguintes áreas:
                    - Melhorando a performance
                    - Melhorando a estabilidade
                    - Melhorando a educação do desenvolvedor.
                    Confira conteúdo completo em:
                    <Link href="https://nextjs.org/blog/june-2023-update"
                        styleSheet={{
                            display: "inline-flex",
                            alignItems: {
                              xs: "flex-start",
                              sm: "center",
                            },
                            flexDirection: {
                              xs: "column",
                              sm: "row",
                            },
                          }}
                    >
                    <Text
                      styleSheet={{
                        textVariant: theme.typography.variants.body4,
                        fontWeight: "600",
                        borderRadius: theme.space.x64,
                        color: theme.colors.primary["400"],
                        backgroundColor: theme.colors.primary["100"],
                        paddingHorizontal: theme.space['x2.5'],
                        paddingVertical: theme.space['x1'],
                        marginRight: theme.space.x2,
                        marginBottom: {
                          xs: theme.space.x2,
                          sm: theme.space.x0
                        },
                      }}
                    >
                      Update news
                    </Text>
                    </Link>
                </Text>
            </Box>
        </Box>
    )
}