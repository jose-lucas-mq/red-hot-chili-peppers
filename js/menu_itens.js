let menu_itens = document.querySelectorAll('#anchor')

    menu_itens.forEach(item => {
        item.addEventListener('click', scrollToId);
    })

    function scrollToId(){
        event.preventDefault();


        let element = event.target;

        let id_elemento = element.getAttribute('href');
        
        let divTo = document.querySelector(id_elemento).offsetTop;
        


        window.scroll({
            top: divTo - 90,
            behavior: "smooth",

        });
    }