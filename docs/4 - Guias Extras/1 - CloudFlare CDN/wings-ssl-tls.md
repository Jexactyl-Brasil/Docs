---
sidebar_position: 2
---

# Configurando Wings

## Configurar o sistema de segurança da CloudFlare SSL/TLS para as Wings

:::danger AVISO
Isto é uma continuação do [CloudFlare SSL/TLS](/docs/4%20-%20Guias%20Extras/1%20-%20CloudFlare%20CDN/Completo(estrito).md), Configure ele primeiro antes de seguir com essa documentação, caso ja tenha feito então pode ignorar esse aviso.
:::

:::danger AVISO 2
Usar Proxy na Wings da segunrança, porém, o CloudFlare "Gratuito" só permite uma porta com proxy alteravel "8443", e devido a isso o "SFTP" Não funciona no "FQDN" Usado pelas wings, porém basta criar um dominio "A" Sem proxy, para poder usar o "SFTP" de outra forma, porém o recomendado mesmo é o uso do CloudFlare "Pago" para melhor segurança
:::

:::danger AVISO 3
Usar Proxy na Wings da segunrança, porém, o CloudFlare "Gratuito" só permite uma porta com proxy alteravel "8443", e devido a isso Usar o dominio do Node Não funciona no "IP alias" Usado pelas wings, porém basta criar um dominio "A" Sem proxy, para poder Usar o dominio do Node no "IP alias", de preferencia, use o "IP" da maquina.
:::

### Configurando as Wings

:::info Informação
Esta documentação é uma continuação da Instalação das [Wings](/docs/2%20-%20Pterodactyl/4%20-%20Wings/Instala%C3%A7%C3%A3o.md), só use essa documentação se ja tiver configurado o básico.
:::


Após ja ter um node, clique nele e haverá uma guia chamada Definições. Edite as configurações marcadas na Imagem a baixo.





`config.yml` em `/etc/pterodactyl` e salve-o.

Alternativamente, você pode clicar no botão Gerar Token, copiar o comando bash e colá-lo em seu terminal(em alguns casos se isso não funcionar use o metodo normal).

### Iniciando Wings

Para iniciar o Wings, basta executar o comando abaixo, que o iniciará em um modo de depuração. Depois de confirmar que ele está sendo executado sem erros, use `CTRL + C` para encerrar o processo e daemonizá-lo seguindo as instruções abaixo. Dependendo da conexão de internet do seu servidor, puxar e iniciar o Wings pela primeira vez pode levar alguns minutos.

```bash
sudo wings --debug
```

Opcionalmente, você pode adicionar o sinalizador `--debug` para executar o Wings no modo de depuração.