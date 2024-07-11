---
sidebar_position: 1
---

# Instalar dependências
Você precisará instalar as seguintes dependências para executar e usar o Jexactyl:

PHP `8.1` com as extensões:(PHP 8.2 Ainda não tem suporte.)
- `cli`
- `openssl`
- `gd`
- `mysql`
- `PDO`
- `mbstring`
- `tokenizer`
- `bcmath`
- `xml`
- `curl`
- `zip`
- `fpm`.

MariaDB `10.2` ou superior, com `redis-server`.

Um servidor web ('NGINX' é preferido.)

`curl`, `tar`, `unzip`, `git` and `composer` v2.

## Exemplo de instalação de dependência

:::danger
Seu sistema operacional pode ser diferente do que usamos para esta instalação.
Certifique-se de que esses comandos funcionem para você, se não funcionarem, consulte
o gerenciador de pacotes do seu sistema operacional para saber como instalar as dependências, recomendamos Ubuntu 22 ou superior, não instale
versões de prévia do Ubuntu, não terão todos os pacotes necessários!
:::

```bash
# ✅ Adicionar o comando "add-apt-repository
apt -y install software-properties-common curl apt-transport-https ca-certificates gnupg

# ✅ Adicionar repositórios adicionais para PHP, Redis e MariaDB
LC_ALL=C.UTF-8 add-apt-repository -y ppa:ondrej/php

# ✅ Adicionar o repositório APT oficial do Redis
curl -fsSL https://packages.redis.io/gpg | sudo gpg --dearmor -o /usr/share/keyrings/redis-archive-keyring.gpg
echo "deb [signed-by=/usr/share/keyrings/redis-archive-keyring.gpg] https://packages.redis.io/deb $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/redis.list

# ⚠️ O comando abaixo não é necessário se você estiver usando o Ubuntu 22 ou superior, caso estejá usando Debian, pesquise qual versão o Ubunto 22 ou superior se baseia
curl -sS https://downloads.mariadb.com/MariaDB/mariadb_repo_setup | sudo bash

# ✅ Atualizar a lista de repositórios
apt update

# ✅ Instalar dependências
apt -y install php8.1 php8.1-{common,cli,gd,mysql,mbstring,bcmath,xml,fpm,curl,zip} mariadb-server nginx tar unzip git redis-server

# ✅ Instalando o Compositor
curl -sS https://getcomposer.org/installer | sudo php -- --install-dir=/usr/local/bin --filename=composer
```
