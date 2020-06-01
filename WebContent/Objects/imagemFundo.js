IMAGEMFUNDO = {
    y: 0,
    x: 0,

    atualiza: function(){
        this.x -= velocidade;
        if (this.x <-700)
            this.x=0;
    },
    desenha: function(){
        bg.desenhaBackground(this.x, this.y);
        bg.desenhaBackground(this.x + bg.largura, this.y);
    }
}