"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7258],{3905:(e,r,o)=>{o.d(r,{Zo:()=>l,kt:()=>g});var t=o(7294);function a(e,r,o){return r in e?Object.defineProperty(e,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[r]=o,e}function i(e,r){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),o.push.apply(o,t)}return o}function n(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?i(Object(o),!0).forEach((function(r){a(e,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}function c(e,r){if(null==e)return{};var o,t,a=function(e,r){if(null==e)return{};var o,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)o=i[t],r.indexOf(o)>=0||(a[o]=e[o]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)o=i[t],r.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=t.createContext({}),d=function(e){var r=t.useContext(s),o=r;return e&&(o="function"==typeof e?e(r):n(n({},r),e)),o},l=function(e){var r=d(e.components);return t.createElement(s.Provider,{value:r},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var o=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=d(o),m=a,g=u["".concat(s,".").concat(m)]||u[m]||p[m]||i;return o?t.createElement(g,n(n({ref:r},l),{},{components:o})):t.createElement(g,n({ref:r},l))}));function g(e,r){var o=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=o.length,n=new Array(i);n[0]=m;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c[u]="string"==typeof e?e:a,n[1]=c;for(var d=2;d<i;d++)n[d]=o[d];return t.createElement.apply(null,n)}return t.createElement.apply(null,o)}m.displayName="MDXCreateElement"},2411:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>s,contentTitle:()=>n,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var t=o(7462),a=(o(7294),o(3905));const i={sidebar_position:1},n="Configurar Discord 0Auth para Jexactyl",c={unversionedId:"Jexactyl/Extras/Adicional/configura\xe7\xe3o",id:"Jexactyl/Extras/Adicional/configura\xe7\xe3o",title:"Configurar Discord 0Auth para Jexactyl",description:"*",source:"@site/docs/Jexactyl/6 - Extras/2 - Adicional/configura\xe7\xe3o.md",sourceDirName:"Jexactyl/6 - Extras/2 - Adicional",slug:"/Jexactyl/Extras/Adicional/configura\xe7\xe3o",permalink:"/docs/Jexactyl/Extras/Adicional/configura\xe7\xe3o",draft:!1,editUrl:"https://github.com/Next-Panel/Docs/docs/Jexactyl/6 - Extras/2 - Adicional/configura\xe7\xe3o.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Migrar do Pterodactyl v1.x",permalink:"/docs/Jexactyl/Extras/Migra\xe7\xe3o/pterodactyl"},next:{title:"Aceite pagamentos com PayPal",permalink:"/docs/Jexactyl/Extras/Adicional/paypal"}},s={},d=[{value:"Configurar um aplicativo Discord",id:"configurar-um-aplicativo-discord",level:3},{value:"Obtenha o ID e o segredo do cliente",id:"obtenha-o-id-e-o-segredo-do-cliente",level:3},{value:"Configurar URLs de redirecionamento",id:"configurar-urls-de-redirecionamento",level:3},{value:"Adicionar ID e Segredo do Cliente ao Jexactyl",id:"adicionar-id-e-segredo-do-cliente-ao-jexactyl",level:3},{value:"Teste seu Aplicativo",id:"teste-seu-aplicativo",level:3}],l={toc:d},u="wrapper";function p(e){let{components:r,...i}=e;return(0,a.kt)(u,(0,t.Z)({},l,i,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"configurar-discord-0auth-para-jexactyl"},"Configurar Discord 0Auth para Jexactyl"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Este guia mostrar\xe1 como vincular um aplicativo de autentica\xe7\xe3o do Discord ao Jexactyl, o que permite\nos usu\xe1rios se autentiquem com o Jexactyl por meio de sua conta do Discord."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"configurar-um-aplicativo-discord"},"Configurar um aplicativo Discord"),(0,a.kt)("p",null,"Em primeiro lugar, voc\xea precisar\xe1 criar um aplicativo Discord para obter um ID de cliente e um segredo de cliente.\nVoc\xea pode fazer isso acessando o ",(0,a.kt)("a",{parentName:"p",href:"https://discord.com/developers"},"Discord Developer Portal"),"\ne clicando no bot\xe3o 'Novo aplicativo'. D\xea um nome de sua escolha (isso ficar\xe1 vis\xedvel para\nclientes) e clique em 'Criar'."),(0,a.kt)("h3",{id:"obtenha-o-id-e-o-segredo-do-cliente"},"Obtenha o ID e o segredo do cliente"),(0,a.kt)("p",null,"Em seguida, precisamos pegar duas coisas: o ID do nosso aplicativo e tamb\xe9m seu segredo para manter o aplicativo seguro.\n",(0,a.kt)("img",{alt:"Discord ID image",src:o(6265).Z,width:"1920",height:"673"}),"\n",(0,a.kt)("img",{alt:"Discord ID image 2",src:o(7178).Z,width:"667",height:"207"})),(0,a.kt)("h3",{id:"configurar-urls-de-redirecionamento"},"Configurar URLs de redirecionamento"),(0,a.kt)("p",null,"Agora voc\xea precisar\xe1 configurar os redirecionamentos para que o Discord saiba para onde apontar seus usu\xe1rios ap\xf3s a autentica\xe7\xe3o.\nVoc\xea pode fazer isso clicando no bot\xe3o 'Adicionar redirecionamento' e adicionando esses dois URLs.\n",(0,a.kt)("img",{alt:"Discord Redirect image",src:o(7407).Z,width:"757",height:"318"})),(0,a.kt)("h3",{id:"adicionar-id-e-segredo-do-cliente-ao-jexactyl"},"Adicionar ID e Segredo do Cliente ao Jexactyl"),(0,a.kt)("p",null,"Por fim, v\xe1 para a p\xe1gina de configura\xe7\xf5es de 'Registro do usu\xe1rio' do Jexactyl e preencha seu ID e segredo do cliente\npara Disc\xf3rdia. Certifique-se de ativar o m\xf3dulo de registro, caso contr\xe1rio, os usu\xe1rios n\xe3o poder\xe3o se autenticar!\n",(0,a.kt)("img",{alt:"Enable Jexactyl image",src:o(1273).Z,width:"1920",height:"431"})),(0,a.kt)("h3",{id:"teste-seu-aplicativo"},"Teste seu Aplicativo"),(0,a.kt)("p",null,"Experimente e tente fazer login via Discord. Se voc\xea encontrar um erro como ",(0,a.kt)("inlineCode",{parentName:"p"},"invalid_redirect_uri"),", consulte\netapa 3 novamente e certifique-se de que suas configura\xe7\xf5es estejam 100% corretas e v\xe1lidas."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"parab\xe9ns! O Jexactyl Discord Auth deve estar funcionando normalmente.\nSe voc\xea encontrar algum problema, informe-nos em nosso ",(0,a.kt)("a",{parentName:"p",href:"https://discord.gg/8r7n7mU33R"},"Discord"),".")))}p.isMDXComponent=!0},6265:(e,r,o)=>{o.d(r,{Z:()=>t});const t=o.p+"assets/images/discord_id-8d66ec80331f1a30e519d2f659163eee.png"},7178:(e,r,o)=>{o.d(r,{Z:()=>t});const t=o.p+"assets/images/discord_id_2-51d1dcadf0a6aa92d4396886c2cc7e01.png"},1273:(e,r,o)=>{o.d(r,{Z:()=>t});const t=o.p+"assets/images/discord_jexactyl-24591d438aef36c87c9270373acb54cb.png"},7407:(e,r,o)=>{o.d(r,{Z:()=>t});const t=o.p+"assets/images/discord_redirect-b8c0359f28d10203318bddebc176e934.png"}}]);