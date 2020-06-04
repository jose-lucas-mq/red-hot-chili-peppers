window.onload = sorteio();



    function sorteio() {
       var music = parseInt((Math.random() * 9));
       tocando.src = `./audios/op${music}.mp3`;

       var decisao = confirm ("Deseja tocar música?");


       if (decisao){
         tocando.volume = 0.1;
         
       }
       else {
         tocando.volume = 0;
         
       }
         
      
    }
