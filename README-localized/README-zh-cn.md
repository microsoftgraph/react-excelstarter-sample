---
page_type: sample
products:
- office-excel
- office-onedrive
- ms-graph
languages:
- javascript
description: "此示例演示如何使用 Microsoft Graph API 将 React 应用连接到 Microsoft 工作或学校帐户。"
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
# 针对 React 的 Microsoft Graph Excel Starter 示例

## 目录

* [简介](#introduction)
* [先决条件](#prerequisites)
* [注册应用程序](#register-the-application)
* [生成并运行示例](#build-and-run-the-sample)
* [问题和意见](#questions-and-comments)
* [参与](#contributing)
* [其他资源](#additional-resources)

## 简介

借助 [Microsoft Graph JavaScript SDK](https://github.com/microsoftgraph/msgraph-sdk-javascript)，此示例演示如何使用 [Microsoft Graph API](https://developer.microsoft.com/en-us/graph/) 将 Angular 4.0 应用连接到 Microsoft 工作或学校 (Azure Active Directory) 以获取有关登录用户的信息，并将该信息上传到存储在 OneDrive 中的 Excel 文件。

![image](https://user-images.githubusercontent.com/3375461/28985978-e5d3ea26-7919-11e7-8a69-a52bccd3f46b.png)

对应用程序进行验证和授权后，它将获得登录用户的用户名和电子邮件地址。

![image](readme-images/ReactScreenShot.png)

单击“**写入 Excel**”按钮时，应用程序会将用户信息写入存储在用户根 OneDrive 文件夹中的 Excel 文件。

![image](readme-images/ExcelScreenShot.png)

## 先决条件

若要使用此示例，需要以下内容：
* [Node.js](https://nodejs.org/)。需要提供节点才能在开发服务器上运行示例和安装依赖项。
* [Microsoft 帐户](https://www.outlook.com) 或 [Office 365 商业版帐户](https://msdn.microsoft.com/en-us/office/office365/howto/setup-development-environment#bk_Office365Account)
* 将此存储库根目录中的 **demo.xlsx** 文件上传到你 OneDrive 帐户的根文件夹。此文件包含一个包含两列的空表格。

## 注册应用程序

1. 使用你的个人或工作或学校帐户登录 [Azure 门户 - 应用注册](https://go.microsoft.com/fwlink/?linkid=2083908)。

2. 选择“**新注册**”。

3. 在“**名称**”部分输入一个会显示给应用用户的有意义的应用程序名称

1. 在“**支持的帐户类型**”部分，选择“**任何组织目录中的帐户和个人 Microsoft 帐户(例如 Skype、Xbox、Outlook.com)**”  

1. 选择“**注册**”以创建应用程序。 
	
   应用程序的“概述”页面显示了应用程序的属性。

4. 复制**应用程序（客户端）ID**。这是应用的唯一标识符。 

5. 在应用的页面列表中，选择“**身份验证**”。

6. 在“**重定向 URI**”部分中，从“**类型**”下拉列表中选择“**Web**”，然后输入 *http://localhost:3000/* 作为“**重定向 URI**”。 

1. 在“**高级设置**”下，通过选中“**访问令牌**”和“**ID 令牌**”框来启用隐式授权流 

8. 选择“**保存**”。

## 生成并运行示例

1. 使用你最喜爱的 IDE，打开 *src/* 中的 **configs.ts**。

2. 将 **ENTER_YOUR_CLIENT_ID** 占位符值替换为所注册的 Azure 应用程序的应用程序 ID。

3. 在命令提示窗口的根目录中运行以下命令：`npm install`。
  
4. 运行 `npm start` 来启动开发服务器。

5. 在 Web 浏览器中导航到 [http://localhost:3000/](http://localhost:3000/)。

6. 选择“**使用 Microsoft 帐户登录**”按钮。

7. 使用个人帐户或者工作或学校帐户登录，并授予所请求的权限。

8. 单击“**写入 Excel**”按钮。验证是否已将相应行添加到你上传到根 OneDrive 文件夹的 **demo.xslx** 文件。


## 参与

如果想要参与本示例，请参阅 [CONTRIBUTING.MD](/CONTRIBUTING.md)。

此项目已采用 [Microsoft 开放源代码行为准则](https://opensource.microsoft.com/codeofconduct/)。有关详细信息，请参阅[行为准则 FAQ](https://opensource.microsoft.com/codeofconduct/faq/)。如有其他任何问题或意见，也可联系 [opencode@microsoft.com](mailto:opencode@microsoft.com)。

## 问题和意见

我们乐意倾听你对此示例的反馈。你可以在该存储库中的[问题](https://github.com/microsoftgraph/react-excelstarter-sample/issues)部分将问题和建议发送给我们。

与 Microsoft Graph 开发相关的一般问题应发布到 [Stack Overflow](https://stackoverflow.com/questions/tagged/microsoftgraph)。请确保你的问题或意见标记有 [microsoftgraph]。
  
## 其他资源

- [其他 Microsoft Graph 连接示例](https://github.com/MicrosoftGraph?utf8=%E2%9C%93&query=-Connect)
- [Microsoft Graph](https://developer.microsoft.com/en-us/graph/)

## 版权信息
版权所有 (c) 2017 Microsoft。保留所有权利。
