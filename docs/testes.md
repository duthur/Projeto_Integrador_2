# Relatório de Validação e Testes - EcoTerminal Escolar

## 1. Ambientes de Teste
Os testes do **EcoTerminal Escolar** foram executados simulando o cenário real de uso em sala de aula:
- **Terminal (Cliente):** Smartphone antigo executando interface web leve em Modo Kiosk.
- **Servidor Local:** Servidor em Node.js/Express rodando em rede local Wi-Fi.
- **Painel Administrativo:** Interface web acessada via navegador pela coordenação.

---

## 2. Casos de Teste Executados

| ID | Cenário de Teste | Resultado Esperado | Status |
| :--- | :--- | :--- | :--- |
| **TC-01** | Envio de chamado de "Suporte TI" pelo terminal | Notificação instantânea no painel administrativo | **Aprovado** |
| **TC-02** | Envio de alerta de "Emergência Médica" | Alerta visual prioritário com aviso sonoro no servidor | **Aprovado** |
| **TC-03** | Perda e reconexão do sinal Wi-Fi | Retentativa automática de envio sem travar o aplicativo | **Aprovado** |
| **TC-04** | Envio de comunicado geral pela diretoria | Exibição do aviso na faixa inferior de todos os terminais | **Aprovado** |

---

## 3. Feedback dos Usuários e Validação
A solução foi testada em ambiente simulado com a colaboração de professores e equipe de apoio:
- **Usabilidade:** A interface simplificada com botões grandes permitiu acionar chamados em menos de 3 segundos.
- **Desempenho:** Celulares antigos apresentaram execução fluida sem travamentos.
- **Conclusão:** O sistema atendeu a todos os requisitos funcionais e não funcionais propostos.
