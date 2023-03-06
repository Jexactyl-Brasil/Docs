---
sidebar_position: 5
---

# Inicializador do Pterodactyl

***

### Crontab
A primeira coisa que precisamos fazer é criar um novo cronjob que seja executado a cada minuto para processar tarefas específicas do Pterodactyl, como limpeza de sessão e envio de tarefas agendadas para daemons.Usaremos `Nano` como editor.

Use o comando a baixo e digite 1 para selecionar o editor de texto nano.

```bash
sudo crontab -e
```

Em seguida, cole essa linha para adicionar o Cron de tarefas da pterodactyl.

```bash
* * * * * php /var/www/pterodactyl/artisan schedule:run >> /dev/null 2>&1
```

E por ultimo, cole essa linha para adicionar o Cron de Renovações do Pterodactyl

```bash
0 0 * * * php /var/www/pterodactyl/artisan p:schedule:renewal >> /dev/null 2>&1
```

***

### Systemd Queue Worker
Em seguida, você precisa criar um novo trabalhador systemd para manter nosso processo de fila em execução em segundo plano. Essa fila é responsável por enviar e-mails e lidar com muitas outras tarefas em segundo plano para o Pterodactyl.

Agora criaremos um arquivo chamado `pteroq.service` na pasta /etc/systemd/system/.

```bash
sudo nano /etc/systemd/system/pteroq.service
```
Após isso, cole o texto abaixo dentro do arquivo que acabamos de criar.

```bash
# Pterodactyl Queue Worker File
# ----------------------------------

[Unit]
Description=Pterodactyl Queue Worker

[Service]
User=www-data
Group=www-data
Restart=always
ExecStart=/usr/bin/php /var/www/pterodactyl/artisan queue:work --queue=high,standard,low --sleep=3 --tries=3
StartLimitInterval=180
StartLimitBurst=30
RestartSec=5s

[Install]
WantedBy=multi-user.target
```

### Ativar Queue Worker
Por fim, ative o serviço do painel pterodactyl que acabamos de criar, bem como o serviço redis, para iniciar e executar na inicialização.
```bash
sudo systemctl enable --now pteroq.service
sudo systemctl enable --now redis-server
```
