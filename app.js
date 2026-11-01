
const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Página inicial
app.get("/", (req, res) => res.type('html').send(html));

// Endpoint /req
app.get('/req', (req, res) => {
    console.log("Just got a request!");
    res.send('Yo!');
});

// 1. Meu nome
app.get('/meunome', (req, res) => {
    res.send("Meu nome é Fábio Duarte de Oliveira");
});

// 2. Tico
app.get('/tico', (req, res) => {
    res.send("teco");
});

// 3. Lista de Pokemons
app.get('/pokemons', (req, res) => {

    const pokemons = [
        { ordem: 1, nome: "Pikachu" },
        { ordem: 2, nome: "Caterpie" },
        { ordem: 3, nome: "Pidgeotto" },
        { ordem: 4, nome: "Bulbasaur" },
        { ordem: 5, nome: "Charmander" },
        { ordem: 6, nome: "Squirtle" },
        { ordem: 7, nome: "Krabby" },
        { ordem: 8, nome: "Primeape" },
        { ordem: 9, nome: "Muk" },
        { ordem: 10, nome: "Tauros" }
    ];

    res.json(pokemons);
});

// 4. Lista de séries
app.post('/series', (req, res) => {

    const series = [
        { nome: "Breaking Bad" },
        { nome: "Stranger Things" },
        { nome: "The Walking Dead" }
    ];

    res.json(series);
});

// 5. Endpoint para simular erro
app.get('/bug', (req, res) => {

    throw new Error("Erro simulado na aplicação!");

});

// 6. Consumir API pública
app.get('/api-publica', async (req, res) => {

    try {

        const resposta = await fetch(
            'https://jsonplaceholder.typicode.com/posts/1'
        );

        const dados = await resposta.json();

        res.json(dados);

    } catch (erro) {

        res.status(500).json({
            erro: "Não foi possível acessar a API externa"
        });

    }

});

// Iniciar servidor
app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});


// HTML original
const html = `
<!DOCTYPE html>
<html>
<head>
    <title>Hello from Render!</title>

    <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js"></script>

    <script>
        setTimeout(() => {
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 },
                disableForReducedMotion: true
            });
        }, 500);
    </script>

    <style>
        @import url("https://p.typekit.net/p.css?s=1&k=vnd5zic&ht=tk&f=39475.39476.39477.39478.39479.39480.39481.39482&a=18673890&app=typekit&e=css");

        @font-face {
            font-family: "neo-sans";
            src: url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff2");
            font-style: normal;
            font-weight: 700;
        }

        html {
            font-family: neo-sans;
            font-weight: 700;
            font-size: calc(62rem / 16);
        }

        body {
            background: white;
        }

        section {
            border-radius: 1em;
            padding: 1em;
            position: absolute;
            top: 50%;
            left: 50%;
            margin-right: -50%;
            transform: translate(-50%, -50%);
        }
    </style>
</head>

<body>
    <section>
        Hello Express API
    </section>
</body>
</html>
`;
