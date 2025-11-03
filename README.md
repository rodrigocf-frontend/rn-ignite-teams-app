# 🤝 rn-ignite-teams-app

![Badge de Status](https://img.shields.io/badge/Status-Concluído-success)
![Badge de Tecnologias](https://img.shields.io/badge/Tech-React_Native%20%7C%20TypeScript%20%7C%20StyledComponents-blue)
[![Link do Figma](https://img.shields.io/badge/Layout-Figma-orange)](https://www.figma.com/design/1IAhjgOsRhljEEzdSsTia2/Ignite-Teams--Community---c%C3%B3pia-?node-id=37-6&p=f&t=UGM2QXHyZnpfvY83-0)
[![Documentação](https://img.shields.io/badge/Documentação-Notion-27292D?style=flat-square&logo=notion&logoColor=white)](https://www.notion.so/rn-ignite-teams-app-29eabdfdd66380189d12ecbb54f23518)

Uma aplicação móvel simples e reativa para o gerenciamento de uma lista de turmas, onde cada turma possui um time A e um time B. Desenvolvida como atividade do curso de React Native, este projeto demonstra proficiência em gerenciamento de estado, persistência de dados e estilização avançada com foco em boas práticas.

## 🖼️ Demonstração (Screenshot/GIF)

![Demostração da aplicação](https://imgur.com/UDcv4BT.gif)

---

## 🚀 Funcionalidades Chave

O aplicativo gerencia a lista de turmas e jogadores de forma dinâmica, seguindo o layout do Figma:

- **➕ Adicionar Turma:** Criação de novas turmas.
- **🗑️ Remover Turma:** Remoção de turma na lista.
- **➕ Adicionar Jogador:** Adiciona jogador na lista de um time pertecente a turma.
- **🗑️ Remover Turma:** Remove jogador na lista de um time pertecente a turma.
- **Persistência de Dados:** A lista de dados é salva e carregada automaticamente na inicialização (`AsyncStorage`).
- **Navegação:** Preparado com estrutura de _screens_ para expansões futuras.

---

## 🏗️ Estrutura do Projeto

A arquitetura do projeto segue uma organização modular baseada em responsabilidades, facilitando a manutenção e a escalabilidade, um padrão essencial para aplicações React Native:

A arquitetura do projeto segue uma organização modular por responsabilidades, garantindo a manutenibilidade e escalabilidade do código:

| Pasta        | Conteúdo Principal                                              | Destaque                                          |
| :----------- | :-------------------------------------------------------------- | :------------------------------------------------ |
| `components` | Componentes de UI reutilizáveis (Button, Logo, EmptyList, etc.) | Modularidade da interface.                        |
| `screen`     | Telas completas da aplicação (Group, New Group, PlayerGroups).  | Contêineres de lógica e navegação.                |
| `routes`     | Configuração de navegação (`@react-navigation`).                | Definição do fluxo entre telas.                   |
| `services`   | Camada de lógica de negócio e integração.                       | Funções de acesso a dados (Ex: `AsyncStorage`).   |
| `store`      | Gerenciamento de estado global.                                 | Utilização de Context API.                        |
| `themes`     | Definições de estilo e tema.                                    | Configuração centralizada do `styled-components`. |
| `utils`      | Funções auxiliares.                                             | Ex: Tratamento de errors, etc.                    |
| `@types`     | Definições de tipos do TypeScript.                              | Tipos e interfaces globais.                       |

---

## ⚙️ Tecnologias e Conceitos Utilizados

O projeto foi construído utilizando as seguintes ferramentas e conceitos, conforme o `package.json`:

### Core e Ambiente

| Pacote                   | Versão              | Função Principal                                |
| :----------------------- | :------------------ | :---------------------------------------------- |
| `react` / `react-native` | `19.1.0` / `0.81.5` | Base da interface e componentes mobile.         |
| `expo`                   | `~54.0.20`          | Estrutura de desenvolvimento e build.           |
| `styled-components`      | `^6.1.19`           | Estilização avançada, modular e componentizada. |
| `phosphor-react-native"` | `^3.0.1`            | Ícones nativos.                                 |

### Gerenciamento de Dados e Utilidades

| Pacote                                      | Versão     | Função Principal                                             |
| :------------------------------------------ | :--------- | :----------------------------------------------------------- |
| `@react-native-async-storage/async-storage` | `2.2.0`    | **Persistência de dados** local no dispositivo.              |
| `lodash` / `@types/lodash`                  | `^4.17.21` | Utilidades de array e objeto (ex: imutabilidade, ordenação). |

### Navegação e Componentes Adicionais

| Pacote                           | Versão   | Função Principal                 |
| :------------------------------- | :------- | :------------------------------- |
| `@react-navigation/native-stack` | `^7.5.1` | Estrutura de navegação nativa.   |
| `@expo-google-fonts/roboto`      | `^0.4.1` | Inclusão de fontes customizadas. |

---

## 💡 Detalhes Técnicos (Destaques no Portfólio)

- **Persistência de Estado (`AsyncStorage`):** Implementação do salvamento e carregamento da lista de turmas no _storage_ local, garantindo que os dados permaneçam após o fechamento do app.
- **Imutabilidade e Lodash:** Uso de funções para manipular o array de turmas e jogadores sem modificar o estado diretamente, seguindo o princípio da imutabilidade do React.

---

## 💻 Como Executar o Projeto

Para visualizar e testar o projeto localmente, siga os passos abaixo:

### Pré-requisitos

- Node.js (versão LTS recomendada)
- Yarn ou npm
- Expo Go app instalado no seu celular ou um simulador/emulador.

### Instalação e Execução

1.  **Clone o repositório:**

    ```bash
    git clone https://github.com/rodrigocf-frontend/rn-ignite-teams-app
    cd rn-ignite-teams-app
    ```

2.  **Instale as dependências:**

    ```bash
    npm install
    # ou
    yarn install
    ```

3.  **Inicie o servidor de desenvolvimento do Expo:**

    ```bash
    npm start
    # ou
    yarn start
    ```

4.  **Acesse:** Escaneie o QR Code que aparecerá no seu terminal utilizando o aplicativo **Expo Go**.

---

## 👤 Autor e Contato

Desenvolvido por **Rodrigo Cunha França** como atividade prática e de portfólio em React Native.

| Plataforma   | Link                                  |
| :----------- | :------------------------------------ |
| **LinkedIn** | www.linkedin.com/in/rodrigocunhaf     |
| **GitHub**   | https://github.com/rodrigocf-frontend |

---
