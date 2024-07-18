import React from "react";
import CodeBlock from '@theme/CodeBlock';

/**
 * Isso esta aqui por que o CodeBlock no mdx estava retornando erro,
 * é uma solução que bem provavelmente no futuro será mudada para algo melhor
 */

export function CaddyNoSSLs(jex = false) {
    return `# Substitua o <domain> pelo nome do seu dominio ou seu IP
{
    servers :80 {
        timeouts {
            read_body 120s
        }
    }
}

<domain>:80 {
    root * /var/www/${jex ? "jexactyl" : "pterodactyl"}/public

    file_server

    php_fastcgi unix//run/php/php8.1-fpm.sock {
        root /var/www/${jex ? "jexactyl" : "pterodactyl"}/public
        index index.php

        env PHP_VALUE "upload_max_filesize = 100M
        post_max_size = 100M"
        env HTTP_PROXY ""
        # env HTTPS "on" # IMPORTANT: this is commented out, to disable HTTPS

        read_timeout 300s
        dial_timeout 300s
        write_timeout 300s
    }

    header Strict-Transport-Security "max-age=16768000; preload;"
    header X-Content-Type-Options "nosniff"
    header X-XSS-Protection "1; mode=block;"
    header X-Robots-Tag "none"
    header Content-Security-Policy "frame-ancestors 'self'"
    header X-Frame-Options "DENY"
    header Referrer-Policy "same-origin"

    request_body {
        max_size 100m
    }

    respond /.ht* 403

    log {
        output file /var/log/caddy/${jex ? "jexactyl" : "pterodactyl"}.log {
            roll_size 100MiB
            roll_keep_for 7d
        }
        level INFO
    }
}`
}

export function CaddySSLs(jex = false) {
    return `# Substitua o <domain> pelo nome do seu dominio ou seu IP
{
    servers :443 {
        timeouts {
            read_body 120s
        }
    }
}

<domain> {
    root * /var/www/${jex ? "jexactyl" : "pterodactyl"}/public

    file_server

    php_fastcgi unix//run/php/php8.1-fpm.sock {
        root /var/www/${jex ? "jexactyl" : "pterodactyl"}/public
        index index.php

        env PHP_VALUE "upload_max_filesize = 100M
        post_max_size = 100M"
        env HTTP_PROXY ""
        env HTTPS "on"

        read_timeout 300s
        dial_timeout 300s
        write_timeout 300s
    }

    header Strict-Transport-Security "max-age=16768000; preload;"
    header X-Content-Type-Options "nosniff"
    header X-XSS-Protection "1; mode=block;"
    header X-Robots-Tag "none"
    header Content-Security-Policy "frame-ancestors 'self'"
    header X-Frame-Options "DENY"
    header Referrer-Policy "same-origin"

    request_body {
        max_size 100m
    }

    respond /.ht* 403

    log {
        output file /var/log/caddy/${jex ? "jexactyl" : "pterodactyl"}.log {
            roll_size 100MiB
            roll_keep_for 7d
        }
        level INFO
    }
}`}

export function CaddyNoSSL({ jex = false }) {
    return (
        <CodeBlock language="bash">{CaddyNoSSLs(jex)}
        </CodeBlock>
    )
}

export function CaddySSL({ jex = false }) {
    return (
        <CodeBlock language="bash">{CaddySSLs(jex)}
        </CodeBlock>
    )
}