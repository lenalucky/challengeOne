function teste (){
  document.addEventListener("DOMContentLoaded", function() {
    p = document.getElementById('texto');
    p.blur();
  });
}

teste()



window.addEventListener("load", function() {
var teste = document.getElementById("texto").readOnly = true;
});
turu = () => {
  codificarTexto = (texto) =>{

      return texto.replace(/M/g, 'turu_! ')
                .replace(/A/g, 'turu_! ')
                .replace(/B/g, 'turuturu_! ')
                .replace(/C/g, 'turu_! ')
                .replace(/Ç/g, 'turuturu_! ')
                .replace(/D/g, 'turuturu_! ')
                .replace(/E/g, 'turu_! ')
                .replace(/F/g, 'turu_! ')
                .replace(/G/g, 'turu_! ')
                .replace(/H/g, 'turuturu_! ')
                .replace(/I/g, 'turutu_! ')
                .replace(/J/g, 'turu_!  ')
                .replace(/K/g, 'turutu_!  ')
                .replace(/L/g, 'turu_!  ')
                .replace(/N/g, 'turuturu_!  ')
                .replace(/O/g, 'tututuru_!  ')
                .replace(/P/g, 'turuturu_!  ')
                .replace(/Q/g, 'turutu_!  ')
                .replace(/R/g, 'esseturuturu_!  ')
                .replace(/S/g, 'turutu_!  ')
                .replace(/T/g, 'turutu_!  ')
                .replace(/U/g, 'tuturu_!  ')
                .replace(/V/g, 'turutu_!  ')
                .replace(/W/g, 'turuturu_!  ')
                .replace(/X/g, 'turuturu_!  ')
                .replace(/Y/g, 'turutu_!  ')
                .replace(/Z/g, 'esseturuturu_!  ')
                .replace(' ', '*')
                .replace(/_/g, '')
                .replace('*', ' ')

    }
  input = document.getElementById('escreva')
  p = document.getElementById('texto')
  

  // return   p.innerHTML = `${(codificarTexto(input.value.toUpperCase()))}`

  p.innerHTML = ''; // Limpar qualquer conteúdo anterior

  const textoCodificado = codificarTexto(input.value.toUpperCase());
  let i = 0;
  intervalId = setInterval(() => {
      p.innerHTML += textoCodificado.charAt(i);
      i++;
      if (i >= textoCodificado.length) {
          clearInterval(intervalId);
          // Remove o conteúdo digitado e adiciona o conteúdo final
          p.innerHTML = p.innerHTML.replace(/_/g, '').replace('*', ' ');
          p.innerHTML = p.innerHTML;
      }
  }, 50);
}


dec = () => {
  
  const codificarTexto = (texto) =>{
    return texto.replace(/!/g,'')
                .replace(/´/g,'')
                .replace(/turuturu/g, 'A')
                .replace(/turuturu/g, 'B')
                .replace(/turuturu/g, 'C')
                .replace(/turuturu/g, 'D')
                .replace(/turuturu/g, 'E')
                .replace(/turuturu/g, 'F')
                .replace(/turuturu/g, 'G')
                .replace(/turuturu/g, 'H')
                .replace(/turuturu/g, 'I')
                .replace(/turuturu/g, 'J')
                .replace(/turuturu/g, 'K')
                .replace(/turuturu/g, 'L')
                .replace(/turuturu/g, 'M')
                .replace(/turuturu/g, 'N')
                .replace(/turutuuu/g, 'O')
                .replace(/turuturu/g, 'P')
                .replace(/turuturu/g, 'Q')
                .replace(/turuturu/g, 'R')
                .replace(/turuturu/g, 'S')
                .replace(/turuturu/g, 'T')
                .replace(/turuturu/g, 'U')
                .replace(/turuturu/g, 'V')
                .replace(/turuturu/g, 'W')
                .replace(/turuturu/g, 'X')
                .replace(/turuturu/g, 'Y')
                .replace(/turuturu/g, 'Z')
  }

  const input = document.getElementById('escreva')
  const p = document.getElementById('texto')
  const textoCodificado = codificarTexto(input.value.toLowerCase()).toUpperCase()
  let index = 0
  p.innerHTML = ''
  const escrever = () => {
    if (index < textoCodificado.length) {
      p.innerHTML += textoCodificado.charAt(index)
      index++
      teste = setTimeout(escrever, 50)
    }
  }
  escrever()
}





function copiarTexto() {
  const textarea = document.getElementById('texto');
  if(textarea.value == ''){alert('Nenhum texto foi copiado')}

    else {
  // Seleciona o conteúdo do textarea

  textarea.select();
  p = document.getElementById('texto')
  // Copia o conteúdo selecionado para a área de transferência
  document.execCommand('copy');

  alert('Copiado!')
}
}

limpar = () => {
  p = document.getElementById('texto');
  p.innerHTML = '';
  clearInterval(intervalId);
  clearInterval(teste)
  input = document.getElementById('escreva')
  input.value = ''
}
