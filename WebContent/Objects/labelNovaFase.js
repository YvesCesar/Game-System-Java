labelNovaFase = {
    text: "",
    opacidade:  0.0,

    fadeIn: function( dt ) {

        var fadeInId = setInterval( function() {

            if (labelNovaFase.opacidade < 1.0)
                labelNovaFase.opacidade += 0.01
            else {
                clearInterval(fadeInId)
            }
            
        }, 10 * dt )

    },

    fadeOut: function( dt ) {

        var fadeOutId = setInterval( function() {

            if (labelNovaFase.opacidade > 0.0)
                labelNovaFase.opacidade -= 0.01
                else {
                    clearInterval(fadeOutId)
            }

        }, 10 * dt )
            
    }
} 