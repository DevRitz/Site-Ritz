import Head from 'next/head'
import Image from 'next/image'

function showTime() {
  let time = new Date();
  let hour = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();
  let   am_pm = " Am";

  if (hour > 12) {
      hour -= 12;
      am_pm = " Pm";
  }
  if (hour == 0) {
      hr = 12;
      am_pm = " Am";
  }

  hour = hour < 10 ? "0" + hour : hour;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  let currentTime = hour + ":" 
      + min + ":" + sec + am_pm;

      document.getElementById("clock")
        .innerHTML = currentTime;
}

export default function Home() {
  setInterval(() => {
    showTime()
  }, 1000 );
  return (
    <div class='oi'>
        <header class="cabecalho">
        <div>
            
            <a href="https://matias.ma/nsfw/#_=">   <img class ="imagem-cabecalho" src="img/R.png" alt="Logo Ballerini"/></a> 
           
        </div>
       
        <nav class="menu-nav">
            <a href= "https://www.instagram.com/joao_ritzz/" class="ancora1">Instagram</a>
            <a href="https://wa.me/5514988008368" class="ancora1">WhatsApp</a>
            <a href="don.html" download class="ancora1">Source Code</a>  
            <a href="https://mail.google.com/mail/u/1/#inbox"class="ancora1">Gmail</a> 
            
        </nav>
    </header>

    


    <main class="conteudo">

        <div class="relogio"id="clock">{10}</div>
        
        <section class="conteudo-principal">    
            
          <div class="conteudo-principal-escrito">
            <h1 class="conteudo-principal-escrito-titulo">João Ritz</h1>
            <h2 class="conteudo-principal-escrito-subtitulo">João Victor Ritz Shimamura de Carvalho, 17 anos, Bauru - SP </h2>
            
            <form action="https://www.linkedin.com/in/joão-victor-ritz-shimamura-de-carvalho-294b33216/">   
            <button class="conteudo-principal-escrito-botao">Linkedin!</button>
            </form>   
          
        </div>
          
          <img class="conteudo-principal-imagem"src="img/eu.jpg" alt="Imagem da Balle Bot"/>
        </section>
        
        <section class="conteudo2">
        <h3 class="conteudo2-titulo">Resumo de experiências profissionais:</h3>
        <p class="conteudo2-paragrafo"><strong>1. Assistente 3D (Archviz), Comercial (Nominal 3D & Carvatolle)</strong></p>
        <p class="conteudo2-paragrafo"><strong>2. 3° Etim Adm - ETEC RODRIGUES DE ABREU, Desenvolvimento Web & Mobile SENAI</strong></p>
        <p class="conteudo2-paragrafo"><strong>3. Inglês Básico, Programação e impressão 3D, Html, Css, Javascript</strong></p>

        </section>

    </main>

    <footer class="rodape">
    <img class="rodape-imagem"src="img/yin.png" alt="rodapé balle"/>
    </footer>

    
    </div>
  )
}
