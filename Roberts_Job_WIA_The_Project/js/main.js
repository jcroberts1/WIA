/* Main.js */

$(document).ready(function(){
    // Midnight Header
    $('header.fixed').midnight();

// vivus animation
    var def = new Vivus('anim', {type: 'async', duration: 108, start: 'manual', forceRender: false, file: 'img/logo.png'});
    var dark = new Vivus('anim-dark', {type: 'async', duration: 108, start: 'manual', forceRender: false, file: 'img/logo.png'});

    $('a').mouseenter(function(){

        //modernizer audio check
        var audio = new Audio();
        audio.src = Modernizr.audio.mp3 ? 'audio/05 - A Perfect Circle - Orestes 2.mp3' :
            Modernizr.audio.ogg ? 'audio/05 - A Perfect Circle - Orestes.ogg' :

                tone.playbackRate = 4;
        audio.load();
        audio.volume = .1;
        audio.play();

        dark.reset(); dark.play(2);
        def.reset(); def.play(2);

    });

    $('a').mouseleave(function(){
    });


//jQuery Effects
    $('button').click(function(){
        $('button').hide("fast", function(){

            //Modernizer audio check
            var song = new Audio();
            song.src = Modernizr.audio.mp3 ? 'audio/05 - A Perfect Circle - Orestes.mp3' :
                Modernizr.audio.ogg ? 'audio/05 - A Perfect Circle - Orestes.ogg' :
                    song.volume= .5;
            song.play();

            $('h1 , nav').fadeIn("slow",function(){
                dark.reset(); dark.play(2);
                def.reset(); def.play(2);
            });
        });
        //complete
    });

});

//footer effect//
$(window).bind("load", function() {

    var footerHeight = 0,
        footerTop = 0,
        $footer = $("#footer");

    positionFooter();

    function positionFooter() {

        footerHeight = $footer.height();
        footerTop = ($(window).scrollTop()+$(window).height()-footerHeight)+"px";

        if ( ($(document.body).height()+footerHeight) < $(window).height()) {
            $footer.css({
                position: "absolute"
            }).animate({
                top: footerTop
            })
        } else {
            $footer.css({
                position: "static"
            })
        }

    }

    $(window)
        .scroll(positionFooter)
        .resize(positionFooter)

});

