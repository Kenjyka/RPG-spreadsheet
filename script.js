/*Cosnts, variáveis e seus eventlisteners */
    /*div #level */
        const level_n = document.getElementById("level_n")

        level_n.addEventListener("input", function() {
            let limit = 2
            let valorAtual = level_n.value

            if (valorAtual.length > limit) {
                level_n.value = valorAtual.slice(0, limit)
            }
        })

    /* Div #recursos */
        const hp_total = document.getElementById("hp_total")
        const hp_atual = document.getElementById('hp_atual')
        const mp_total = document.getElementById('mp_total')
        const mp_atual = document.getElementById('mp_atual')

        hp_atual.addEventListener("input", function() {
            let limit = Number(hp_total.value)
            let valorAtual = Number(hp_atual.value)

            if (valorAtual > limit) {
                hp_atual.value = limit
            }
        })

        mp_atual.addEventListener("input", function() {
            let limit = Number(mp_total.value)
            let valorAtual = Number(mp_atual.value)

            if (valorAtual > limit) {
                mp_atual.value = limit
            }
        })

