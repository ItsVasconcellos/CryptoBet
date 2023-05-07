# CryptoBet
Project for Inteli Blockchain Challenge 2023

## :art: Colaboradores:
 - <a href="https://www.linkedin.com/in/ana-luisa-goes-barbosa/">Ana Goes</a>
 - <a href="https://www.linkedin.com/in/fernando-antonio-s-c-de-vasconcellos/">Fernando Vasconcellos</a>
 - <a href="https://www.linkedin.com/in/ivan-ferreira-4270ab263/">Ivan Ferreira</a>
 - <a href="https://www.linkedin.com/in/luiza-rubim/">Luiza Rubim</a>
 - <a href="https://www.linkedin.com/in/mauro-das-chagas-junior-7306a71b9/">Mauro Chagas</a>
 - <a href="https://www.linkedin.com/in/rafaella-bianca-cavalcante/">Rafaella Cavalcante</a>
 
## :bookmark_tabs: Descrição do projeto:

### Problema

 O problema cuja aplicação busca selecionar é a falta de transparência sobre o funcionamento, direcionamento de lucros e rastreabilidade das apostas em sites de apostas esportivas. Dado a falta de regulamentação no Brasil sobre tais sites e o monopólio provocado pelas grandes empresas hospedadas no exterior, o esquema de apostas no cenário nacional causa insegurança nos consumidores devido a altas taxas e falta de clareza sobre as apostas.

### Descritivo da solução

  O CryptoBet é um projeto inovador que permite que os usuários realizem apostas sobre principais tópicos, mas também apostas personalizadas sobre temas diversos, apostem com amigos e compartilhem apostas por meio de um link. O site utiliza a tecnologia blockchain da Hathor Network para trazer facilidade, transparência, segurança e maior rentabilidade para o mercado de apostas online. 
  O sistema de transação de apostas é baseado na criação de tokens da Hathor Network, permitindo rastreabilidade, transparência e confiança nas apostas. Além disso, esses tokens não possuem taxas de transação, proporcionando uma maior rentabilidade para os usuários.
  Outra grande inovação do CryptoBet é a utilização de atomic swaps. Isso permite que os usuários realizem transações diretas de tokens sem a necessidade de uma exchange, tornando o processo mais rápido e eficiente.
  Para garantir resultados confiáveis, as odds são calculadas por APIs e Oracles que conectam dados externos off-chain com a blockchain. Isso garante a transparência e a integridade das apostas.
  A plataforma também utiliza a Hathor Wallet, que inclui a integração da criptomoeda diretamente no sistema de apostas por meio de uma Hathor API. Isso torna o processo de apostas mais simples e seguro para os usuários.
  Com todas essas inovações, o CryptoBet busca se destacar no mercado de apostas online, atraindo usuários que buscam soluções mais modernas e seguras. A plataforma oferece uma nova experiência em apostas, utilizando tecnologia de ponta para garantir transações seguras e transparentes.
  
  ![Homepage 3](https://user-images.githubusercontent.com/84935638/236655342-260c09e5-039b-4eb2-97f9-77ea1c8aa5b0.png)
  
## Documentação
Foi desenvolvido uma documentação do projeto focada em análise de mercado, entendimento da proposta, arquitetura do sistema e prototipagem do sistema. A documentação se encontra <a href="https://docs.google.com/document/d/1Y6gyiHvGz96yNZH1LmRvvzkRZO2S7VSM/edit#heading=h.147n2zr">neste documento</a>  

## Analise de mercado

O grupo realizou o desenvolvimento de uma matriz SWOT (Strengths, Weakness, Opportunities, Threats) sobre o produto sendo desenvolvido.
 ![AnaliseSwot](https://user-images.githubusercontent.com/84935638/236674846-a6ab0e94-26eb-4e9b-a45b-2975d610fc7a.jpeg)

Além disso, como âmbito em facilitar o entendimento sobre a proposta, foi feito um Canvas Value Proposition, o qual explica a necessidade do projeto.
![CanvasValue](https://user-images.githubusercontent.com/84935638/236674923-68000a79-e7d4-4156-bb8f-8565ce8121ef.jpeg)

## Arquitetura de pastas

├── node_modules <br>
├── src <br>
│    ├── css <br>
│    ├── data <br>
│    │── html <br>
│    ├── img <br>
├── app.js <br>
├── README.md

## Tecnologias

Foi utilizado essas tecnologias para o desenvolvimento do projeto:

- HTML
- CSS
- Node Js
- Express
- Body-parser
- Axios
- Bootstrap
- Hathor API
- Docker

## Etapas para o funcionamento da aplicação

É necessário a instalação de algumas tecnologias para poder utilizar de nossa aplicação, sendo elas:
- Node
- Npm
- Uma Ide de sua preferência (Visual Studio é recomendado)

### Criação de uma Wallet da Hathor  

Para que possa utilizar nossa aplicação é vital importância a criação de uma wallet da Hathor. Para isso deve entrar nesse <a href="https://hathor.network/resources/hathor-wallet/">link</a>. No link, terá a opção de baixar um executável variando de acordo com sua plataforma. Após o Download do executável, deve-se executá-lo e seguir o tutorial fornecido nele. Será fornecido uma opção entre Hardware Wallet e Software Wallet, para fins do projeto deve-se escolher a Software Wallet. Durante o processo, caso você já tenha uma carteira da Hathor, ela poderá ser importada ou criado uma nova. Caso selecione a opção de nova carteira, será exigido a criação de 24 palavras, as quais são tokens de segurança caso a senha seja perdida e devem ser guardadas em lugar seguro. Ademais é necessário a criação de uma senha para a conta e um pin para a realização de transações.

### Uso do Docker para rodar a API
https://hathor.gitbook.io/hathor/guides/headless-wallet/install-as-a-docker-container

A API da Hathor funciona por meio de um ambiente Docker de desenvolvimento, logo seu uso é de vital importância para que a aplicação possa ser utilizada. Primeiramente, no <a href="https://www.docker.com/products/docker-desktop/">link</a> instale uma versão do Docker de acordo com seu sistema operacional. Com o Docker instalado, vá para o github e clone esse <a href="https://github.com/HathorNetwork/hathor-wallet-headless.git">repositório</a>, ele contém toda a API da Hathor que poderá ser utilizada na sua aplicação. Em README, mude "network" para "testnet", adicione a seed da sua wallet dentro do repositório (as 24 palavras geradas quando você criou quando criou sua carteira). Feito tudo isso, no terminal, digite "npm start", se tudo der certo a API estará rodando, a mantenha ligada enquanto estiver utilizando a CryptoBet.

### Rodar a aplicação

Para a execução da aplicação é necessário abrir o Terminal/Cmd dentro do diretório em que o projeto se localiza e executar os seguintes comandos:
```
npm install express
npm i
node app.js
``` 
Após a execução dos comandos aparecerá um link, escrito https://localhost:8081, no qual a aplicação estará rodando.
