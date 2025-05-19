function selecionarCurso() {
  const select = document.getElementById('selectCurso');
  const cursoSelecionado = select.value;

  if (!cursoSelecionado) return;

  const cursosInfo = {
    ads: "Análise e Desenvolvimento de Sistemas: curso focado em desenvolvimento de software e sistemas.",
    fm: "Fabricação Mecânica: formação voltada à produção mecânica industrial.",
    ge: "Gestão Empresarial: curso com foco em administração e negócios.",
    log: "Logística: aborda gestão da cadeia de suprimentos e transportes.",
    pol: "Polímeros: especialização em materiais plásticos e processos industriais.",
    pp: "Processos de Produção: otimização de processos produtivos e industriais.",
    pr: "Projetos Mecânicos: voltado ao desenvolvimento de projetos na área de mecânica.",
    rm: "Redes de Computadores: infraestrutura, segurança e administração de redes.",
    si: "Sistemas Biomédicos: integra tecnologia e equipamentos médicos para saúde."
  };

  const mensagem = `Deseja abrir informações sobre o curso:\n\n"${select.options[select.selectedIndex].text}"?`;

  if (confirm(mensagem)) {
    const info = cursosInfo[cursoSelecionado];
    const novaJanela = window.open('', '', 'width=600,height=300');
    novaJanela.document.write(`
      <html>
        <head>
          <title>Curso: ${select.options[select.selectedIndex].text}</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              padding: 20px;
              background-color: #f4f4f4;
            }
            h2 {
              margin-top: 0;
              color: #333;
            }
            p {
              font-size: 16px;
              color: #555;
            }
          </style>
        </head>
        <body>
          <h2>${select.options[select.selectedIndex].text}</h2>
          <p>${info}</p>
        </body>
      </html>
    `);
  } else {
    select.value = ""; // resetar a seleção se o usuário cancelar
  }
}
