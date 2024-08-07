caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual estilo de livro você prefere?",
        alternativas: [
            {
                texto: "Livros de ficção que permitem escapar da realidade!",
                afirmacao: "No início ficou com medo do que essa tecnologia pode fazer. "
            },
            {
                texto: "Livros históricos que apresentam grandes valores para a sociedade atual!",
                afirmacao: "Quis saber como usar IA no seu dia a dia."
            }
        ]
    },
    {
        enunciado: "Boa escolha! se pudesse ser um vilão qual você seria?",
        alternativas: [
            {
                texto: "Coringa apesar de mentalmente desequilibrado, o vilão apresenta inteligência e estrategismo a nível genial.",
                afirmacao: "Conseguiu utilizar a IA para buscar informações úteis."
            },
            {
                texto: "Thanos pois possui habilidades comuns aos Eternos, ampliado em maior grau através de uma combinação de sua herança.",
                afirmacao: "Sentiu mais facilidade em utilizar seus próprios recursos para escrever seu trabalho."
            }
        ]
    },
    {
        enunciado: " Uau muito bem! você se considera uma pessoa competitiva ?",
        alternativas: [
            {
                texto: "Sim, acredito que isso pode me beneficiar futuramente.",
                afirmacao: "Vem impulsionando a inovação na área de IA e luta para abrir novos caminhos profissionais com IA."
            },
            {
                texto: "Não, acredito que isso não é bom.",
                afirmacao: "Sua preocupação com as pessoas motivou a criar um grupo de estudos efendem a importância de proteger os trabalhadores.ntre trabalhadores para discutir meios de utilização de IA de forma ética."
            }
        ]
    },
    {
        enunciado: "Isso pode ser bom até certo ponto! se você fosse um personagem você ia preferir ser enganado ou enganar?",
        alternativas: [
            {
                texto: "Ser enganado,pois pelo menos iria ser uma boa pessoa!",
                afirmacao: "Notou também que muitas pessoas não sabem ainda utilizar as ferramentas tradicionais e decidiu compartilhar seus conhecimentos de design utilizando ferramentas de pintura digital para iniciantes."
            },
            {
                texto: "Enganar,hahahaha! ser o vilão. ",
                afirmacao: "Acelerou o processo de criação de trabalhos utilizando geradores de imagem e agora consegue ensinar pessoas que sentem dificuldades em desenhar manualmente como utilizar também!"
            }
        ]
    },
    {
        enunciado: "Muito bem!isso mostra que você iria ser uma boa pessoa, mas e quanto aos relacionamentos interpessoais? ",
        alternativas: [
            {
                texto: "Sem amigos, sem futuros relacionamentos somente a superação.",
                afirmacao: "Infelizmente passou a utilizar a IA para fazer todas suas tarefas e agora se sente dependente da IA para tudo."
            },
            {
                texto: "Superação e futuras amizades e relacionamentos.",
                afirmacao: "Percebeu que toda IA reproduz orientações baseadas na empresa que programou e muito do que o chat escrevia não refletia o que pensava e por isso sabe que os textos gerados pela IA devem servir como auxílio e não resultado final. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

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

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + "Isso tudo mostra o quanto você tem a personalidade forte e um campo da literatura voltado aos livros de ficção.";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    atual++;
    caixaPerguntas.textContent = "Parabéns!Isso mostra o quanto você tem a personalidade forte e um campo literario amplo, indicações- ( aprenda a gostar de todos os estilos) Anne frank, guerra e paz, george orweel, orgulho e preconceito, noite na taverna e as da literatura brasileira.";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
