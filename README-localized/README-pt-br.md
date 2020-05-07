---
page_type: sample
products:
- office-excel
- office-onedrive
- ms-graph
languages:
- javascript
description: "Este exemplo mostra como um React app a uma conta  Microsoft work or school usando o Microsoft Graph API."
extensions:
  contentType: samples
  technologies:
  - Microsoft Graph
  - Microsoft identity platform
  services:
  - Microsoft identity platform
  - Excel
  - OneDrive 
  - Users
  platforms:
  - React
  createdDate: 11/30/2017 2:43:18 PM
---
# Exemplo do Excel Starter no Microsoft Graph para React

## Sumário

* [Introdução](#introduction)
* [Pré-requisitos](#prerequisites)
* [Registrar o aplicativo](#register-the-application)
* [Criar e executar o exemplo](#build-and-run-the-sample)
* [Perguntas e comentários](#questions-and-comments)
* [Colaboração](#contributing)
* [Recursos adicionais](#additional-resources)

## Introdução

Este exemplo mostra como conectar um aplicativo Angular 4.0 a uma conta corporativa ou de estudante da Microsoft (Azure Active Directory) usando a [API do Microsoft Graph](https://developer.microsoft.com/en-us/graph/) com o [SDK de JavaScript do Microsoft Graph](https://github.com/microsoftgraph/msgraph-sdk-javascript) para obter informações sobre o usuário conectado e carregar estas informações em um arquivo do Excel armazenado no OneDrive.

![imagem](https://user-images.githubusercontent.com/3375461/28985978-e5d3ea26-7919-11e7-8a69-a52bccd3f46b.png)

Depois que você autenticar e autorizar o aplicativo, ele receberá o nome e o endereço de e-mail do usuário que está conectado.

![imagem](readme-images/ReactScreenShot.png)

Quando você clica no botão **Gravar no Excel**, o aplicativo grava as informações do usuário em um arquivo do Excel armazenado na pasta raiz do OneDrive do usuário.

![imagem](readme-images/ExcelScreenShot.png)

## Pré-requisitos

Para usar este exemplo, você precisa do seguinte:
* [Node.js](https://nodejs.org/). É necessário ter o Node para executar o exemplo em um servidor de desenvolvimento e instalar as dependências.
* Ou uma[Conta Microsoft](https://www.outlook.com) ou uma [conta do conta do Office 365 para empresas](https://msdn.microsoft.com/en-us/office/office365/howto/setup-development-environment#bk_Office365Account)
* Carregue o arquivo **demo.xlsx** na raiz deste repositório para a pasta raiz da sua conta do OneDrive. Este arquivo contém uma tabela vazia com duas colunas.

## Registrar o aplicativo

1. Entre no [Portal do Azure – Registros do Aplicativo](https://go.microsoft.com/fwlink/?linkid=2083908) usando sua conta pessoal, ou sua conta corporativa ou de estudante.

2. Escolha **Novo registro**.

3. Na seção **Nome**, insira um nome de aplicativo relevante que será exibido aos usuários do aplicativo

1. Na seção **Tipos de conta com suporte**, selecione **Contas em qualquer diretório organizacional e contas pessoais da Microsoft (por exemplo, Skype, Xbox, Outlook.com)**.  

1. Selecione **Registrar** para criar o aplicativo. 
	
   A página Visão Geral do aplicativo mostra as propriedades do seu aplicativo.

4. Copie a **ID do aplicativo (cliente)**. Esse é o identificador exclusivo do aplicativo. 

5. Na lista de páginas para o aplicativo, selecione **Autenticação**.

6. Na seção **URIs de Redirecionamento**, escolha **Web** na lista suspensa **Tipo** e insira *http://localhost:3000/* como o **URI de Redirecionamento**. 

1. Em **Configurações Avançadas** habilite o fluxo de concessão implícita, marque as caixas **Tokens de acesso** e **Tokens de ID** 

8. Escolha **Salvar**.

## Criar e executar o exemplo

1. Usando seu IDE favorito, abra **configs.ts** em *src/*

2. Substitua o valor do espaço reservado **ENTER_YOUR_CLIENT_ID** pela ID do aplicativo de seu aplicativo do Azure registrado.

3. Em um prompt de comando, execute o seguinte comando no diretório raiz: `npm install`.
  
4. Execute`npm start` para iniciar o servidor de desenvolvimento.

5. Navegue até [http://localhost:3000/](http://localhost:3000/) no navegador da Web.

6. Clique no botão **Entrar com sua conta Microsoft**.

7. Entre com sua conta pessoal, corporativa ou de estudante, e conceda as permissões solicitadas.

8. Clique no botão **Gravar no Excel**. Verifique se as linhas foram adicionadas ao arquivo **demo.xslx** que você carregou na pasta raiz do OneDrive.


## Colaboração

Se quiser contribuir para esse exemplo, confira [CONTRIBUTING.MD](/CONTRIBUTING.md).

Este projeto adotou o [Código de Conduta de Código Aberto da Microsoft](https://opensource.microsoft.com/codeofconduct/).  Para saber mais, confira as [Perguntas frequentes sobre o Código de Conduta](https://opensource.microsoft.com/codeofconduct/faq/) ou entre em contato pelo [opencode@microsoft.com](mailto:opencode@microsoft.com) se tiver outras dúvidas ou comentários.

## Perguntas e comentários

Gostaríamos de saber sua opinião sobre este exemplo. Você pode enviar perguntas e sugestões na seção [Problemas](https://github.com/microsoftgraph/react-excelstarter-sample/issues) deste repositório.

As perguntas sobre o desenvolvimento do Microsoft Graph em geral devem ser postadas no [Stack Overflow](https://stackoverflow.com/questions/tagged/microsoftgraph). Não deixe de marcar as perguntas ou comentários com [microsoftgraph].
  
## Recursos adicionais

- [Outros exemplos de conexão usando o Microsoft Graph](https://github.com/MicrosoftGraph?utf8=%E2%9C%93&query=-Connect)
- [Microsoft Graph](https://developer.microsoft.com/en-us/graph/)

## Direitos autorais
Copyright (c) 2017 Microsoft. Todos os direitos reservados.
