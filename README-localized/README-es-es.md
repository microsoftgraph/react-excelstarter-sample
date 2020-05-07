---
page_type: sample
products:
- office-excel
- office-onedrive
- ms-graph
languages:
- javascript
description: "Este ejemplo muestra cómo conectar una aplicación React a una cuenta de trabajo o escuela de Microsoft usando el Microsoft Graph API"
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
# Ejemplo de inicio de Microsoft Graph Excel Starter para React

## Tabla de contenido

* [Introducción](#introduction)
* [Requisitos previos](#prerequisites)
* [Registrar la aplicación](#register-the-application)
* [Compilar y ejecutar el ejemplo](#build-and-run-the-sample)
* [Preguntas y comentarios](#questions-and-comments)
* [Colaboradores](#contributing)
* [Recursos adicionales](#additional-resources)

## Introducción

Este ejemplo muestra cómo conectar una aplicación Angular 4.0 a un trabajo o escuela de Microsoft (Azure Active Directory) utilizando el [Microsoft Graph API](https://developer.microsoft.com/en-us/graph/) con el [Microsoft Graph JavaScript SDK](https://github.com/microsoftgraph/msgraph-sdk-javascript) para obtener información sobre el usuario registrado y subir esa información a un archivo de Excel almacenado en OneDrive.

![imagen](https://user-images.githubusercontent.com/3375461/28985978-e5d3ea26-7919-11e7-8a69-a52bccd3f46b.png)

Una vez que autentique y autorice la aplicación, obtendrá el nombre y la dirección de correo electrónico del usuario que ha iniciado sesión.

![imagen](readme-images/ReactScreenShot.png)

Al hacer clic en el botón **Escribir en Excel**, la aplicación escribe la información del usuario en un archivo de Excel almacenado en la carpeta de OneDrive raíz del usuario.

![imagen](readme-images/ExcelScreenShot.png)

## Requisitos previos

Para usar este ejemplo, necesita lo siguiente:
* [Node.js](https://nodejs.org/). Se requiere un nodo para ejecutar la muestra en un servidor de desarrollo e instalar dependencias.
* O bien una [cuenta de Microsoft](https://www.outlook.com)o[cuenta de Office 365 para empresa](https://msdn.microsoft.com/en-us/office/office365/howto/setup-development-environment#bk_Office365Account)
* Cargar el archivo **demo.xlsx**en la raíz de este repositorio a la carpeta raíz de su cuenta de OneDrive. Este archivo contiene una tabla vacía con dos columnas.

## Registrar la aplicación

1. Inicie sesión en el [Azure Portal: Registros de aplicaciones](https://go.microsoft.com/fwlink/?linkid=2083908) mediante su cuenta personal, profesional o escolar.

2. Seleccione **Nuevo registro**.

3. En la sección **Nombre**, introduzca un nombre de aplicación significativo que se le mostrará a los usuarios de la aplicación

1. En la sección **Tipos de cuentas admitidas**, seleccione **Cuentas en cualquier directorio organizacional y cuentas personales de Microsoft (ejemplo, Skype, Xbox, Outlook.com)**  

1. Seleccione **Registrar** para crear la aplicación. 
	
   En la página de información general de la aplicación se muestran las propiedades de la aplicación.

4. Copie la **Identificación del cliente de aplicación**. Este es el identificador único de su aplicación. 

5. En la lista de páginas de la aplicación, seleccione **Autenticación**.

6. En la sección **Redirigir URI**, elija **Web** en el **Tipo** menú desplegable e introduzca*http://localhost:3000/* como la **Redirigir URI**. 

1. En **Configuración avanzada**, habilite el flujo de concesiones implícitas marcando las casillas **Token de acceso** y **Tokens de ID.** 

8. Elija **Guardar**.

## Compilar y ejecutar el ejemplo

1. Con su IDE favorito, abra **configs.ts** en *src/*.

2. Reemplace el**ENTER_YOUR_CLIENT_ID** valor del marcador de posición con el ID. de aplicación de la aplicación de Azure registrada.

3. En un símbolo del sistema, ejecute el siguiente comando en el directorio raíz: `npm install`.
  
4. Ejecute `npm start` para iniciar el servidor de desarrollo.

5. Navegue hasta[http://localhost:3000/](http://localhost:3000/) en el explorador web.

6. Seleccione el botón **Iniciar sesión con su cuenta de Microsoft**.

7. Ingrese con su cuenta personal, de trabajo o de escuela y conceda los permisos solicitados.

8. Haga clic en el botón **Escribir en Excel**. Compruebe que las filas se han agregado al archivo **demo.xslx** que cargó en la carpeta raíz de OneDrive.


## Colaboradores

Si quiere hacer su aportación a este ejemplo, vea [CONTRIBUTING.MD](/CONTRIBUTING.md).

Este proyecto ha adoptado el [Código de conducta de código abierto de Microsoft](https://opensource.microsoft.com/codeofconduct/). Para obtener más información, vea [Preguntas frecuentes sobre el código de conducta](https://opensource.microsoft.com/codeofconduct/faq/) o póngase en contacto con [opencode@microsoft.com](mailto:opencode@microsoft.com) si tiene otras preguntas o comentarios.

## Preguntas y comentarios

Nos encantaría recibir sus comentarios sobre esta muestra. Puede enviar sus preguntas y sugerencias en la [sección](https://github.com/microsoftgraph/react-excelstarter-sample/issues) de asuntos de este repositorio.

Las preguntas sobre el desarrollo de Microsoft Graph en general deben enviarse a [Stack Overflow](https://stackoverflow.com/questions/tagged/microsoftgraph). Asegúrate de que tus preguntas o comentarios estén etiquetados con [microsoftgraph].
  
## Recursos adicionales

- [Otros ejemplos de Microsoft Graph Connect](https://github.com/MicrosoftGraph?utf8=%E2%9C%93&query=-Connect)
- [Microsoft Graph](https://developer.microsoft.com/en-us/graph/)

## Derechos de autor
Copyright (c) 2017 Microsoft. Todos los derechos reservados.
