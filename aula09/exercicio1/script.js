function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var hora = new Date()
    var agora = hora.getHours()
    msg.innerHTML = `Agora são ${agora} Horas.`
    if (agora >= 0 && agora < 12) {
        img.src = 'img/manhap.png'
        document.body.style.background = '#e2cd9f'
    } else if (agora >= 12 && agora < 18) {
        img.src = 'img/tardep.png'
        document.body.style.background = '#b9846f'
    } else {
        img.src = 'img/noitep.png'
        document.body.style.background = '#515154'
    }

}