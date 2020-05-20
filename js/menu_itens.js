var menu_itens = document.querySelectorAll('.navbar a')

    menu_itens.forEach(item => {
        item.addEventListener('click', scrollToId);
    })

    function scrollToId(){
        event.preventDefault();


        var element = event.target;

        var id_elemento = element.getAttribute('href');
        
        var divTo = document.querySelector(id_elemento).offsetTop;
        


        window.scroll({
            top: divTo - 90,
            behavior: "smooth",

        });
    }