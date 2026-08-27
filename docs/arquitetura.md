 Relatório de Arquitetura e Modelagem - PieHub

 1. Visão Geral da Arquitetura PieHub é uma aplicação web client-side (executada diretamente no navegador do usuário) desenvolvida com HTML5, CSS3 e JavaScript. Os dados inseridos pelo usuário são persistidos localmente por meio da Web Storage API (localStorage).

```mermaid
graph TD
    User[Estudante / Usuário] -->|Interage com a Interface| UI[Interface Web - HTML/CSS]
    UI -->|Eventos / Manipulação do DOM| JS[Lógica da Aplicação - JavaScript]
    JS -->|Grava / Lê Dados| LS[(LocalStorage - Navegador)]
flowchart TD
    Inicio([Início]) --> Acessa[Acessar o PieHub no Navegador]
    Acessa --> Carrega[Carregar Dados do LocalStorage]
    Carrega --> Exibe[Exibir Dashboard e Tarefas Cadastradas]
    
    Exibe --> Acao{Escolha da Ação}
    
    Acao -->|Adicionar Tarefa| Form[Preencher Nome, Disciplina, Data e Prioridade]
    Form --> SalvaJS[Processar pelo JS]
    SalvaJS --> SalvaLS[Atualizar LocalStorage]
    SalvaLS --> Exibe
    
    Acao -->|Concluir/Excluir| Modifica[Alterar Status ou Excluir]
    Modifica --> SalvaLS
    
    Acao -->|Anotações/Horários| EditaNotas[Atualizar Bloco de Anotações]
    EditaNotas --> SalvaLS
