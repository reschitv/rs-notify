$(function () {
    var sound = new Audio('sound.mp3');
    sound.volume = 0;
    window.addEventListener('message', function (event) {
        if (event.data.action == 'open') {
            var number = Math.floor((Math.random() * 1000) + 1);
            $('.toast').append(`
            <div class="wrapper-${number}">
                <div class="notification_main-${number}">
                    <div class="title-${number}"></div>
                    <div class="text-${number}">
                        ${event.data.message}
                    </div>
                </div>
            </div>`)
            $(`.wrapper-${number}`).css({
                "margin-bottom": "10px",
                "width": "314px",
                "margin": "0 0 8px -180px",      
                "box-shadow": "rgb(207 115 2 / 75%) 0px 5px 57px 0px",
                "background": "rgb(28 28 28)",
                "opacity": "0.6",
                "mix-blend-mode": "normal",
                "border-radius": "3px",
            })
            $('.notification_main-'+number).addClass('main')
            $('.text-'+number).css({
                "color": "white",
                "font-style": "normal",
                "font-weight": "400",
                "font-size": "11px",
                "line-height": "15px",
                "word-break": "normal",
                "margin-top": "5px",
            })

            if (event.data.type == 'success') {
                $(`.title-${number}`).html(event.data.title).css({
                    "font-weight": "700",
                    "color": "white",
                    "font-style": "normal",
                    "font-weight": "700",
                    "font-size": "12.1459px",
                    "line-height": "123.84%",
                    
                })
                $(`.notification_main-${number}`).addClass('success-icon')
                $(`.wrapper-${number}`).addClass('success success-border')
                sound.play();
            } else if (event.data.type == 'info') {
                $(`.title-${number}`).html(event.data.title).css({
                    "font-weight": "700",
                    "color": "white",
                    "font-style": "normal",
                    "font-weight": "700",
                    "font-size": "12.1459px",
                    "line-height": "123.84%",
                    
                })
                $(`.notification_main-${number}`).addClass('info-icon')
                $(`.wrapper-${number}`).addClass('info info-border')
                sound.play();
            } else if (event.data.type == 'error') {
                $(`.title-${number}`).html(event.data.title).css({
                    "font-weight": "700",
                    "color": "white",
                    "font-style": "normal",
                    "font-weight": "700",
                    "font-size": "12.1459px",
                    "line-height": "123.84%",
                    
                })
                $(`.notification_main-${number}`).addClass('error-icon')
                $(`.wrapper-${number}`).addClass('error error-border')
                sound.play();
            } else if (event.data.type == 'warning') {
                $(`.title-${number}`).html(event.data.title).css({
                    "font-weight": "700",
                    "color": "white",
                    "font-style": "normal",
                    "font-weight": "700",
                    "font-size": "12.1459px",
                    "line-height": "123.84%",
                    
                })
                $(`.notification_main-${number}`).addClass('warning-icon')
                $(`.wrapper-${number}`).addClass('warning warning-border')
                sound.play();
            } else if (event.data.type == 'phonemessage') {
                $(`.title-${number}`).html(event.data.title).css({
                    "font-weight": "700",
                    "color": "white",
                    "font-style": "normal",
                    "font-weight": "700",
                    "font-size": "12.1459px",
                    "line-height": "123.84%",
                    
                })
                $(`.notification_main-${number}`).addClass('phonemessage-icon')
                $(`.wrapper-${number}`).addClass('phonemessage phonemessage-border')
                sound.play();
            } else if (event.data.type == 'neutral') {
                $(`.title-${number}`).html(event.data.title).css({
                    "font-weight": "700",
                    "color": "white",
                    "font-style": "normal",
                    "font-weight": "700",
                    "font-size": "12.1459px",
                    "line-height": "123.84%",
                    
                })
                $(`.notification_main-${number}`).addClass('neutral-icon')
                $(`.wrapper-${number}`).addClass('neutral neutral-border')
                sound.play();
            }
            anime({
                targets: `.wrapper-${number}`,
                translateX: -50,
                duration: 750,
                easing: 'spring(1, 70, 100, 10)',
            })
            setTimeout(function () {
                anime({
                    targets: `.wrapper-${number}`,
                    translateX: 500,
                    duration: 750,
                    easing: 'spring(1, 80, 100, 0)'
                })
                setTimeout(function () {
                    $(`.wrapper-${number}`).remove()
                }, 750)
            }, event.data.time)
        }
    })
})