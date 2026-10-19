# Revisa+ — Aplicativo de revisões inteligentes (versão 1.0)

Aplicativo pessoal, em português, gratuito, sem login e sem bibliotecas externas. É uma **PWA** (Progressive Web App): após publicação em HTTPS, pode ser instalada no Android, iPhone e computador. Funciona offline após a primeira visita e instalação.

## Funcionalidades implementadas

- **Hoje:** pendências, atrasos, concluidas, tempo de estudo, recordação, próximo planejamento e atalhos.
- **Agenda:** calendário mensal, lista de revisões por dia, histórico das revisões e estudos; redistribuição inteligente das atrasadas para os próximos 30 dias, respeitando a meta de minutos quando possível.
- **Biblioteca:** disciplinas personalizadas, cores, conteúdo, material de origem (ex.: TQM), notas, dificuldade, prioridade, duração estimada, pausa e retomada.
- **Repetição espaçada:** intervalos configuráveis (padrão 1, 3, 7, 15, 30, 60, 120, 240 dias); após cada revisão, avaliação Não lembrei/Difícil/Bom/Fácil recalcula a próxima data. Histórico de revisões e anotações, incluindo acertos em exercícios.
- **Flashcards:** criar, editar, apagar, revelar resposta, estudar cartões vencidos ou todos e agendamento adaptativo.
- **Questões:** banco de questões de múltipla escolha A–D, gabarito, explicação, simulado e taxa de acerto.
- **Caderno de erros:** erros manuais e gerados automaticamente por questões incorretas; correção, resolução e reabertura.
- **Estatísticas:** atividade nos últimos 7/30/90 dias, total de minutos, distribuição entre disciplinas, avaliações e questões.
- **Ajustes:** tema claro/escuro, meta diária, intervalos, backup e importação JSON, opção de avisos em navegador e restauração completa.
- **Dados privados:** os registros são guardados no armazenamento local do navegador. Não existe login, conta ou envio de dados pela rede.

## Testar no notebook

1. Descompacte `Revisa-Plus-PWA.zip`.
2. Abra `revisa-plus/index.html` no navegador. As funcionalidades comuns de estudos funcionarão no navegador, mas algumas opções de instalação/notificação/offline via service worker exigem uma origem HTTPS ou `localhost`.
3. Se preferir, use o arquivo **Revisa-Plus-Abrir.html**, entregue separadamente: ele contém o HTML, CSS e JS juntos e abre com duplo clique, sem instalação.

Opcional: pelo VS Code, abra a pasta e inicie com a extensão **Live Server**. Ou, com Python instalado, execute nesta pasta:

```bash
python -m http.server 8000
```

Visite `http://localhost:8000`. Isso também ajuda a testar a PWA localmente.

## Colocar na internet e instalar no celular (GitHub Pages)

1. Entre em https://github.com e crie um repositório **público** chamado `revisa-plus` (pode usar outro nome).
2. Clique em **Add file → Upload files** e envie **todos os arquivos dentro da pasta `revisa-plus`** (não envie somente o ZIP e não aninhe os arquivos numa segunda pasta). Confirme em **Commit changes**.
3. Acesse **Settings → Pages**. Em **Build and deployment**, escolha **Deploy from a branch**, selecione `main` e `/ (root)` e salve.
4. Depois de publicado, abra `https://SEU-USUARIO.github.io/revisa-plus/` no navegador do celular.
5. **Android / Chrome:** abra o menu `⋮` e toque em **Instalar app** (ou **Adicionar à tela inicial**).
6. **iPhone / Safari:** abra **Compartilhar** e toque em **Adicionar à Tela de Início**.
7. Abra pela tela inicial. Após a primeira abertura, os arquivos são mantidos em cache para uso sem internet.

**Atenção:** publicar o código no repositório **não publica seus estudos**. Conteúdos e registros inseridos no app ficam no aparelho/navegador onde você os criou. O histórico não sincroniza automaticamente entre notebook e celular: use **Ajustes → Exportar / Importar backup** para migrar.

## Notificações e limitações técnicas

Sem servidor de notificações e push, o navegador **não consegue garantir** lembretes quando o aplicativo estiver totalmente fechado. A opção de avisos no Revisa+ exibe notificações no momento em que o app é aberto/mantido ativo e existe conteúdo pendente, desde que você conceda permissão em uma origem segura (HTTPS).

Datas de revisões são agendadas automaticamente, mas não existem garantias científicas de que intervalos específicos funcionem igualmente para todos. A recomendação é avaliar seu desempenho de modo honesto e praticar recuperação ativa (exercícios e explicação sem consulta).

Dados locais podem desaparecer se você apagar os dados do site, usar navegação privativa, trocar o aparelho ou reinstalar o navegador. **Faça backup JSON periodicamente.** O arquivo contém todo o conteúdo que você cadastrou, então guarde-o com cuidado.

## Arquivos

- `index.html` — estrutura da aplicação e ícones internos SVG;
- `styles.css` — visual responsivo, tema claro/escuro;
- `app.js` — banco local, agenda, lógica de repetição, simulados e navegação;
- `manifest.webmanifest` — informações de instalação;
- `sw.js` — cache offline;
- `icon-192.png`, `icon-512.png`, `favicon.svg` — identidade visual;
- `.nojekyll` — publicação estática no GitHub Pages.

## Primeiros passos no Revisa+

1. Abra **Biblioteca**; já há matérias iniciais, que você pode modificar.
2. Clique em **Novo conteúdo**, escolha Matemática, digite `Frações — operações básicas`, informe a data do estudo, o material (ex.: `TQM, capítulo 1`) e a duração.
3. A primeira revisão será agendada para o dia seguinte; veja em **Agenda**.
4. Ao revisar, tente resolver exercícios sem consultar e marque a dificuldade da recuperação. Isso gera a próxima revisão automaticamente.
5. Cadastre flashcards e questões para os assuntos que mais exigem memorização e prática.
6. Toda semana, confira **Estatísticas** e **Ajustes → Exportar backup**.
