let sifra = 0
function plusClick() {
    sifra = sifra +1
    console.log(sifra)
    document.getElementById("anal").innerHTML = sifra
}
const minusknap = dokument.getElementById("anal")
minusknap.addEventlistener("click" ,minusClick)

function minusClick(){
    sifra --
    console.log(sifra)
    document.getElementById("anal").innerHTML = sifra
}