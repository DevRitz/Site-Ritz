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
    <div className='oi'>
        <header className="cabecalho">
        <div>
            
            <a href="https://matias.ma/nsfw/#_=">   <img className ="imagem-cabecalho" src="img/R.png" alt="Logo Ballerini"/></a> 
           
        </div>
       
        <nav className="menu-nav">
            <a href= "https://www.instagram.com/joao_ritzz/" className="ancora1">Instagram</a>
            <a href="https://wa.me/5514988008368" className="ancora1">WhatsApp</a>
            <a href="don.html" download className="ancora1">Source Code</a>  
            <a href="https://mail.google.com/mail/u/1/#inbox"className="ancora1">Gmail</a> 
            
        </nav>
    </header>

    


    <main className="conteudo">

        <div className="relogio"id="clock">{10}</div>
        
        <section className="conteudo-principal">    
            
          <div className="conteudo-principal-escrito">
            <h1 className="conteudo-principal-escrito-titulo">João Ritz</h1>
            <h2 className="conteudo-principal-escrito-subtitulo">João Victor Ritz Shimamura de Carvalho, 17 anos, Bauru - SP </h2>
            
            <form action="https://www.linkedin.com/in/joão-victor-ritz-shimamura-de-carvalho-294b33216/">   
            <button className="conteudo-principal-escrito-botao">Linkedin!</button>
            </form>   
          
        </div>
          
          <img className="conteudo-principal-imagem"src="img/eu.jpg" alt="Imagem da Balle Bot"/>
        </section>
        
        <section className="conteudo2">
        <h3 className="conteudo2-titulo">Resumo de experiências profissionais:</h3>
        <p className="conteudo2-paragrafo"><strong>1. Assistente 3D (Archviz), Comercial (Nominal 3D & Carvatolle)</strong></p>
        <p className="conteudo2-paragrafo"><strong>2. 3° Etim Adm - ETEC RODRIGUES DE ABREU, Desenvolvimento Web & Mobile SENAI</strong></p>
        <p className="conteudo2-paragrafo"><strong>3. Inglês Básico, Programação e impressão 3D, Html, Css, Javascript</strong></p>

        </section>

    </main>

    <footer className="rodape">
    <img className="rodape-imagem"src="img/yin.png" alt="rodapé balle"/>
    </footer>

    
    </div>
  )
}
