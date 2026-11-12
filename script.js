const musicas = [
    musica1 = {
        titulo: "Asa Branca",
        estilo: "Baião",
        tempo: 168,
        reproduzindo: false
    },
    musica2 = {
        titulo: "Qui Nem Jiló",
        estilo: "Baião",
        tempo: 175,
        reproduzindo: false
    },
    musica3 ={
        titulo: "O Xote das Meninas",
        estilo: "Xote",
        tempo: 192,
        reproduzindo: false
    }
];

let indiceAtual = 0;

function exibirNoConsole(mensagem) {
    document.getElementById("console-output").innerHTML += `<p>&gt; ${mensagem}</p>`;
}


function atualizarTela() {
    const musica = musicas[indiceAtual];
    document.getElementById("select-musica").value = indiceAtual;
    document.getElementById("titulo").textContent = musica.titulo;
    document.getElementById("estilo").textContent = musica.estilo;
    document.getElementById("tempo").textContent = musica.tempo;
    document.getElementById("status").textContent = musica.reproduzindo ? "Tocando" : "Pausada";
}

function play() {
      const musica = musicas[indiceAtual];
      if (!musica.reproduzindo) {
        musicas.forEach(m => m.reproduzindo = false);
        musica.reproduzindo = true;
        exibirNoConsole(`A música: ${musica.titulo} está tocando!`);
      } else {
        exibirNoConsole(`A música: ${musica.titulo} já está tocando!`);
      }
      atualizarTela();
    }

    function pausar() {
      const musica = musicas[indiceAtual];
      if (musica.reproduzindo) {
        musica.reproduzindo = false;
        exibirNoConsole(`A música: ${musica.titulo} foi pausada!`);
      } else {
        exibirNoConsole(`A música: ${musica.titulo} já está pausada!`);
      }
      atualizarTela();
    }

    function passar() {
      musicas[indiceAtual].reproduzindo = false;
      indiceAtual = (indiceAtual + 1) % musicas.length; // Volta para 0 se passar da última
      exibirNoConsole(`Você passou para a música: ${musicas[indiceAtual].titulo}!`);
      atualizarTela();
    }

    function voltar() {
      musicas[indiceAtual].reproduzindo = false;
      indiceAtual = (indiceAtual - 1 + musicas.length) % musicas.length; // Vai para a última se voltar da 0
      exibirNoConsole(`Você voltou para a música: ${musicas[indiceAtual].titulo}!`);
      atualizarTela();
    }

document.getElementById("select-musica").addEventListener("change", (e) => {
    musicas[indiceAtual].reproduzindo = false;
    indiceAtual = Number(e.target.value);
    atualizarTela();
});

document.getElementById("btnPlay").addEventListener("click", play);
document.getElementById("btnPausar").addEventListener("click", pausar);
document.getElementById("btnPassar").addEventListener("click", passar);
document.getElementById("btnVoltar").addEventListener("click", voltar);