var chao = {
    y: 550,
    x: 0,
    altura: 50,

    atualiza: function() {
        this.x -= velocidade

        if (this.x <= -30) {
            this.x += 30
        }
    },

    desenha: function() {
        spriteChao.desenhaChao(this.x, this.y)
        spriteChao.desenhaChao(this.x + spriteChao.largura, this.y )
    }
}