//Classe Sprite:
function Sprite(x, y, largura, altura) {
    this.x = x
    this.y = y
    this.largura = largura
    this.altura = altura

    //Métodos:
    this.desenha = function( xCanvas, yCanvas ) {
        ctx.drawImage( img, this.x, this.y, this.largura, this.altura, xCanvas, yCanvas, this.largura, this.altura)
    }

    this.desenhaObstaculo = function( xCanvas, yCanvas ) {
            
        ctx.drawImage( imgObs, this.x, this.y, this.largura, this.altura, xCanvas, yCanvas, this.largura, this.altura)
    }

    this.desenhaBackground = function( xCanvas, yCanvas ) {
        ctx.drawImage( imgBG, this.x, this.y, this.largura, this.altura, xCanvas, yCanvas, this.largura, this.altura)
    }

    this.desenhaChao = function(xCanvas, yCanvas){
		ctx.drawImage(imgChao,this.x, this.y, this.largura, this.altura, xCanvas, yCanvas, this.largura,this.altura);
	}
	this.desenhaInicio = function(xCanvas, yCanvas){
		ctx.drawImage(imgInicio,this.x, this.y, this.largura, this.altura, xCanvas, yCanvas, this.largura,this.altura);
	}

	this.desenhaPerder= function(xCanvas, yCanvas){
		ctx.drawImage(imgPerder,this.x, this.y, this.largura, this.altura, xCanvas, yCanvas, this.largura,this.altura);
	}
	this.desenhaNovo= function(xCanvas,yCanvas){
		ctx.drawImage(imgNovo,this.x, this.y, this.largura, this.altura, xCanvas, yCanvas, this.largura,this.altura);
	}
}

//Criando Objetos do Tipo Sprite:

//Background
var bg = new Sprite(0,0,700,600), 

//Boneco:
spriteBoneco = new Sprite(0, 0, 135, 190),

//Estados:
spritePerder= new Sprite(0,0,243,280),
spriteInicio = new Sprite(0,0,200,200),
spriteNovoRecord = new Sprite(0,0,263,252),
spriteChao = new Sprite(0,0,600,54),

//Obstáculos:
umaMadeira = new Sprite(0, 2, 38, 33)
duasMadeiras = new Sprite(58, 2, 57, 33)
tresMadeiras = new Sprite(133, 2, 56, 43)
cincoMadeiras = new Sprite(214, 2, 80, 49)