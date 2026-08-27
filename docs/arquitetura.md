# Relatório de Arquitetura e Modelagem - PieHub

## 1. Visão Geral da Arquitetura
O **PieHub** é uma aplicação web client-side (executada diretamente no navegador do usuário) desenvolvida com HTML5, CSS3 e JavaScript. Os dados inseridos pelo usuário são persistidos localmente por meio da Web Storage API (`localStorage`).

```mermaid
graph TD
    User[Estudante / Usuário] -->|Interage com a Interface| UI[Interface Web - HTML/CSS]
    UI -->|Eventos / Manipulação do DOM| JS[Lógica da Aplicação - JavaScript]
    JS -->|Grava / Lê Dados| LS[(LocalStorage - Navegador)]
