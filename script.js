function jogo1() {
  const numeroSecreto = Math.floor(Math.random() * 10) + 1;
  console.log("Número secreto gerado:", numeroSecreto);
  const chute = parseInt(prompt("Adivinhe o número secreto (1 a 10):"));

  if (chute === numeroSecreto) {
    alert("Parabéns! Você acertou!");
  } else {
    alert(`Errou! O número era ${numeroSecreto}`);
  }
}


function jogo2() {
  const nome = prompt("Digite seu nome:");

  if (!nome || nome.trim() === "") {
    alert("⚠ Nome inválido.");
    return;
  }

  const nota1 = parseFloat(prompt("Digite a primeira nota:"));
  const nota2 = parseFloat(prompt("Digite a segunda nota:"));

  if (isNaN(nota1) || isNaN(nota2)) {
    alert("⚠ Digite notas válidas.");
    return;
  }

  const media = (nota1 + nota2) / 2;
  const status = media >= 7 ? "Aprovado" : "Reprovado";

  alert(`${nome.trim()}, sua média foi ${media.toFixed(1)}. Situação: ${status}.`);
}


function jogo3() {
  const container = document.getElementById("conteudo");
  container.innerHTML = `
    <h2>💾 Jogo do Salvar Texto</h2>
    <p>Digite seu texto abaixo e salve em um arquivo!</p>
    <textarea id="textoParaSalvar" placeholder="Digite seu texto aqui..." rows="6" cols="50" maxlength="1000"></textarea>
    <br><br>
    <input type="text" id="nomeArquivo" placeholder="Nome do arquivo (sem extensão)" />
    <br><br>
    <button onclick="salvarTexto()">💾 Salvar Arquivo</button>
    <p id="resultado"></p>
  `;
}

function salvarTexto() {
  const texto = document.getElementById("textoParaSalvar").value.trim();
  const nomeArquivo = document.getElementById("nomeArquivo").value.trim();
  const resultado = document.getElementById("resultado");

  if (!texto) {
    resultado.textContent = "⚠ Digite algum texto para salvar!";
    resultado.style.color = "#d63031";
    return;
  }

  if (texto.length > 1000) {
    resultado.textContent = "⚠ O texto é muito grande! Limite a 1000 caracteres.";
    resultado.style.color = "#d63031";
    return;
  }

  // Nome padrão ou com limpeza de caracteres inválidos
  const nomeLimpo = (nomeArquivo || "meu_texto").replace(/[^a-z0-9-_]/gi, "_");

  const blob = new Blob([texto], { type: "text/plain" });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = nomeLimpo + ".txt";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  window.URL.revokeObjectURL(url);

  resultado.textContent = `✅ Arquivo "${nomeLimpo}.txt" salvo com sucesso!`;
  resultado.style.color = "#00b894";
}
