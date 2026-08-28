# Relatório de Arquitetura e Modelagem - PieHub

## 1. Visão Geral da Arquitetura
O **PieHub** é uma aplicação web client-side (executada diretamente no navegador do usuário) desenvolvida com HTML5, CSS3 e JavaScript. Os dados inseridos pelo usuário são persistidos localmente por meio da Web Storage API (`localStorage`).

```mermaid
graph TD
    A["Estudante / Usuário"] -->|Interage| B["Interface Web (HTML/CSS)"]
    B -->|Eventos DOM| C["Lógica (JavaScript)"]
    C -->|Grava / Lê| D["LocalStorage (Navegador)"]
