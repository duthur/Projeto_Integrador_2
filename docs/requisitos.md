# Documento de Requisitos - PieHub

## 1. Visão Geral
Este documento descreve os requisitos funcionais e não funcionais para a plataforma **PieHub - Painel Integrado do Estudante**, focada na centralização e gestão de rotina acadêmica.

## 2. Requisitos Funcionais (RF)
* **RF01**: O sistema deve permitir que o estudante defina, cadastre e remova tarefas por disciplina.
* **RF02**: O sistema deve permitir atribuir datas de entrega e prioridades às tarefas cadastradas.
* **RF03**: O sistema deve possibilitar alterar o status das tarefas (ex: "Pendente", "Em Andamento" e "Concluída").
* **RF04**: O sistema deve permitir o registro de um quadro flexível de horários de aulas/disciplinas.
* **RF05**: O sistema deve disponibilizar um bloco de anotações personalizadas para lembretes rápidos ou avisos de auxílios.
* **RF06**: O sistema deve salvar e persistir todas as informações no navegador usando `localStorage`, mantendo os dados salvos mesmo após fechar ou recarregar a página.

## 3. Requisitos Não Funcionais (RNF)
* **RNF01**: A interface deve ser responsiva, adaptando-se a telas de computadores e smartphones.
* **RNF02**: O sistema deve ser executado totalmente no lado do cliente (client-side) usando HTML5, CSS3 e JavaScript (ES6), garantindo alta velocidade de carregamento.
* **RNF03**: A visualização das tarefas e prazos deve contar com elementos visuais simples e de fácil leitura.
* **RNF04**: O repositório do projeto deve manter o versionamento estruturado com Git/GitHub seguindo as normas da Etapa I do Projeto Integrador II.
