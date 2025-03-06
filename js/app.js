/* https://greensock.com/gsap */
TweenLite.set("#petals", { perspective:600 })
TweenLite.set("img", { xPercent:"-50%", yPercent:"-50%" })

var total = 50;
var warp = document.getElementById("petals"),
w = window.innerWidth,
h = window.innerHeight;

var images = ['img/petal.png', 'img/petal2.png'];
for (i = 0; i < total; i++) {
    var Div = document.createElement('div');
    var randomImage = images[Math.floor(Math.random() * images.length)];
    TweenLite.set(Div, {
        attr: { class:'dot' },
        x: R(0, w),
        y: R(-200, -150),
        z: R(-200, 200),
        backgroundImage: 'url(' + randomImage + ')',
        width: R(20, 50) + 'px',
        height: R(20, 50) + 'px'
    });
    warp.appendChild(Div);
    animm(Div);
}


function animm(elm) {
    TweenMax.to(elm,R(6,15), { y:h+100, ease:Linear.easeNone, repeat:-1, delay:-15 });
    TweenMax.to(elm,R(4,8), { x:'+=100', rotationZ:R(0,180), repeat:-1, yoyo:true, ease:Sine.easeInOut });
    TweenMax.to(elm,R(2,8), { rotationX:R(0,360), rotationY:R(0,360), repeat:-1, yoyo:true, ease:Sine.easeInOut, delay:-5 });
};

function R(min,max) { return min+Math.random() * (max-min) };


/* https://mattboldt.com/typed.js/ */
var typed = new Typed('#text', {
    strings: ['Це свято, яке зародилося завдяки подіям ще 19 століття. Це час, коли жінки своєю рішучістю та стійкістю боролися за свої права в суспільстві. Зараз, цього дня вшановують всіх близьких нам людей жіночої статі. Тому я бажаю вам продовжувати бути такою ж стійкою та красивою дівчиною. Бажаю що б у вашому житті рішучість допомагала вам побороти всі негаразди та досягти своїх мрій. Зі святом, Настуне :)'],
    startDelay: 3000,
    typeSpeed: 50,
    backSpeed: 0,
    fadeOut: true,
    loop: false,
    showCursor: false,
    onComplete: function() {
        var author = document.getElementById("author");
        author.style.opacity = 1;
    }
});
