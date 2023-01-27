function carregar (){

    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var agora = new Date()
    var hora = agora.getHours()
    msg.innerHTML = `Agora são ${hora} horas`

    if(hora >= 0 && hora < 12){

        img.src = '/exercício_P1/components/images/manha_png.png'
        document.body.style.background = '#efd4a8'

    } else if (hora >= 12 && hora < 18) {

        img.src = '/exercício_P1/components/images/tarde_png.png'
        document.body.style.background = '#fac47a'

    } else {

        img.src = '/exercício_P1/components/images/noite_png.png'
        document.body.style.background = '#3d3252'

    }
}


