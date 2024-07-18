import React from "react";
import CodeBlock from '@theme/CodeBlock';

/**
 * Isso esta aqui por que o CodeBlock no mdx estava retornando erro,
 * é uma solução que bem provavelmente no futuro será mudada para algo melhor
 */

export function ApacheNoSSLs(jex = false) {
  return `# Substitua o <domain> pelo nome do seu dominio ou seu IP
<VirtualHost *:80>
  ServerName <domain>
  DocumentRoot "/var/www/${jex ? "jexactyl" : "pterodactyl"}/public"
  
  AllowEncodedSlashes On
  
  php_value upload_max_filesize 100M
  php_value post_max_size 100M
  
  <Directory "/var/www/${jex ? "jexactyl" : "pterodactyl"}/public">
    AllowOverride all
    Require all granted
  </Directory>
</VirtualHost>`}

export function ApacheSSLs(jex = false) {
  return `# Substitua o <domain> pelo nome do seu dominio ou seu IP
<VirtualHost *:80>
  ServerName <domain>
  
  RewriteEngine On
  RewriteCond %{HTTPS} !=on
  RewriteRule ^/?(.*) https://%{SERVER_NAME}/$1 [R,L] 
</VirtualHost>

<VirtualHost *:443>
  ServerName <domain>
  DocumentRoot "/var/www/${jex ? "jexactyl" : "pterodactyl"}/public"

  AllowEncodedSlashes On
  
  php_value upload_max_filesize 100M
  php_value post_max_size 100M

  <Directory "/var/www/${jex ? "jexactyl" : "pterodactyl"}/public">
    Require all granted
    AllowOverride all
  </Directory>

  SSLEngine on
  SSLCertificateFile /etc/letsencrypt/live/<domain>/fullchain.pem
  SSLCertificateKeyFile /etc/letsencrypt/live/<domain>/privkey.pem
</VirtualHost>`}

export function ApacheNoSSL({ jex = false }) {
  return (
    <CodeBlock language="bash">{ApacheNoSSLs(jex)}
    </CodeBlock>
  )
}

export function ApacheSSL({ jex = false }) {
  return (
    <CodeBlock language="bash">{ApacheSSLs(jex)}
    </CodeBlock>
  )
}