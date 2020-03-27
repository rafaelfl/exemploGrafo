criaGrafo = (numv) => {
    g = {};
    
    g.numv = numv;
    g.m = [];
    
    for (var i = 0; i <= g.numv; i++) {
      linha = Array(g.numv+1).fill(0);
      g.m.push(linha);
    }
    
    return g;
};

criaAresta = (g, orig, dest) => {
    if (orig <= g.numv && dest <= g.numv) {
        g.m[orig][dest] = 1
    }
}

desenhaGrafo = (g) => {
    let c = document.getElementById("meuCanvas");
    c.width = window.innerWidth;
    c.height = window.innerHeight;

    let ctx = c.getContext("2d");

    let posicoes = [];
    posicoes.push({posx:0,posy:0});

    const raioNo = 50;

    for (let i = 1; i <= g.numv; i++) {
        let x = Math.floor(Math.random() * (c.width-2*raioNo) ) + raioNo;
        let y = Math.floor(Math.random() * (c.height-2*raioNo) ) + raioNo;

        ctx.fillStyle = "red";

        ctx.beginPath();
        ctx.arc(x, y, raioNo, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fill();

        ctx.fillStyle = "black";
        ctx.font = "30px Arial";
        ctx.fillText(i.toString(), x, y);

        posicoes.push({posx:x, posy:y});
    }

    for (i = 1; i <= g.numv; i++) {
        for (j = 1; j <= g.numv; j++) {
            if (g.m[i][j] > 0) {
                ctx.beginPath();
                ctx.moveTo(posicoes[i].posx, posicoes[i].posy);
                ctx.lineTo(posicoes[j].posx, posicoes[j].posy);
                ctx.stroke();
            }
        }
    }
}
  
meuGrafo = criaGrafo(4);

console.log("==> " + JSON.stringify(meuGrafo));

criaAresta(meuGrafo, 1, 2);
criaAresta(meuGrafo, 2, 3);
criaAresta(meuGrafo, 1, 3);
criaAresta(meuGrafo, 3, 4);

console.log("==> " + JSON.stringify(meuGrafo));

desenhaGrafo(meuGrafo);