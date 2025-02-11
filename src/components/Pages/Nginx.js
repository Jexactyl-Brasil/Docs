import React from "react";
import CodeBlock from '@theme/CodeBlock';

/**
 * Isso esta aqui por que o CodeBlock no mdx estava retornando erro,
 * é uma solução que bem provavelmente no futuro será mudada para algo melhor
 */

export function NginxNoSSLs(jex = false) {
    return `# Substitua o <domain> pelo nome do seu dominio ou seu IP
server {
    listen 80;
    server_name <domain>;

    root /var/www/${jex ? "jexactyl" : "pterodactyl"}/public;
    index index.html index.htm index.php;
    charset utf-8;

    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    location = /favicon.ico { access_log off; log_not_found off; }
    location = /robots.txt  { access_log off; log_not_found off; }

    access_log off;
    error_log  /var/log/nginx/${jex ? "jexactyl" : "pterodactyl"}.app-error.log error;

    # Isso permite uploads de arquivos maiores e tempos de execução de script mais longos
    client_max_body_size 100m;
    client_body_timeout 120s;

    sendfile off;

    location ~ \.php$ {
        fastcgi_split_path_info ^(.+\.php)(/.+)$;
        fastcgi_pass unix:/run/php/php8.1-fpm.sock;
        fastcgi_index index.php;
        include fastcgi_params;
        fastcgi_param PHP_VALUE "upload_max_filesize = 100M \n post_max_size=100M";
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        fastcgi_param HTTP_PROXY "";
        fastcgi_intercept_errors off;
        fastcgi_buffer_size 16k;
        fastcgi_buffers 4 16k;
        fastcgi_connect_timeout 300;
        fastcgi_send_timeout 300;
        fastcgi_read_timeout 300;
    }

    location ~ /\.ht {
        deny all;
    }
}`}

export function NginxSSLs(jex = false) {
    return `# Substitua o <domain> pelo nome do seu dominio ou seu IP
server {
    listen 80;
    server_name <domain>;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name <domain>;

    root /var/www/${jex ? "jexactyl" : "pterodactyl"}/public;
    index index.php;

    access_log /var/log/nginx/${jex ? "jexactyl" : "pterodactyl"}.app-access.log;
    error_log  /var/log/nginx/${jex ? "jexactyl" : "pterodactyl"}.app-error.log error;

    # Isso permite uploads de arquivos maiores e tempos de execução de script mais longos
    client_max_body_size 100m;
    client_body_timeout 120s;

    sendfile off;

    # Configuração do SSL
    ssl_certificate /etc/letsencrypt/live/<domain>/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/<domain>/privkey.pem;
    ssl_session_cache shared:SSL:10m;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers "ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384";
    ssl_prefer_server_ciphers on;

    add_header X-Content-Type-Options nosniff;
    add_header X-XSS-Protection "1; mode=block";
    add_header X-Robots-Tag none;
    add_header Content-Security-Policy "frame-ancestors 'self'";
    add_header X-Frame-Options DENY;
    add_header Referrer-Policy same-origin;

    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    location ~ \.php$ {
        fastcgi_split_path_info ^(.+\.php)(/.+)$;
        fastcgi_pass unix:/run/php/php8.1-fpm.sock;
        fastcgi_index index.php;
        include fastcgi_params;
        fastcgi_param PHP_VALUE "upload_max_filesize = 100M \n post_max_size=100M";
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        fastcgi_param HTTP_PROXY "";
        fastcgi_intercept_errors off;
        fastcgi_buffer_size 16k;
        fastcgi_buffers 4 16k;
        fastcgi_connect_timeout 300;
        fastcgi_send_timeout 300;
        fastcgi_read_timeout 300;
        include /etc/nginx/fastcgi_params;
    }

    location ~ /\.ht {
        deny all;
    }
}`}

export function NginxNoSSL({ jex = false }) {
    return (
        <CodeBlock language="bash">{NginxNoSSLs(jex)}
        </CodeBlock>
    )
}

export function NginxSSL({ jex = false }) {
    return (
        <CodeBlock language="bash">{NginxSSLs(jex)}
        </CodeBlock>
    )
}