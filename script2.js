window.onload = function () {  
     
     var paragrafo = document.querySelector("#viewSessionSotorage");
     paragrafo.textContent = sessionStorage.getItem('email');
     var validaCadastro = sessionStorage.getItem('validaCadastro');

     if(!validaCadastro){
        window.location = "https://felipec0d3r.github.io/Desafio_Trimestral-1/";
     }
       setTimeout(function(){
           document.getElementById('msg').style.display = 'block';
       }, 5000);
  
       setTimeout(function(){
          document.getElementById('msg').style.display = 'none';
        }, 5000);
     
     
}

