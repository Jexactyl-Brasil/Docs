"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[586],{3905:(e,a,t)=>{t.d(a,{Zo:()=>d,kt:()=>b});var r=t(7294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=r.createContext({}),l=function(e){var a=r.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},d=function(e){var a=l(e.components);return r.createElement(c.Provider,{value:a},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},m=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=l(t),m=n,b=u["".concat(c,".").concat(m)]||u[m]||p[m]||o;return t?r.createElement(b,s(s({ref:a},d),{},{components:t})):r.createElement(b,s({ref:a},d))}));function b(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,s=new Array(o);s[0]=m;var i={};for(var c in a)hasOwnProperty.call(a,c)&&(i[c]=a[c]);i.originalType=e,i[u]="string"==typeof e?e:n,s[1]=i;for(var l=2;l<o;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},422:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=t(7462),n=(t(7294),t(3905));const o={sidebar_position:3},s="Configura\xe7\xe3o do Database",i={unversionedId:"jexactyl/Instala\xe7\xe3o/database",id:"jexactyl/Instala\xe7\xe3o/database",title:"Configura\xe7\xe3o do Database",description:"*",source:"@site/docs/jexactyl/1 - Instala\xe7\xe3o/database.md",sourceDirName:"jexactyl/1 - Instala\xe7\xe3o",slug:"/jexactyl/Instala\xe7\xe3o/database",permalink:"/docs/jexactyl/Instala\xe7\xe3o/database",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/jexactyl/1 - Instala\xe7\xe3o/database.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Download de arquivos",permalink:"/docs/jexactyl/Instala\xe7\xe3o/download"},next:{title:"Configura\xe7\xe3o do ambiente",permalink:"/docs/jexactyl/Instala\xe7\xe3o/environment"}},c={},l=[{value:"Criando database",id:"criando-database",level:3}],d={toc:l},u="wrapper";function p(e){let{components:a,...t}=e;return(0,n.kt)(u,(0,r.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"configura\xe7\xe3o-do-database"},"Configura\xe7\xe3o do Database"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"Para que o Painel obtenha e defina dados, precisaremos de um banco de dados.\n\xc9 aqui que todas as informa\xe7\xf5es sobre o Painel s\xe3o armazenadas.\nNesse caso, estamos usando o MySQL - embora o Amazon Lambda e outros\nservi\xe7os de banco de dados tamb\xe9m s\xe3o op\xe7\xf5es vi\xe1veis. "),(0,n.kt)("p",null,"?>\nUma coisa que voc\xea pode fazer para proteger e dimensionar ainda mais o Painel \xe9 ter um\nVPS separado ou servidor para base de dados. Isso pode ser ben\xe9fico para baixo do\npara coisas como implanta\xe7\xf5es de v\xe1rios clusters e bancos de dados de balanceamento de carga."),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"criando-database"},"Criando database"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"sudo mysql -u root -p\n\n# Lembre-se de alterar \"SuaSenha\" abaixo para ser uma senha exclusiva\nCREATE USER 'jexactyl'@'127.0.0.1' IDENTIFIED BY 'SuaSenha';\nCREATE DATABASE panel;\nGRANT ALL PRIVILEGES ON panel.* TO 'jexactyl'@'127.0.0.1' WITH GRANT OPTION;\nexit\n")))}p.isMDXComponent=!0}}]);