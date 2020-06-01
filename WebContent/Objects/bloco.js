bloco = {
    x: 50,
    y: 0,
    altura: 190,
    largura: 120,
    gravidade: 1.6,
    velocidade: 0,
    forcaDoPulo: 23.6,
    qntPulos: 0,
    score: 0,
    rotacao: 0,
    count:0,
    tempoChange: 0,
    vidas: 3,
    colidindo: false,

    //Aqui é a função responsável por animar o personagem
    changeImage: function(){
        if (this.count <=5){// aqui o numero de vezes em que a imagem vai mudar apartir do 0
                    
            if (this.count == 0){
                spriteBoneco.x = 0;
            }else {
                spriteBoneco.x = spriteBoneco.x + spriteBoneco.largura;//aqui soma-se a largura do sprite para mudar de img
            }
            this.count++;// contador vai somando +1
        } else {
            spriteBoneco.x = 0;
            this.count = 1
        }
        this.tempoChange =7;//aqui é a velocidade em que uma imagem muda para a outra
    },
            

    atualiza: function() {

        ctx.clearRect(this.x, this.y, 135,190);

        this.velocidade += this.gravidade;
        this.y += this.velocidade;

        if(this.y > chao.y - this.altura && estadoAtual != estados.perdeu) {
            this.y = chao.y - this.altura;
            this.qntPulos = 0;
            this.velocidade = 0;
        }
        if(this.tempoChange==0){

            this.changeImage();

        } else {

            this.tempoChange--;
        }

        if( this.vidas == 0) {
            estadoAtual = estados.perdeu
        }
    },

    // função responsável para fazer o personagem pular
    pula: function() {
        if(this.qntPulos < maxPulos) {
            this.velocidade = -this.forcaDoPulo;
            this.qntPulos++;
        }
    },

    reset: function () {
        this.velocidade = 0;
        this.y = 0;

        if (this.score > record) {
            localStorage.setItem("record", this.score);
            record = this.score;
        }

        this.vidas = 3;
        this.score = 0;

        velocidade = 6;
        faseAtual = 0;
        this.gravidade = 1.6;

    },

    desenha: function() {
        spriteBoneco.desenha(this.x, this.y);

    }
}