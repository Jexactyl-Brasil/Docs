---
sidebar_position: 1
---

# Instalar ferramentas de compilação

***

Este guia irá informá-lo sobre como começar a construir e modificar o Pterodactyl.

***

### Instalando o NodeJS e o Yarn

Em primeiro lugar, precisaremos instalar o pacote 'NodeJS' e também adicionar o 'Yarn' para que possamos construir o front-end do Painel.

```bash
curl -sL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt install -y nodejs
```

Instale o 'Yarn' e as dependências necessárias para que o Pterodactyl seja construído.

```bash
sudo npm i -g yarn
cd /var/www/pterodactyl
sudo yarn # Installs building dependencies.
```

***

Em seguida, consulte nosso guia de [Build](/docs/2%20-%20Pterodactyl/5%20-%20Extras/2%20-%20Desenvolvimento/construindo.md) sobre como construir o frontend.
