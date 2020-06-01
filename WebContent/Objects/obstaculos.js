obstaculos = {
    _obs: [],
    _scored: false,
    _sprites: [ umaMadeira, duasMadeiras, tresMadeiras, cincoMadeiras ],
    tempoInsere: 0,

    insere: function() {
        this._obs.push({
            x: LARGURA,
            y: chao.y - 30,
            largura: 0,
            sprite: this._sprites[Math.floor( this._sprites.length * Math.random())], 
            
        })

        this.tempoInsere = 30 + Math.floor(40 * Math.random())
    },

    atualiza: function() {
        if(this.tempoInsere == 0) {
            this.insere()
        } else {
            this.tempoInsere--
        }

        for (var i = 0, tam = this._obs.length; i < tam; i++) {
            var obs = this._obs[i]

            obs.x -= velocidade

            //Colisão
            if ( !bloco.colidindo && bloco.x < obs.x + obs.largura && bloco.x + bloco.largura >= obs.x
                && bloco.y + bloco.altura >= obs.y) {
                    
                    bloco.colidindo = true
                    somImpacto.play()

                    setTimeout( function() {
                        bloco.colidindo = false
                    }, 500)


                   
                    if ( bloco.vidas >= 1 )
                        bloco.vidas--
                    else
                        estadoAtual = estados.perdeu

            }

            else if(obs.x <= 0 && !obs._scored) {
                bloco.score++
                obs._scored = true

                if (faseAtual < pontosParaNovaFase.length &&
                 bloco.score == pontosParaNovaFase[faseAtual])
                    passarDeFase()

            }

            else if(obs.x <= -obs.largura) {
                this._obs.splice(i, 1)
                tam--
                i--
            }
        }
    },

    limpa: function() {
        this._obs = []
    },

    desenha: function() {
        for (var i = 0, tam = this._obs.length; i < tam; i++) {
            var obs = this._obs[i];
        
            obs.sprite.desenhaObstaculo( obs.x, obs.y )
        }
    }
}