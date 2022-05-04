window.onload = function () {  
     
     var paragrafo = document.querySelector("#viewSessionSotorage");
     paragrafo.textContent = localStorage.getItem('email');

     setTimeout(function(){
         document.getElementById('msg').style.display = 'block';
     }, 5000);

     setTimeout(function(){
        document.getElementById('msg').style.display = 'none';
      }, 5000);

}


window.close = function () {
  localStorage.clear("email");
  alert("Fechando");
}
