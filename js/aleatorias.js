window.onload = sorteio();



    function sorteio() {
       var music = parseInt((Math.random() * 9) + 1);
       tocando.src = `./../audios/op${music}.mp3`;
       tocando.volume = 0.01;
    }
