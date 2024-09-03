const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const botaoIniciar = document.getElementById("botaoIniciar");

const perguntas = [
    {
        enunciado: "Qual estilo de livro você prefere?",
        alternativas: [
            {
                texto: "Livros de ficção que permitem escapar da realidade!",
                afirmacao: "Você adora histórias envolventes que transcendem o cotidiano, permitindo sonhar e imaginar novos mundos. "
            },
            {
                texto: "Livros históricos que apresentam grandes valores para a sociedade atual!",
                afirmacao: "Você valoriza a leitura que resgata o passado, promovendo reflexão sobre o presente e inspirando mudanças para o futuro."
            }
        ]
    },
    {
        enunciado: "Boa escolha! Se pudesse ser um vilão, qual você seria?",
        alternativas: [
            {
                texto: "Coringa, apesar de mentalmente desequilibrado, o vilão apresenta inteligência e estrategismo a nível genial.",
                afirmacao: "Você aprecia personagens complexos e contraditórios, que desafiam o conceito tradicional de herói e vilão."
            },
            {
                texto: "Thanos, pois possui habilidades extraordinárias e uma visão de mundo impactante.",
                afirmacao: "Você gosta de tramas grandiosas e personagens com motivações profundas, que levantam questões filosóficas sobre poder e moralidade."
            }
        ]
    },
    {
        enunciado: "Uau, muito bem! Você se considera uma pessoa competitiva?",
        alternativas: [
            {
                texto: "Sim, acredito que isso pode me beneficiar futuramente.",
                afirmacao: "A competitividade é uma força que te leva a buscar sempre mais, seja no desenvolvimento pessoal ou na literatura, buscando histórias que desafiem seus pensamentos."
            },
            {
                texto: "Não, acredito que isso não é bom.",
                afirmacao: "Você prefere um ritmo mais colaborativo e tranquilo, buscando na literatura histórias que promovam empatia e compreensão mútua."
            }
        ]
    },
    {
        enunciado: "Isso pode ser bom até certo ponto! Se você fosse um personagem, preferiria ser enganado ou enganar?",
        alternativas: [
            {
                texto: "Ser enganado, pois pelo menos seria uma boa pessoa!",
                afirmacao: "Você acredita na bondade inerente dos personagens e prefere narrativas onde os protagonistas aprendem com suas falhas e evoluem."
            },
            {
                texto: "Enganar, hahahaha! Ser o vilão.",
                afirmacao: "Você gosta de histórias com personagens sombrios e cheios de nuances, que mostram que nem tudo é preto no branco."
            }
        ]
    },
    {
        enunciado: "Muito bem! Isso mostra que você seria uma boa pessoa, mas e quanto aos relacionamentos interpessoais?",
        alternativas: [
            {
                texto: "Sem amigos, sem futuros relacionamentos, somente a superação.",
                afirmacao: "Você admira personagens solitários que se dedicam exclusivamente aos seus ideais, mesmo que isso signifique abrir mão de laços pessoais, como acontece em clássicos da literatura onde o protagonista enfrenta suas batalhas internas sozinho."
            },
            {
                texto: "Superação e futuras amizades e relacionamentos.",
                afirmacao: "Você prefere histórias onde os laços de amizade e amor são fundamentais para o crescimento do personagem, como ocorre em narrativas que ressaltam a importância das relações humanas para enfrentar desafios."
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

// Função para mostrar a pergunta
function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

// Função para mostrar as alternativas
function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

// Função ao selecionar uma resposta
function respostaSelecionada(opcaoSelecionada) {
    historiaFinal += opcaoSelecionada.afirmacao + " ";
    atual++;
    mostraPergunta();
}

// Função para mostrar o resultado final
function mostraResultado() {
    caixaPerguntas.textContent = "Parabéns! Isso mostra o quanto você tem uma personalidade forte e um gosto literário diversificado.";
    textoResultado.textContent = historiaFinal + " Você aprecia livros que provocam reflexões profundas sobre a vida, a humanidade e as emoções que nos conectam.";
    caixaAlternativas.textContent = "";
}

// Evento de clique no botão "Iniciar"
botaoIniciar.addEventListener("click", () => {
    botaoIniciar.style.display = "none"; // Esconde o botão após iniciar
    mostraPergunta();
});
