$('.owl-carousel').owlCarousel({
    loop: true,
    /*Dá forma ao carrossel*/
    margin: 10,
    /*Margem entre cada um dos itens do carrossel*/
    nav: false,
    /*Habilita as setas de navegação abaixo dos itens*/
    responsive: {
        0: {
            items: 1
                /*Com a tela com tamanho próximo de 0px, irá apresentar apenas 1 item*/
        },
        600: {
            items: 3
                /*Com a tela a 600px, irá apresentar 3 itens*/
        },
        1000: {
            items: 5
                /*Com a tela com 1000px ou + apresenta 5 itens*/
        }
    }
})

/*Em programação sempre que aparece o $ se interepreta como sendo a deixa para o jquary*/