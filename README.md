# JOCACH Lda — Site institucional

Site institucional da **JOCACH Lda — Prestação de Serviços e Comércio**, empresa angolana sediada no Soyo, província do Zaire. O projeto apresenta a atuação da empresa em construção civil, loteamento, urbanização, residências e acompanhamento de projetos, além de apresentar a Hamburgaria Broda como marca do ecossistema JOCACH.

O site está preparado para publicação no Vercel e utiliza uma arquitetura React com Vite, TypeScript e um servidor Express mínimo para servir o build de produção.

## Visão geral

A experiência digital foi construída em torno de uma mensagem central: **dar forma a lugares onde a vida possa acontecer melhor**. A identidade visual combina azul-marinho, azul, laranja, imagens de arquitetura e uma linguagem editorial orientada para território, método e futuro.

O site inclui:

- página inicial institucional;
- apresentação de missão, visão e valores;
- catálogo de serviços;
- portfólio de projetos em curso;
- localização da operação no Soyo;
- formulário de contacto que prepara uma mensagem de email;
- contacto direto por WhatsApp e email;
- página de privacidade e cookies;
- página própria para a Hamburgaria Broda;
- logo oficial da JOCACH no cabeçalho e rodapé;
- logo branca para fundos escuros;
- favicon com o isologo da JOCACH;
- layout responsivo para desktop e dispositivos móveis;
- consentimento de cookies e carregamento condicionado de analytics;
- mapa interativo com fallback visual quando o mapa não estiver disponível.

## Conteúdo publicado

### Página inicial — `/`

A página inicial funciona como a apresentação principal da empresa. Inclui uma área hero com a mensagem **“Onde o território ganha futuro.”**, a localização “Soyo / Angola” e chamadas para conhecer a empresa ou consultar os serviços.

A secção institucional descreve a JOCACH como uma empresa angolana de prestação de serviços e comércio focada em construção civil, condomínios, residências e casas urbanizadas. A comunicação destaca três compromissos: visão modernista, execução responsável e compromisso com o território.

A secção de missão, visão e valores apresenta:

- **Missão:** dar forma a lugares onde a vida possa acontecer melhor, desenvolvendo soluções de construção, urbanização e habitação com qualidade e responsabilidade;
- **Visão:** ser uma referência angolana na construção de territórios com futuro, contribuindo para um Soyo mais organizado, contemporâneo e próspero;
- **Valores:** integridade e confiança, excelência na execução, respeito pelo território e proximidade com as pessoas.

A página inicial também apresenta quatro áreas de serviço — loteamento, urbanização, projectos e licenças, e execução —, uma síntese dos projetos em curso, a localização da empresa e o formulário de contacto.

### Serviços — `/servicos`

A página de serviços apresenta uma abordagem integrada em seis áreas:

1. **Loteamento:** análise e divisão de terrenos, organização de lotes e planeamento de acessos.
2. **Urbanização:** condomínios, residências, infraestruturas urbanas e conceito espacial e paisagístico.
3. **Croquis de localização:** levantamento de localização, implantação de referências e documentação de apoio.
4. **Projectos para licença:** projeto de arquitetura, peças desenhadas, memória e documentação técnica.
5. **Licença de construção:** preparação do processo, acompanhamento administrativo e articulação com entidades.
6. **Acompanhamento de obra:** coordenação de equipas, controlo de execução e acompanhamento no terreno.

A página explica ainda o método de trabalho da empresa em três fases: **entender**, **desenhar** e **construir**.

### Projetos — `/projetos`

A página de projetos apresenta cinco frentes urbanas identificadas no conteúdo atual:

| Projeto         | Tipo                         | Estado   |
| --------------- | ---------------------------- | -------- |
| Bairro Fina     | Urbanização residencial      | Em curso |
| Bairro Militar  | Residências e infraestrutura | Em curso |
| Bairro Pinda    | Loteamento                   | Em curso |
| Lumueno         | Conceito urbano              | Em curso |
| Bairro Kintambi | Expansão urbana              | Em curso |

O **Bairro Fina** aparece como projeto em destaque, descrito como uma urbanização pensada para ligar ruas, habitação e paisagem urbana no Soyo, Zaire.

### Hamburgaria Broda — `/broda`

A página Broda apresenta uma marca ligada ao ecossistema JOCACH. A proposta é uma hamburgaria com identidade urbana e angolana, localizada no Soyo.

O menu atual contém:

- **Broda Original:** 3.500 Kz;
- **Broda Cheddar:** 4.500 Kz;
- **Broda Chicken:** 4.000 Kz;
- **Broda Fries:** 2.500 Kz.

O menu pode ser filtrado por “Tudo”, “Hambúrgueres” e “Acompanhamentos”. A página também apresenta uma promoção semanal rotativa, uma secção sobre o espaço, horário de funcionamento de segunda a domingo entre as 11h e as 22h, localização no Soyo e uma chamada para novos pontos da marca.

