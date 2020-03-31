var fonts = [
    "Cute Font", "Gugi", "Nunito", "Sniglet", "Margerine", "Roboto", "Righteous", "Orbitron"
];

var c = document.getElementById("c");

var ctx = c.getContext("2d");

c.height = window.innerHeight;
c.width = window.innerWidth;

var chars = "アカガサザタダナハバパマヤラワイキギシジチニヒビピミリウクグスズツヌフブプムユルエケゲセゼテデネヘベペメレオコゴソゾトドノホボポヨロヲン";

chars = chars.split("");

var font_size = 20;

var cols = c.width / font_size;

var drops = [];

for (var x = 0; x < cols;x++) drops[x] = 1;

function draw() {
    ctx.fillStyle = "rgba(0,0,0,0.05)";
    ctx.fillRect(0, 0, c.width, c.height);

    ctx.fillStyle = "#0F0";
    ctx.font = font_size + "px Roboto Mono"; /*+ fonts[Math.floor(Math.random() * fonts.length)];*/

    for (var i = 0; i < drops.length; i++) {
        var text = chars[Math.floor(Math.random() * chars.length)];

        ctx.fillText(text, i * font_size, drops[i] * font_size);


        if (drops[i] * font_size > c.height && Math.random() > 0.975) drops[i] = 0;

        drops[i]++;
    }
}

window.addEventListener("resize", () -> {
    c.height = this.window.innerHeight;
    c.width = this.window.innerWidth;
});
