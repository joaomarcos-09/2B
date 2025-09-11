function criaCartao (categoria,pergunta,resposta) {

    let container = document.getElementById('container')
    let cartao = document.createElement ('article')
    cartao.className = 'cartao'
    cartao.innerHTML = `
     <div class="cartao__conteudo">
        <h3>Curiosidades</h3>
         <div class="cartao__conteudo__pergunta">
              <p>Você sabe porque o frutiger-aero tem essa estetica?</p>
         </div>
        <div class="cartao__conteudo__resposta">
            <p>Ele tem essa estetica pois queriam simular um futuro "perfeito" com elementos da natureza.</p>
        </div>
     </div>
       `
}