import Footer from '../../componentes/patterns/Footer';
import Link from '../../componentes/Link';
import { theme } from '../../themes/theme';
import { Image, Box, Text, Icon, Input, Button } from '../../themes/components';
import Head from 'next/head';

const LOGO_NEXTJS_URL = '/images/next-js.png';
const SIDE_IMAGE_URL = '/images/react-vs-next.jpg'

function SideImage() {
  return (
    <Box
      styleSheet={{
        paddingHorizontal: {
          md: theme.space.x8,
        },
        marginHorizontal: {
          sm: 'auto'
        },
        maxWidth: {
          sm: theme.space.xcontainer_md,
        }
      }}
    >
      <Box
        styleSheet={{
          top: 0,
          bottom: 0,
          right: {
            lg: theme.space.x0
          },
          width: {
            lg: theme.space["x1/2"],
          },
          paddingTop: {
            xs: theme.space.x12,
            sm: theme.space.x16,
          },
          paddingBottom: {
            lg: theme.space.x16,
          },
          position: {
            sm: 'relative',
            lg: 'absolute',
          }
        }}
      >
        <Box 
          styleSheet={{
            height: {
              lg: theme.space["x1/1"],
            },
            maxWidth: {
              sm: theme.space.xcontainer_md,
              lg: 'none'
            },
            position: 'relative',
            paddingLeft: {
              lg: theme.space.x0,
            },
            paddingVertical: {
              xs: theme.space.x28
            },
            marginTop: {
              xs: theme.space.x1,
            }
          }}
          >
          <Image
            styleSheet={{
              boxShadow: `0 5px 16px 0px ${theme.colors.neutral[999]}73`,
              borderRadius: {
                md: theme.space.x4,
              },
              maxWidth: {
                lg: "none",
              },
              width: {
                lg: "auto",
              },
              height: {
                lg: theme.space["x1/1"],
              },
            }}
            src={SIDE_IMAGE_URL}
            alt="Frontend"
          />
        </Box>
      </Box>
    </Box>
  )
}

export default function HomeScreen() {
  return (
    <Box>
      <Head>
        <title>Home</title>
      </Head>
      <Box
        as="main"
        styleSheet={{
          flex: 1,
          backgroundColor: theme.colors.neutral["050"],
        }}
      >
        <Box
          styleSheet={{
            overflow: 'hidden',
            position: {
              lg: 'relative',
            },
            paddingTop: {
              xs: theme.space.x6,
              sm: theme.space.x12,
            },
            paddingVertical: {
              md: theme.space.x20,
              lg: theme.space.x24,
            },
          }}
        >
          <Box
            styleSheet={{
              marginHorizontal: {
                xs: theme.space.x8,
                sm: theme.space.x8,
                lg: theme.space.x8,
              },
              paddingHorizontal: {
                xs: theme.space.x1,
                sm: theme.space.x1,
                lg: theme.space.x1,
              },
              maxWidth: {
                sm: theme.space.xcontainer_md,
                lg: theme.space.xcontainer_lg,
              },
              display: {
                lg: "grid",
              },
              gap: {
                lg: theme.space.x24,
              },
              gridTemplateColumns: {
                lg: "repeat(2, minmax(0, 1fr))",
              }
            }}
            >
            <Box>
              <Box>
                <Image
                  styleSheet={{
                    width: "auto",
                    height: theme.space.x11,
                  }}
                  src={LOGO_NEXTJS_URL}
                  alt="Logo Nextjs"
                />
              </Box>
              <Box
                styleSheet={{
                  marginTop: {
                    xs: theme.space.x16,
                    sm: theme.space.x20,
                  },
                }}
              >
                <Box>
                  <Link
                    href="/novidades"
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
                      O que tem de novo?
                    </Text>
                  </Link>
                </Box>
              </Box>
              <Box
              styleSheet={{
                marginTop: {
                  xs: theme.space.x10,
                  sm: theme.space.x10,
                },
              }}
              >
                <Link
                  href="/faq"
                  >
                  <Text
                    styleSheet={{
                      textVariant: theme.typography.variants.body2,
                      fontWeight: "600",
                      display: 'inline-flex',
                      borderRadius: theme.space.x64,
                      color: theme.colors.primary["400"],
                      alignItems: 'center',
                    }}
                  >
                    <Text>Confira as principais dúvidas {'>>'} </Text>
                    {/* <Icon
                      styleSheet={{
                        iconVariant: 'chevronRight',
                        marginLeft: theme.space.xpx,
                      }}
                      aria-hidden="true"
                    /> */}
                  </Text>
                </Link>
              <Box
                styleSheet={{
                  marginTop: theme.space.x5,
                  maxWidth: theme.space.xcontainer_sm,
                }}
                >
                <Text
                  as="h1"
                  styleSheet={{
                    textVariant: theme.typography.variants.heading1,
                    color: theme.colors.neutral["900"],
                  }}
                >
                  O que é Next.js?
                </Text>
                <Text
                  as="p"
                  styleSheet={{
                    textVariant: theme.typography.variants.body1,
                    color: theme.colors.neutral["500"],
                    marginTop: theme.space.x6,
                  }}
                >
                  Next.js é uma estrutura React para construir aplicativos web full-stack. Você usa React Components para construir interfaces de usuário e Next.js para recursos e otimizações adicionais.

                  Nos bastidores, Next.js também abstrai e configura automaticamente as ferramentas necessárias para React, como agrupamento, compilação e muito mais. Isso permite que você se concentre na construção de seu aplicativo em vez de perder tempo com configuração.

                  Quer você seja um desenvolvedor individual ou parte de uma equipe maior, Next.js pode ajudá-lo a construir aplicativos React interativos, dinâmicos e rápidos.
                </Text>
                <Text
                  as="p"
                  styleSheet={{
                    textVariant: theme.typography.variants.body1,
                    color: theme.colors.neutral["500"],
                    marginTop: theme.space.x6,
                  }}
                >
                  Quer aprender Next.js?
                </Text>
              </Box>
              <Box
                as="form"
                action="#"
                styleSheet={{
                  display: {
                    sm: 'flex',
                  },
                  marginTop: theme.space.x12,
                  width: {
                    sm: theme.space['x1/1'],
                  },
                  maxWidth: {
                    sm: theme.space.xcontainer_lg,
                  }
                }}
                >
                <Box 
                  styleSheet={{
                    marginTop: {
                      xs: theme.space.x4,
                      sm: theme.space.x0,
                    },
                    marginLeft: {
                      sm: theme.space.x3,
                    },
                  }}
                >
                <Box>
                  <Link
                    href="https://nextjs.org/docs"
                  >
                    <Text
                      styleSheet={{
                        textVariant: theme.typography.variants.body1,
                        fontWeight: "600",
                        borderRadius: theme.space.x72,
                        color: theme.colors.primary["800"],
                        backgroundColor: theme.colors.primary["200"],
                        paddingHorizontal: theme.space['x2.5'],
                        paddingVertical: theme.space['x1'],
                        marginRight: theme.space.x2,
                        marginBottom: {
                          xs: theme.space.x2,
                          sm: theme.space.x0
                        },
                      }}
                    >
                      Next.js documentation
                    </Text>
                  </Link>
                </Box>                 
                </Box>
              </Box>
              </Box>
            </Box>
          </Box>

          <SideImage />
        </Box>
      </Box>
      <Footer />
    </Box>
  )
}