const perguntas = [
  {
    pergunta:
      "Qual método é usado para arredondar um número para o inteiro mais próximo em JavaScript?",
    respostas: ["Math.round()", "Math.floor()", "Math.ceil()"],
    correta: 0,
  },
  {
    pergunta:
      "Como você declara uma variável em JavaScript que não deve mudar depois de definida?",
    respostas: ["var", "let", "const"],
    correta: 2,
  },
  {
    pergunta: "Qual função é usada para converter uma string em um inteiro?",
    respostas: ["parseInt()", "Number()", "parseFloat()"],
    correta: 0,
  },
  {
    pergunta: "Qual operador é usado para comparar valor e tipo?",
    respostas: ["==", "===", "!="],
    correta: 1,
  },
  {
    pergunta: "Qual é a forma correta de criar uma função em JavaScript?",
    respostas: [
      "function minhaFuncao()",
      "var minhaFuncao = function()",
      "function: minhaFuncao()",
    ],
    correta: 0,
  },
  {
    pergunta:
      "Como você encontra o número com o valor mais alto de dois números em JavaScript?",
    respostas: ["Math.ceil(x, y)", "Math.high(x, y)", "Math.max(x, y)"],
    correta: 2,
  },
  {
    pergunta:
      "Como você adiciona um elemento ao final de um array em JavaScript?",
    respostas: ["push()", "pop()", "shift()"],
    correta: 0,
  },
  {
    pergunta: "Qual método é usado para selecionar um elemento pelo seu ID?",
    respostas: ["querySelector()", "getElementById()", "findElementById()"],
    correta: 1,
  },
  {
    pergunta:
      "Como você declara um loop que começa em 0 e incrementa de 1 enquanto for menor que 10?",
    respostas: [
      "for(i = 0; i < 10; i++)",
      "while(i < 10; i++)",
      "loop(i = 0; i < 10; i++)",
    ],
    correta: 0,
  },
  {
    pergunta:
      "Qual objeto em JavaScript pode ser usado para trabalhar com datas?",
    respostas: ["Calendar()", "Time()", "Date()"],
    correta: 2,
  },
];

const quiz = document.querySelector("#quiz");
const template = document.querySelector("template");

const corretas = new Set();
const totalDePerguntas = perguntas.length;
const mostrarTotal = document.querySelector("#acertos span");
mostrarTotal.textContent = corretas.size + " de " + totalDePerguntas;

for (const item of perguntas) {
  const quizItem = template.content.cloneNode(true);
  quizItem.querySelector("h3").textContent = item.pergunta;

  for (let resposta of item.respostas) {
    const dt = quizItem.querySelector("dl dt").cloneNode(true);
    dt.querySelector("span").textContent = resposta;
    dt.querySelector("input").setAttribute(
      "name",
      "pergunta-" + perguntas.indexOf(item)
    );
    dt.querySelector("input").value = item.respostas.indexOf(resposta);

    dt.querySelector("input").onchange = (event) => {
      const estaCorreta = event.target.value == item.correta;
      corretas.delete(item);
      if (estaCorreta) {
        corretas.add(item);
      }

      mostrarTotal.textContent = corretas.size + " de " + totalDePerguntas;
    };

    quizItem.querySelector("dl").appendChild(dt);
  }

  quizItem.querySelector("dl dt").remove();

  //coloca a pergunta na tela
  quiz.appendChild(quizItem);
}
