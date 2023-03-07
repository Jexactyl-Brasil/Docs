---
sidebar_position: 2
---

# Database do Node
Como configurar o database dentro do pterodactyl/jexactyl

Criando um host do banco de dados para os nodes

:::info Informação
Esta seção cobre a criação de um usuário MySQL que tenha permissão para criar e modificar usuários. Isto permite que o Painel crie bancos de dados por servidor no host em questão.
:::

## Login

O primeiro passo neste processo é fazer o login na linha de comando MySQL onde estaremos executando algumas afirmações para obter a configuração das coisas. Para fazer isso, basta executar o comando abaixo e fornecer a senha da conta Root MySQL que você configura ao instalar o MySQL. Se você não se lembrar de fazer isso, é possível que você simplesmente pressione enter, pois nenhuma senha está definida.

```bash
mysql -u root -p
```


## Criando um usuário

Se seu banco de dados estiver em um host diferente daquele onde seu Painel ou Daemon está instalado, certifique-se de usar o endereço IP da máquina na qual o Painel está rodando. Se você usar 127.0.0.1 e tentar conectar-se externamente, receberá um erro de conexão recusado.

```sql
# Você deve mudar o nome de usuário e a senha abaixo para algo único.
CREATE USER 'pterodactyluser'@'127.0.0.1' IDENTIFIED BY 'OutraSenha';
```

## Atribuição de permissões

O comando abaixo dará a seu usuário recém-criado a capacidade de criar usuários adicionais, assim como criar e destruir bancos de dados. Como acima, assegure-se de que ``127.0.0.1`` corresponda ao endereço IP que você usou no comando anterior.

```sql
GRANT ALL PRIVILEGES ON *.* TO 'pterodactyluser'@'127.0.0.1' WITH GRANT OPTION;
```

Permitir o acesso a banco de dados externo
É provável que você precise permitir o acesso externo a esta instância do MySQL para permitir que os servidores se conectem a ela. Para fazer isto, abra o ``my.cnf``, que varia na localização dependendo de seu SO e como o MySQL foi instalado. Você pode digitar ``find /etc -iname my.cnf`` para localizá-lo.

Abra o ``my.cnf``, adicione o texto abaixo ao final do arquivo e salve-o:

```bash
[mysqld]
bind-address=0.0.0.0
```

Reinicie o MySQL/MariaDB para aplicar estas mudanças. Isto substituirá a configuração padrão do MySQL, que por padrão só aceitará pedidos de hosts locais. Atualizando isto permitirá conexões em todas as interfaces e, portanto, conexões externas. Certifique-se de permitir a porta MySQL (padrão 3306) em seu firewall.

Se seu banco de dados e suas asas estiverem na mesma máquina e não precisarem de acesso externo, você também pode usar o endereço IP da interface docker0 em vez de ``127.0.0.1``. Este endereço IP pode ser encontrado executando ``ip address | grep docker0``, e provavelmente se parece com ``172.x.x.x.x.``

:::info Parabéns!
Voce Configurou o Database do Node, agora voce pode administrar databases do node diretamente pelo painel.
Se você encontrar algum problema, informe-nos em nosso [Discord](https://discord.gg/8r7n7mU33R).
:::