### Privacidade — `/privacidade`

A política de privacidade explica:

- quem é a entidade responsável pelo site;
- que dados podem ser enviados pelo formulário;
- para que os dados são utilizados;
- como funcionam cookies e analytics;
- como ocorre a partilha e conservação de dados;
- quais são os direitos dos titulares;
- como contactar a JOCACH sobre privacidade.

A política indica como última atualização **19 de setembro de 2026**. O contacto indicado é `geral@jocach.com`.

### Página não encontrada

Qualquer rota não reconhecida é encaminhada para o componente `NotFound`, que apresenta uma página de erro consistente com a identidade visual do site.

## Contactos configurados

Os contactos publicados no site são:

- **Email:** [geral@jocach.com](mailto:geral@jocach.com)
- **WhatsApp:** [+244 923 879 645](https://wa.me/244923879645)
- **Localização:** Soyo, Zaire, Angola
- **Google Maps:** [abrir localização no Google Maps](https://www.google.com/maps/search/?api=1&query=Soyo%2C+Zaire%2C+Angola)
- **Domínio público:** [jocach.com](https://jocach.com)

O botão flutuante de WhatsApp está disponível globalmente. O rodapé repete a informação de localização, email e telefone, além das ligações para as áreas principais do site.

## Formulário de contacto

O formulário da página inicial recolhe:

- nome completo;
- email;
- telefone opcional;
- tipo de projeto;
- descrição do projeto.

O formulário **não utiliza uma API de backend para envio**. Ao submeter, o navegador cria uma mensagem `mailto:` para `geral@jocach.com`, com o assunto e os dados preenchidos. O visitante precisa de confirmar o envio no seu cliente de email.

Depois de preparar a mensagem, o site apresenta uma confirmação local e permite iniciar um novo pedido.

## Stack técnica

| Camada                    | Tecnologia                                                  |
| ------------------------- | ----------------------------------------------------------- |
| Interface                 | React 19                                                    |
| Linguagem                 | TypeScript                                                  |
| Bundler e desenvolvimento | Vite 7                                                      |
| Routing                   | Wouter                                                      |
| Estilos                   | CSS global com Tailwind CSS disponível no projeto           |
| Ícones                    | Lucide React                                                |
| Servidor de produção      | Express 4 + esbuild                                         |
| Validação                 | TypeScript (`tsc --noEmit`)                                 |
| Gestão de pacotes         | pnpm                                                        |
| Deploy                    | Vercel                                                      |
| Mapa                      | Google Maps carregado através do proxy frontend configurado |

O projeto também inclui componentes reutilizáveis baseados em Radix UI e utilitários para formulários, acessibilidade, temas, overlays e interações responsivas.

## Estrutura do projeto

```text
.
├── client
│   ├── index.html                 # HTML base, SEO, favicon e fontes
│   ├── public
│   │   ├── images                 # Imagens editoriais e assets de marca
│   │   ├── robots.txt             # Instruções para crawlers
│   │   └── sitemap.xml            # Sitemap público
│   └── src
│       ├── components             # Componentes partilhados e componentes UI
│       ├── contexts               # Contextos globais, incluindo tema
│       ├── hooks                  # Hooks reutilizáveis
│       ├── lib                    # Utilitários
│       ├── pages                  # Home, Serviços, Projetos, Broda e Privacidade
│       ├── App.tsx                # Router, cabeçalho, rodapé e elementos globais
│       ├── const.ts               # Constantes do frontend
│       ├── index.css              # Sistema visual e estilos responsivos
│       └── main.tsx               # Entrada da aplicação React
├── server
│   └── index.ts                   # Servidor Express para produção
├── shared
│   └── const.ts                   # Constantes partilhadas
├── patches                         # Patches de dependências mantidos pelo pnpm
├── package.json                    # Scripts e dependências
├── pnpm-lock.yaml                  # Lockfile
├── tsconfig.json                   # Configuração TypeScript
├── vite.config.ts                  # Configuração Vite
└── vercel.json                     # Configuração de publicação
```

## Assets de marca

Os assets principais estão em `client/public/images`:

- `jocach-logo.jpeg`: logo oficial para fundos claros;
- `jocach-logo-white.png`: logo branca para o rodapé e áreas escuras;
- `jocach-favicon.png`: isologo utilizado como favicon e Apple Touch Icon;
- `jocach-hero.jpg`: imagem principal da página inicial;
- `jocach-projects.jpg`: imagem usada nas secções de projetos e serviços;
- `broda-hero.jpg`: imagem hero da página Broda;
- `broda-interior.jpg`: imagem do interior da Hamburgaria Broda;
- `broda-original-menu.jpg`, `broda-cheddar-menu.jpg`, `broda-chicken-menu.jpg` e `broda-fries-menu.jpg`: imagens dos itens do menu Broda.

Para substituir uma imagem, mantenha o mesmo caminho ou atualize a constante correspondente na página que a utiliza. Os ficheiros públicos são servidos a partir da raiz, por exemplo: `/images/jocach-hero.jpg`.

## Requisitos

Antes de iniciar, instale:

- Node.js compatível com o ambiente atual do projeto;
- pnpm 10 ou superior;
- Git.

A versão exata do gestor está declarada no campo `packageManager` do `package.json`.

## Instalação local

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/telsioisidoro786-crypton/Jocach-Site.git
cd Jocach-Site
pnpm install --frozen-lockfile
```

Inicie o servidor de desenvolvimento:

```bash
pnpm run dev
```

O Vite disponibiliza a aplicação no endereço local indicado no terminal. Para permitir acesso através de outro dispositivo na mesma rede, o script já utiliza `vite --host`.

## Variáveis de ambiente

O mapa utiliza as seguintes variáveis no frontend:

```dotenv
VITE_FRONTEND_FORGE_API_KEY=...
VITE_FRONTEND_FORGE_API_URL=https://forge.butterfly-effect.dev
```

`VITE_FRONTEND_FORGE_API_KEY` é utilizada para carregar o script do mapa através do proxy configurado. `VITE_FRONTEND_FORGE_API_URL` é opcional e, quando não definida, utiliza `https://forge.butterfly-effect.dev`.

Não coloque chaves privadas diretamente no código ou em ficheiros versionados. Em desenvolvimento, use um ficheiro `.env.local`. No Vercel, configure as variáveis no projeto e associe-as aos ambientes necessários.

Se o mapa não carregar, a página mantém um fallback visual com a identificação do Soyo e continua a disponibilizar o link para o Google Maps.

## Scripts disponíveis

| Comando            | Finalidade                                                        |
| ------------------ | ----------------------------------------------------------------- |
| `pnpm run dev`     | Inicia o Vite em modo de desenvolvimento.                         |
| `pnpm run build`   | Gera o frontend em `dist/public` e o servidor em `dist/index.js`. |
| `pnpm run start`   | Inicia o servidor Express com o build de produção.                |
| `pnpm run preview` | Pré-visualiza o build do Vite.                                    |
| `pnpm run check`   | Executa a verificação TypeScript sem emitir ficheiros.            |
| `pnpm run format`  | Formata os ficheiros do projeto com Prettier.                     |

Antes de abrir um Pull Request, execute pelo menos:

```bash
pnpm run check
pnpm run build
git diff --check
```

## Build e execução de produção

Para criar o build:

```bash
pnpm run build
```

O comando executa `vite build` para o cliente e `esbuild` para gerar o servidor Express. Depois, a aplicação pode ser iniciada com:

```bash
pnpm run start
```

O servidor usa `dist/index.js` e serve os ficheiros compilados do frontend.

## Deploy no Vercel

O repositório está ligado ao projeto Vercel `jocach-site`. O fluxo recomendado é:

1. criar uma branch de funcionalidade;
2. alterar o código e os assets necessários;
3. executar `pnpm run check` e `pnpm run build`;
4. abrir um Pull Request para `main`;
5. fazer merge apenas depois de rever o diff;
6. confirmar no Vercel que o deployment associado ao merge ficou em estado `READY`.

O domínio público esperado é [https://jocach.com](https://jocach.com). O Vercel também gera uma URL individual para cada deployment, útil para validação antes de divulgar alterações.

## Guia rápido para atualizar conteúdo

### Alterar textos institucionais

Os textos da página inicial estão em `client/src/pages/Home.tsx`. A missão, a visão e os valores encontram-se na secção com `id="missao"`.

### Alterar serviços

A lista principal de serviços está no array `serviceRows` em `client/src/pages/Services.tsx`. Cada item possui identificador, tipo de ícone, título, descrição e lista de detalhes.

### Alterar projetos

Os projetos estão no array `projects` em `client/src/pages/Projects.tsx`. Para adicionar ou retirar um projeto, atualize o array e reveja também a lista resumida existente na página inicial.

### Alterar menu e promoções Broda

O menu e as promoções estão no início de `client/src/pages/Broda.tsx`. As promoções são selecionadas de forma rotativa com base na semana do ano. Ao adicionar um item de menu, inclua também a imagem correspondente em `client/public/images`.

### Alterar contactos

Os contactos aparecem em mais do que um componente. Ao alterar email, telefone, WhatsApp ou localização, reveja `client/src/App.tsx`, `client/src/pages/Home.tsx`, `client/src/pages/Privacy.tsx` e as páginas que possuem chamadas específicas para contacto.

### Alterar navegação

As rotas principais estão definidas em `client/src/App.tsx`:

```text
/             Página inicial
/servicos     Serviços
/projetos     Projetos
/broda        Hamburgaria Broda
/privacidade  Privacidade e cookies
```

A rota de fallback apresenta a página `NotFound`.

## SEO e ficheiros públicos

O ficheiro `client/index.html` define o idioma `pt-AO`, título, descrição, palavras-chave, canonical URL, Open Graph, Twitter Card, fontes, favicon e Apple Touch Icon. As páginas também atualizam os metadados de forma específica através de `client/src/components/Seo.tsx`.

Os ficheiros `client/public/robots.txt` e `client/public/sitemap.xml` estão disponíveis na raiz pública do site. Sempre que forem criadas novas páginas indexáveis, reveja o sitemap e os metadados correspondentes.

## Privacidade e cookies

O componente `CookieConsent` controla a escolha do visitante no navegador. Por defeito, o site carrega apenas cookies e armazenamento local essenciais. Analytics só deve ser carregado depois de o visitante aceitar cookies.

Qualquer nova ferramenta de analytics, publicidade, chat ou marketing deve ser adicionada apenas depois de rever a política de privacidade, o comportamento do consentimento e as necessidades de atualização do texto legal.

## SEO e performance — Fase 2

A Fase 2 adiciona um fluxo de otimização técnica sem alterar os assets originais. O script `scripts/optimize-images.py` gera versões WebP responsivas para os heróis, imagens institucionais, interior da Broda e itens do menu. Os componentes usam `picture`, `srcset`, `sizes`, `loading="lazy"`, `decoding="async"` e dimensões intrínsecas. A imagem hero da homepage recebe preload condicional e `fetchpriority="high"`; as restantes imagens são carregadas conforme entram na área visível.

Os eventos comerciais são enviados através do Umami quando o visitante aceita cookies. O componente `CookieConsent` continua a impedir o carregamento do analytics antes do consentimento. Os eventos disponíveis incluem `whatsapp_click`, `email_click`, `proposal_email_click`, `contact_form_prepared`, `maps_click`, `broda_menu_view`, `broda_location_view` e `broda_contact_email_click`. Como o formulário usa `mailto:`, `contact_form_prepared` significa que o pedido foi preparado no cliente de email, não que a mensagem foi efetivamente enviada.

As variáveis de analytics e mapa estão exemplificadas em `.env.example`. Copie o ficheiro para `.env.local` em desenvolvimento e configure os valores reais no ambiente de deploy. Nunca versione chaves ou identificadores privados.

A camada de acessibilidade da Fase 2 inclui foco visível, `label` associado a cada campo do formulário, `aria-required` nos campos obrigatórios, dimensões de imagens para reduzir CLS, textos de links mais descritivos, suporte a `prefers-reduced-motion` e tradução da página 404 para português.

O sitemap inclui `lastmod` para as páginas alteradas em 20 de setembro de 2026. Depois de cada alteração real de conteúdo, reveja a data correspondente e confirme o sitemap no Google Search Console. A validação de performance deve ser feita com Lighthouse, PageSpeed Insights e testes reais em dispositivos móveis.

## Convenções de desenvolvimento

- Utilize TypeScript e mantenha os tipos próximos dos dados que representam.
- Reutilize componentes globais como `SiteHeader`, `SiteFooter`, `SectionIntro`, `ArrowLink` e `LocationBlock`.
- Mantenha os textos públicos em português e preserve a ortografia já utilizada no site.
- Adicione `alt` descritivo às imagens e `aria-label` aos elementos interativos que não tenham texto visível.
- Prefira alterações pequenas e focadas, especialmente em conteúdo e assets.
- Não versione chaves, tokens ou ficheiros de ambiente.
- Execute a validação local antes de fazer commit.
- Para alterações de branding, confirme o comportamento em fundos claros, fundos escuros, mobile e desktop.

## Estado atual da documentação

Este README descreve o conteúdo e a implementação disponíveis no repositório no momento da sua criação. Informações comerciais como nomes de projetos, preços, horários, contactos e estados de execução devem ser revistas com a equipa antes de futuras campanhas ou atualizações públicas.

## Licença

O `package.json` declara a licença **MIT** para o projeto. Os textos, logótipos, fotografias e demais assets de marca da JOCACH e da Broda devem ser tratados como conteúdo proprietário da empresa, salvo indicação expressa em contrário.

## Referências

[1]: https://github.com/telsioisidoro786-crypton/Jocach-Site "Repositório GitHub do site JOCACH"
[2]: https://jocach.com "Site público da JOCACH Lda"
[3]: https://vercel.com "Plataforma de deploy Vercel"
[4]: https://vite.dev "Documentação do Vite"
[5]: https://react.dev "Documentação do React"
[6]: https://www.typescriptlang.org "Documentação do TypeScript"
