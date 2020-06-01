var audio = new Audio('./Sounds/mr-fox.mp3');
audio.volume = "0.4"

var somPulo = new Audio('./Sounds/jump.wav')

var somDerrota = new Audio('./Sounds/defeated.wav')

var somImpacto = new Audio('./Sounds/impact.wav')


//variáveis do jogo
var canvas, ctx, ALTURA, LARGURA, maxPulos = 3, velocidade = 6, 
estadoAtual, record, img, 

pontosParaNovaFase = [10, 20, 30, 40],
faseAtual = 0



//Funções do jogo:

//Função responsável pelo clique:
function clique(event) {
    
    if(estadoAtual == estados.jogando) {
        bloco.pula()
        somPulo.play()
    }    
    else if (estadoAtual == estados.jogar) {
        estadoAtual = estados.jogando
    }

    else if (estadoAtual = estados.perdeu) {
        estadoAtual = estados.jogar
        obstaculos.limpa()
        bloco.reset()
    }
}

//Função para passar de fase:

function passarDeFase() {
    velocidade++
    faseAtual++
    bloco.vidas++

    if (faseAtual == 4) {
        bloco.gravidade *= 0.6
    }

    labelNovaFase.text = "Level " + faseAtual
    labelNovaFase.fadeIn( 0.4 )

    setTimeout( function() {
        labelNovaFase.fadeOut( 0.4 )
    }, 800 )

}

//Inicialização
function main() {
    
    ALTURA = window.innerHeight //Devolve a altura da janela do usuário
    LARGURA = window.innerWidth //Devolve a largura da janela do usuário

    if (LARGURA >= 500) {
        LARGURA= 600
        ALTURA = 600
    }
    //Criando a canvas usando JS
    canvas = document.createElement("canvas")
    canvas.width = LARGURA
    canvas.height = ALTURA
    canvas.style.border = "1px solid #000"

    //Definindo um contexto 2d
    ctx= canvas.getContext("2d")

    //Add a variável canvas no body
    document.body.appendChild(canvas)

    //Verificando os cliques
    document.addEventListener("mousedown", clique)

    estadoAtual = estados.jogar

    record = localStorage.getItem("record")

    if (record == null) {
        record = 0
    }
    
    //Caminho das imagens
    imgBG = new Image()
    imgBG.src = "Images/BackgroundFinal.png"

    imgObs = new Image()
    imgObs.src = "Images/tora.png"

    img = new Image()
    img.src = "Images/boneco.png"

    imgChao = new Image()
    imgChao.src="Images/chao.png"

    imgInicio =new Image();
    imgInicio.src="Images/inicio.png"

    imgPerder = new Image();
    imgPerder.src="Images/pontuação.png"

    imgNovo = new Image();
    imgNovo.src="Images/record.png"

    
    roda()
}

//Atualização de looping
function roda() {
    atualiza()
    desenha()
    
    audio.play()

    window.requestAnimationFrame(roda)
    
}

//Atualiza os status e blocos
function atualiza() {
    //frames++

    if (estadoAtual == estados.jogando) {
        obstaculos.atualiza()
    }

    //Sons:
    if (estadoAtual == estados.perdeu) {
        
        audio.muted = true      
        somDerrota.play()
    
        
    }

    if (estadoAtual == estados.jogar) {
        audio.muted = false

    }

    IMAGEMFUNDO.atualiza()
    chao.atualiza()
    bloco.atualiza()
}

//Desenho do game(blocos, chão, etc)
function desenha() {
    //Alterando para imagens:
    IMAGEMFUNDO.desenha()

    //ctx.fillStyle = "#fff"
    ctx.fillStyle = "#292929"
    ctx.font = "27px Arial"


    ctx.fillText(`Score: ${bloco.score}`, 30, 68)

    ctx.fillStyle = "#ff261b"
    ctx.fillText(`\u{2661}${bloco.vidas}`, 525, 68)

    ctx.fillStyle = "rgba(0, 0, 0," + labelNovaFase.opacidade +" )"
    ctx.fillText( labelNovaFase.text, canvas.width / 2 - ctx.measureText( labelNovaFase.text ).width / 2, canvas.height / 3)

    if(estadoAtual == estados.jogando) {
        obstaculos.desenha()
    }

    chao.desenha()
    bloco.desenha()

    if (estadoAtual == estados.jogando)
        obstaculos.desenha();

    if (estadoAtual == estados.jogar) 
        //botão de iniciar jogo
        spriteInicio.desenhaInicio(LARGURA /2 - spriteInicio.largura / 2, ALTURA /2 - spriteInicio.altura /2);
    
    if (estadoAtual == estados.perdeu) {
        
        ctx.fillStyle = "#fff";
        

        if (bloco.score > record) {
            spriteNovoRecord.desenhaNovo(LARGURA/2 - spriteNovoRecord.largura /2, ALTURA/2 - spriteNovoRecord.altura/2);
            ctx.fillText(bloco.score,290,350);
        }
        else if (bloco.score <= record) {
            // o segundo é a altura, onde se conta de cima para baixo, o primeiro da esquerda para direita
            spritePerder.desenhaPerder(LARGURA /2 - spritePerder.largura / 2, ALTURA /2 - spritePerder.altura /2);
            ctx.fillText(bloco.score, 350, 260);
            ctx.fillText(record,350,350);
        }
    }
    
}


//inicializa o jogo
main();