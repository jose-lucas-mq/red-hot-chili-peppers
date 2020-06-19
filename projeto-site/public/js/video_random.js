

    function r_video(){
        ano_footer.innerHTML = new Date().getFullYear();

        let new_video = parseInt(Math.random()*5)+1;

        video.innerHTML = new_video == 0 ? `<iframe width="560" height="315" src="https://www.youtube.com/embed/B4jSt0ne1ck" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>` : new_video == 1 ? `<iframe width="560" height="315" src="https://www.youtube.com/embed/QZmM4YeSu8g" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>` : new_video == 2 ?
        `<iframe width="560" height="315" src="https://www.youtube.com/embed/_m7_xZN8D7M" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>` : new_video == 3 ? `<iframe width="560" height="315" src="https://www.youtube.com/embed/FG5ems_1Glk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>` : new_video == 4 ? `<iframe width="560" height="315" src="https://www.youtube.com/embed/0_a9UmHSe0I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>` : `<iframe width="560" height="315" src="https://www.youtube.com/embed/O9TunCtR3dQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    }