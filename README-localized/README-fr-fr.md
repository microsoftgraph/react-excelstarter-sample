---
page_type: sample
products:
- office-excel
- office-onedrive
- ms-graph
languages:
- javascript
description: "Cet exemple présente la connexion entre une application React et un compte professionnel ou scolaire utilisant l’API Microsoft Graph."
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
# Exemple de démarrage Microsoft Graph Excel pour React

## Table des matières

* [Introduction](#introduction)
* [Conditions préalables](#prerequisites)
* [Inscription de l’application](#register-the-application)
* [Création et exécution de l’exemple](#build-and-run-the-sample)
* [Questions et commentaires](#questions-and-comments)
* [Contribution](#contributing)
* [Ressources supplémentaires](#additional-resources)

## Introduction

Cet exemple présente la connexion d'une application Angular 4.0 à un compte professionnel ou scolaire Microsoft (Azure Active Directory) utilisant l’[API Microsoft Graph](https://developer.microsoft.com/en-us/graph/) avec le [Kit de développement logiciel Microsoft JavaScript](https://github.com/microsoftgraph/msgraph-sdk-javascript) pour obtenir les informations de connexion de l'utilisateur et les télécharger dans un fichier Excel stocké dans OneDrive.

![image](https://user-images.githubusercontent.com/3375461/28985978-e5d3ea26-7919-11e7-8a69-a52bccd3f46b.png)

Une fois l’application authentifiée et autorisée, elle obtient le nom et l’adresse de courrier électronique de l’utilisateur connecté.

![image](readme-images/ReactScreenShot.png)

Lorsque vous cliquez sur le bouton **Écrire à Excel**, l’application écrit les informations utilisateur dans un fichier Excel stocké dans le dossier racine OneDrive de l’utilisateur.

![image](readme-images/ExcelScreenShot.png)

## Conditions préalables

Pour utiliser cet exemple, l'élément suivant est nécessaire :
* [Node.js](https://nodejs.org/). Un nœud est nécessaire pour exécuter l’exemple sur un serveur de développement et installer des dépendances.
* Soit un [compte Microsoft](https://www.outlook.com), soit [compte Office 365 pour les entreprises](https://msdn.microsoft.com/en-us/office/office365/howto/setup-development-environment#bk_Office365Account)
* Téléchargez le fichier **demo.xlsx** situé dans la racine de ce référentiel vers le dossier racine de votre compte OneDrive. Ce fichier contient un tableau vide avec deux colonnes.

## Inscription de l’application

1. Connectez-vous au [Portail Azure : inscription des applications](https://go.microsoft.com/fwlink/?linkid=2083908) à l'aide votre compte personnel, professionnel ou scolaire.

2. Sélectionnez **Nouvelle inscription**.

3. Dans la section **Nom**, saisissez un nom d’application explicite qui s’affichera pour les utilisateurs de l’application.

1. Dans la section **Types de comptes pris en charge**, sélectionnez **Comptes dans un annuaire organisationnel et comptes personnels Microsoft (par ex. Skype, Xbox, Outlook.com)**  

1. Sélectionnez **S’inscrire** pour créer l’application. 
	
   La page de présentation de l’application affiche les propriétés de votre application.

4. Copiez l'**ID de l’application (client)**. Il s’agit de l’identificateur unique de votre application. 

5. Dans la liste des pages de l’application, sélectionnez **Authentification**.

6. Dans la section **Rediriger les URI**, sélectionnez **web** dans la liste déroulante **Taper**, puis entrez *http://localhost:3000/* en tant qu’**URI de redirection**. 

1. Dans les **Paramètres avancés**, activez le flux d’octroi implicite en vérifiant les **Jetons d’accès** et cases de **Jetons d'ID** 

8. Sélectionnez **Enregistrer**.

## Création et exécution de l’exemple

1. À l’aide de votre Environnement de développement intégré préféré(IDE), ouvrez **config.ts** dans *src/*.

2. Dans le champ **ENTER_YOUR_CLIENT_ID**, remplacez la valeur d'espace réservé par l’ID d’application de votre application Azure inscrite.

3. Dans une invite de commandes, exécutez la commande suivante dans le répertoire racine : `npm install`.
  
4. Exécutez`npm start` pour démarrer le serveur de développement.

5. Naviguer vers [http://localhost:3000/](http://localhost:3000/) dans votre navigateur web.

6. Sélectionnez le bouton **Connectez-vous à l’aide de votre compte Microsoft**.

7. Connectez-vous à votre compte personnel, professionnel ou scolaire et accordez les autorisations demandées.

8. Cliquez sur le bouton **Écrire à Excel**. Vérifiez que les lignes ont été ajoutées au fichier **demo.xslx** que vous avez téléchargé dans votre dossier racine OneDrive.


## Contribution

Si vous souhaitez contribuer à cet exemple, voir [CONTRIBUTING.MD](/CONTRIBUTING.md).

Ce projet a adopté le [code de conduite Open Source de Microsoft](https://opensource.microsoft.com/codeofconduct/). Pour en savoir plus, reportez-vous à la [FAQ relative au code de conduite](https://opensource.microsoft.com/codeofconduct/faq/) ou contactez [opencode@microsoft.com](mailto:opencode@microsoft.com) pour toute question ou tout commentaire.

## Questions et commentaires

Nous aimerions connaître votre opinion sur cet exemple. Vous pouvez faire part de vos questions et suggestions dans la rubrique [Problèmes](https://github.com/microsoftgraph/react-excelstarter-sample/issues) de ce référentiel.

Les questions générales sur le développement de Microsoft Graph doivent être publiées sur [Stack Overflow](https://stackoverflow.com/questions/tagged/microsoftgraph). Veillez à poser vos questions ou à rédiger vos commentaires en utilisant les tags [microsoftgraph].
  
## Ressources supplémentaires

- [Autres exemples de connexion avec Microsoft Graph](https://github.com/MicrosoftGraph?utf8=%E2%9C%93&query=-Connect)
- [Microsoft Graph](https://developer.microsoft.com/en-us/graph/)

## Copyright
Copyright (c) 2017 Microsoft. Tous droits réservés.
