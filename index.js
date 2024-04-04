

let participantes = [
  {
    nome: "Italo Cordeiro",
    email: "italo@gmail.com",
    dataInscricao: new Date(2024, 2, 22, 19, 20),
    dataCheckin: new Date(2024, 2, 25, 22, 00),
  },
  {
    nome: "Diego Lima",
    email: "Diego@gmail.com",
    dataInscricao: new Date(2024, 3, 22, 17, 24),
    dataCheckin: null
  },
  {
    nome: "Fernanda Silva",
    email: "fernanda@gmail.com",
    dataInscricao: new Date(2024, 0, 15, 14, 10),
    dataCheckin: new Date(2024, 0, 20, 18, 30),
  },
  {
    nome: "José Santos",
    email: "jose@gmail.com",
    dataInscricao: new Date(2024, 1, 8, 10, 45),
    dataCheckin: new Date(2024, 1, 12, 16, 15),
  },
  {
    nome: "Ana Oliveira",
    email: "ana@gmail.com",
    dataInscricao: new Date(2024, 3, 3, 8, 55),
    dataCheckin: new Date(2024, 3, 8, 12, 20),
  },
  {
    nome: "Pedro Costa",
    email: "pedro@gmail.com",
    dataInscricao: new Date(2024, 2, 9, 21, 30),
    dataCheckin: null
  },
  {
    nome: "Mariana Santos",
    email: "mariana@gmail.com",
    dataInscricao: new Date(2024, 0, 4, 16, 40),
    dataCheckin: new Date(2024, 0, 8, 9, 10),
  },
  {
    nome: "Lucas Oliveira",
    email: "lucas@gmail.com",
    dataInscricao: new Date(2024, 3, 1, 11, 20),
    dataCheckin: null
  },
  {
    nome: "Carla Mendes",
    email: "carla@gmail.com",
    dataInscricao: new Date(2024, 1, 20, 18, 50),
    dataCheckin: new Date(2024, 1, 24, 22, 10),
  },
  {
    nome: "Rafael Souza",
    email: "rafael@gmail.com",
    dataInscricao: new Date(2024, 2, 17, 9, 15),
    dataCheckin: null
  }
];


const criarNovoParticipante = (participante) => {
  const dataInscricao = dayjs(Date.now()).to(participante.dataInscricao)

  let dataCheckin = dayjs(Date.now()).to(participante.dataCheckin)

  if (participante.dataCheckin == null) {
    dataCheckin = `
     <button
     data-email="${participante.email}"
     onclick="fazerCheckIn(event)"
     >
      Confirmar Check-In
     </button>
     `


  }

  return `
  <tr>
    <td>
      <strong>${participante.nome}</strong>
      <br>
        <small>${participante.email}</small>
    </td>
    <td>${dataInscricao}</td>
    <td>${dataCheckin}</td>
  </tr>
  `

}

const atualizarLista = (participantes) => {

  let output = ""
  //estrutura de repetição - loop
  for (let participante of participantes) {
    output = output + criarNovoParticipante(participante)
    //faça alguma coisa
  }

  //Substituir informação do HTML
  document.querySelector("tbody")
    .innerHTML = output
}

atualizarLista(participantes)

const adicionarParticipante = (event) => {
  event.preventDefault()

  const dadosDoFormulario = new FormData(event.target)

  const participante = {
    nome: dadosDoFormulario.get("nome"),
    email: dadosDoFormulario.get("email"),
    dataInscricao: new Date(),
    dataCheckin: null
  }

  //verificar se o participante existe
  const participanteExiste = participantes.find((p) =>{
    return p.email == participante.email
  }
  )
  
  if(participanteExiste){
    alert("Email já Cadastrado")
    return
  }

  participantes = [participante, ...participantes]
  atualizarLista(participantes)

  event.target.querySelector('[name="nome"]').value = ""
  event.target.querySelector('[name="email"]').value = ""
}

const fazerCheckIn = (event) => {
  //confirmar se realmente quer fazer o checkin
  const mensagemConfirmacao = "Tem certeza que deseja fazer o Check-In?"
  if (confirm(mensagemConfirmacao) == false) {
    return
  }

  //encontrar o participante dentro da lista
  const participante = participantes.find((p) => {
    return p.email == event.target.dataset.email
  })
  //atualizar o checkin do participante
  participante.dataCheckin = new Date()
  //atualizar a lista de participante
  atualizarLista(participantes)

}