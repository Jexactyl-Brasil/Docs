---
sidebar_position: 3
---

# Docker Purge 
Um Guia de Consulta Rápida do Docker

## Como Remover Imagens Docker, Contêineres e Volumes

Um Guia de Consulta Rápida do Docker

## introdução do docker

O Docker facilita o agrupamento de suas aplicações e serviços em contêineres de forma que você possa executá-los em qualquer lugar. Ao trabalhar com o Docker, no entanto, também é fácil acumular um número excessivo de imagens, contêineres e volumes de dados não utilizados que atrapalham a saída e consomem espaço em disco.

O Docker lhe fornece todas as ferramentas que você precisa para limpar seu sistema a partir da linha de comando. Este guia no estilo cheat sheet fornece uma referência rápida para comandos que são úteis para liberar espaço em disco e manter seu sistema organizado, removendo imagens Docker não utilizadas, contêineres e volumes.

## Como Usar Este Guia:

Este guia está no formato de consulta rápida, com trechos de linha de comando independentes.
Vá para qualquer seção que seja relevante para a tarefa que você está tentando concluir.
A sintaxe de substituição de comando, comando $(comando), usada nos comandos está disponível em muitos shells populares, como o bash, zsh e Windows Powershell.

Limpando Todas as Imagens, Contêineres, Volumes e Redes não Utilizadas ou Pendentes
O Docker fornece um único comando que irá limpar quaisquer recursos — imagens, contêineres, volumes, e redes — que estão pendentes (não associados a um contêiner).

## docker system prune

Para remover adicionalmente quaisquer contêineres e todas as imagens não utilizadas (não apenas imagens pendentes), adicione a flag -a ao comando:

```bash
sudo docker system prune -a
```

## Finalizando

Após usar o ``docker system prune -a`` voce deve reiniciar seu computador para que o Painel pois o uso deste comando deleta as "Redes" e por conta disso o Painel Não irá funcionar direito após o uso desse comando caso não seja reiniciado a maquina.

```bash
sudo reboot
```

:::info
Parabéns! Voce Limpou o seu docker, seu painel deve estar mais leve agora.
Se você encontrar algum problema, informe-nos em nosso [Discord](https://discord.gg/8r7n7mU33R).
:::