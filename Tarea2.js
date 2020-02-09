var mes = 10

function verificarMes () {
    if (mes == 12 || mes> = 1 && mes <= 2) {
        document.write ('Es invierno')
    }
    else if (mes> = 3 && mes <= 5) {
        document.write ('Es primavera')
    }
    else if (mes> = 6 && mes <= 8) {
        document.write ('Es verano')
    }
    else {
        document.write ('Es otoÃ ± o')
    }
    document.write ('<br /> Carne: 20003529 - Edwin Armando Pérez Palma')
}
verificarMes ()