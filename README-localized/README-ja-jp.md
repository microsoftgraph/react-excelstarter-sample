---
page_type: sample
products:
- office-excel
- office-onedrive
- ms-graph
languages:
- javascript
description: "このサンプルでは、Microsoft Graph API を使用して React アプリを職場または学校の Microsoft アカウントに接続する方法を示します。"
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
# React 用 Microsoft Graph Excel Starter のサンプル

## 目次

* [はじめに](#introduction)
* [前提条件](#prerequisites)
* [アプリケーションの登録](#register-the-application)
* [サンプルのビルドと実行](#build-and-run-the-sample)
* [質問とコメント](#questions-and-comments)
* [投稿](#contributing)
* [その他のリソース](#additional-resources)

## 概要

このサンプルは、サインインしているユーザーに関する情報を取得し、その情報を OneDrive に格納されている Excel ファイルにアップロードするために、[Microsoft Graph API](https://developer.microsoft.com/en-us/graph/) と [Microsoft Graph JavaScript SDK](https://github.com/microsoftgraph/msgraph-sdk-javascript) を使用して Microsoft の職場または学校 (Azure Active Directory) アカウントに Angular 4.0 アプリを接続する方法を示しています。

![image](https://user-images.githubusercontent.com/3375461/28985978-e5d3ea26-7919-11e7-8a69-a52bccd3f46b.png)

アプリケーションを認証および承認すると、サインインしているユーザーの名前とメール アドレスを取得します。

![image](readme-images/ReactScreenShot.png)

[**Excel に書き込む**] ボタンをクリックすると、アプリケーションはユーザー情報をユーザーのルート OneDrive フォルダーに格納されている Excel ファイルに書き込みます。

![image](readme-images/ExcelScreenShot.png)

## 前提条件

このサンプルを使用するには、次のものが必要です:
* [Node.js](https://nodejs.org/)。Node は、開発サーバーでサンプルを実行して、依存関係をインストールするために必要です。
*[Microsoft アカウント](https://www.outlook.com)または [Office 365 for business アカウント](https://msdn.microsoft.com/en-us/office/office365/howto/setup-development-environment#bk_Office365Account)
* このリポジトリのルートにある **demo.xlsx** ファイルを OneDrive アカウントのルート フォルダーにアップロードします。このファイルには空のテーブルが含まれており、テーブルには列が 2 つあります。

## アプリケーションの登録

1. 個人用アカウントか職場または学校アカウントのいずれかを使用して、[Azure Portal の [アプリ登録]](https://go.microsoft.com/fwlink/?linkid=2083908) にサインインします。

2. [**新規登録**] を選択します。

3. [**名前**] セクションに、アプリのユーザーに表示されるわかりやすいアプリケーション名を入力します。

1. [**サポートされているアカウントの種類**] セクションで、[**組織ディレクトリ内のアカウントと個人の Microsoft アカウント (例: Skype、Xbox、Outlook.com)**] を選択します。  

1. [**登録**] を選択して、アプリケーションを作成します。 
	
   アプリケーションの概要ページには、アプリのプロパティが表示されます。

4. **アプリケーション (クライアント) ID** をコピーします。これは、アプリの一意識別子です。 

5. アプリのページの一覧から [**認証**] を選択します。

6. [**リダイレクト URI**] セクションで、[**種類**] ドロップダウンから [**Web**] を選択し、**リダイレクト URI** として *http://localhost:3000/* を入力します。 

1. [**詳細設定**] で、[**アクセス トークン**] および [**ID トークン**] チェック ボックスをオンにして、暗黙的な許可のフローを有効にします 

8. [**保存**] を選択します。

## サンプルのビルドと実行

1. お気に入りの IDE を使用して、*src/* の **configs.ts** を開きます。

2. **ENTER_YOUR_CLIENT_ID** プレースホルダー値を登録済みの Azure アプリケーションのアプリケーション ID に置き換えます。

3. コマンド プロンプトで、ルート ディレクトリで次のコマンドを実行します: `npm install`。
  
4. `npm start` を実行して、開発サーバーを起動します。

5. Web ブラウザーで [http://localhost:3000/](http://localhost:3000/) に移動します。

6. [**Microsoft アカウントを使用してサインインする**] ボタンを選択します。

7. 個人用あるいは職場または学校アカウントでサインインし、要求されたアクセス許可を付与します。

8. [**Excel に書き込む**] ボタンをクリックします。ルート OneDrive フォルダーにアップロードした **demo.xlsx** ファイルに行が追加されていることを確認します。


## 投稿

このサンプルに投稿する場合は、[CONTRIBUTING.MD](/CONTRIBUTING.md) を参照してください。

このプロジェクトでは、[Microsoft Open Source Code of Conduct (Microsoft オープン ソース倫理規定)](https://opensource.microsoft.com/codeofconduct/) が採用されています。詳細については、「[Code of Conduct の FAQ (倫理規定の FAQ)](https://opensource.microsoft.com/codeofconduct/faq/)」を参照してください。また、その他の質問やコメントがあれば、[opencode@microsoft.com](mailto:opencode@microsoft.com) までお問い合わせください。

## 質問とコメント

このサンプルに関するフィードバックをお寄せください。質問や提案は、このリポジトリの「[問題](https://github.com/microsoftgraph/react-excelstarter-sample/issues)」セクションで送信できます。

Microsoft Graph 開発全般の質問につきましては、「[Stack Overflow](https://stackoverflow.com/questions/tagged/microsoftgraph)」に投稿してください。質問やコメントには、必ず "microsoftgraph" とタグを付けてください。
  
## その他のリソース

- [その他の Microsoft Graph Connect サンプル](https://github.com/MicrosoftGraph?utf8=%E2%9C%93&query=-Connect)
- [Microsoft Graph](https://developer.microsoft.com/en-us/graph/)

## 著作権
Copyright (c) 2017 Microsoft.All rights reserved.
