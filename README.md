Esse é um projeto [Next.js](https://nextjs.org) criado executando [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).
Escolhi esse framework por usar typescript e ser baseado no React. Também uso o serviço da [Vercel](https://vercel.com/), empresa responsável pelo Next, para fazer o deploy. [Link do projeto](https://roleta-mbl.vercel.app/)

## Para executar o projeto localmente

Clone o projeto:

```bash
git clone git@github.com:Felipe6090/roleta-mbl.git
```

Instale as dependências:

```bash
cd roleta-mbl
npm i
```

Configure o [prisma](https://www.prisma.io/), é preciso criar um arquivo `.env` na root do projeto com as configurações do seu banco de dados local!

```bash
npx prisma generate
```

Execute o servidor de desenvolvimento:

```bash
npm run dev
```

Abra no seu navegador a url [http://localhost:3000](http://localhost:3000)

## Estrutura do projeto

O Next possui um sistema de [rotas](https://nextjs.org/docs/app/building-your-application/routing) integrado, `page.tsx` representa uma página, sendo sua rota separada pelo nome da pasta dentro de `/src/app`. Como esse projeto só possui uma página, só temos um `page.tsx` em `app`.

O projeto possui 4 componentes:

- *roulette*: O carrossel principal da aplicação
- *banner*: Os item do carrossel, exibe o título, imagem de fundo e tags.
- *modal*: O modal aberto ao clickar em um banner, também exibe os 3 items citados no anterior mais uma descrição.
- *tag*: A tag é apenas um decorador dos outros dois componentes, ele possui a cor da fonte, cor de fundo e titulo como personalizáveis 

Os 3 últimos componentes são de fácil mudança e personalização mas o carrossel é complicado.


```
.
├── prisma
│   └── schema.prisma
├── public
├── src
│   ├── app
│   │   ├── api
│   │   │   ├── content
│   │   │   └── tag
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components
│   │   ├── banner
│   │   ├── modal
│   │   ├── roulette
│   │   └── tag
│   ├── lib
│   │   └── prisma.ts
│   └── utils
│       └── constants.ts
├── .env
├── package.json
└── tsconfig.json
```



Utilizei o [prisma](https://www.prisma.io/) para gerenciar o banco de dados pela [versatilidade](https://www.prisma.io/docs/orm/overview/databases) dele. Neste projeto eu uso [postgres](https://www.prisma.io/docs/orm/overview/databases/postgresql), você pode mudar em `/prisma/schema.prisma`. O Next também pode fazer requisições http ou querys sql, recebo e manipulo os dados de conteudo e tags em `/src/app/api`.

No banco de dados temos 3 tabelas:

### Contents - Conteudo dos banners e modais

| **ID** | **Título**                 | **URL da Imagem**       | **Descrição**                                                   | 
|--------|----------------------------|-------------------------|-----------------------------------------------------------------|
| 1      | Tutorial Mamãefalei       | /mamaefalei.jpeg        | Aprenda como planejar, produzir e editar a sua ação de mamãe falei | 
| 2      | Povos Indo-Europeios      | /mithra.jpg             | Conheça a história de um dos povos mais importantes da humanidade | 
| 3      | Aulas Academia MBL        | /banner-academia.jpg    | Assista às aulas da academia!                                   | 
| 4      | Aulas Academia            | /banner-academia.jpg    | Assista às aulas da academia!                                   | 
| 5      | Aulas MBL                 | /banner-academia.jpg    | Assista às aulas da academia!                                   | 

No banco de dados é salvo apenas o caminho para a imagem de fundo, ela deve ficar salva em `/public`

---

### Tags

| **ID** | **Título**    | **Cor de Fundo** | **Cor do Texto** |
|--------|---------------|------------------|------------------|
| 1      | Novo          | #FF6347          | #FFFFFF          |
| 2      | Aula          | #69b7ea          | #FFFFFF          |
| 3      | Mini-Doc      | #4CAF50          | #FFFFFF          |

---

### Contents_Tags - Relação entre tabelas

| **Content ID** | **Tag ID** |
|----------------|------------|
