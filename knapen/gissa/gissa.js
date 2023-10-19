const slumptal = Math.floor(Math.random() * 100) + 1
let antalgisningar = 0


slump = Math.random()

function gissatal() {
    console.log(`slump = ${slumptal}`)
    let textfelt_gissa = document.getElementById("gissa").value
    let gissa_int = Number(textfelt_gissa)
    let vinn = false
    let p_svar = document.getElementById("p_svar")


    if (antalgisningar < 3) {

        if (slumptal === gissa_int) {
            console.log(`rätt svar`)
            vinn = true
            p_svar.innerHTML = "du vann"
        }

        else {
            console.log(`fel svar`)
            if (antalgisningar === 2) {
                p_svar.innerHTML = "alvin gay"
            }
            else {
                p_svar.innerHTML = `fel svar ${gissa_int}`

            }
            document.getElementById("gissa").value = ""
            document.getElementById("gissa").focus()
        }
        antalgisningar++


    }
    else {
        p_svar.innerHTML = `loser`
    }
}

