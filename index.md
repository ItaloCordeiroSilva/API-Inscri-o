```js

//variaveis
const mensagem = "oi, tudo bem?"
//tipos de dados
  //number
  //string
 //Funcao
 alert() 

 //objeto javaScript
const participante = {
  nome: "Italo Cordeiro",
  email: "italo@gmail.com",
  dataInscricao: new Date(2024, 2, 22, 19, 20),
  dataCheckin: new Date(2024, 2, 25, 22, 00),
}

//array
let participantes = [
  {
    nome: "Italo Cordeiro",
    email: "italo@gmail.com",
    dataInscricao: new Date(2024, 2, 22, 19, 20),
    dataCheckin: new Date(2024, 2, 25, 22, 00),
  },
]

 //estrutura de repetição - loop
for(let participante of participantes){
  output = output + criarNovoParticipante(participante)
  //faça alguma coisa
  // enquanto tiver pessoas nessa lista
}