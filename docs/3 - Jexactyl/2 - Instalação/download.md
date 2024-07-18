---
sidebar_position: 2
---

# Download de arquivos

***

### Criar diretório

O primeiro passo neste processo é criar a pasta onde o
painel será mantido e executado, em seguida, nos moveremos para a pasta recém-criada.
Abaixo está um exemplo de como realizar esta operação.

```bash
sudo mkdir -p /var/www/jexactyl
cd /var/www/jexactyl
```

***

### Baixar o Painel

Depois de entrar neste diretório, você pode `curl` para baixar a versão mais recente do painel para sua máquina.
Então, você pode extraí-lo usando o comando `tar` e atribuir permissões usando `chmod`. Atribuímos permissões
para os diretórios `storage/*` e `bootstrap/cache` para permitir que o site armazene objetos em cache e carregue mais rápido.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Codeblock from "@theme/CodeBlock";

<Tabs>
  <TabItem value="jexactyl-br" label="Jexactyl BR" default>
    <Codeblock language="bash">
{`# Jexactyl traduzido pela NextPanel
sudo curl -Lo panel.tar.gz https://github.com/Next-Panel/Jexactyl-BR/releases/latest/download/panel.tar.gz
sudo tar -xzvf panel.tar.gz
sudo chmod -R 755 storage/* bootstrap/cache/`}
    </Codeblock>
  </TabItem>
  <TabItem value="jexactyl-en" label="Jexactyl Original">
    <Codeblock language="bash">
{`# Jexactyl Original 
sudo curl -Lo panel.tar.gz https://github.com/jexactyl/jexactyl/releases/latest/download/panel.tar.gz
sudo tar -xzvf panel.tar.gz
sudo chmod -R 755 storage/* bootstrap/cache/`}
    </Codeblock>
  </TabItem>
</Tabs>