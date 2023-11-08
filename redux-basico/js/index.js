// Usando o Redux (pode usar Immer ou Não).
// Crie uma store contendo os estados iniciais abaixo
// Crie as seguintes ações:
// aluno/INCREMENTAR_TEMPO, adiciona 1 dia de acesso
// aluno/REDUZIR_TEMPO, reduz 1 dia de acesso
// aluno/MODIFICAR_EMAIL(email), modifica o email do usuário
// aulas/COMPLETAR_AULA(id), completa a aula com base no ID passado
// aulas/COMPLETAR_CURSO, completa todas as aulas
// aulas/RESETAR_CURSO, reseta todas as aulas completas
// Crie constantes e action creators para as ações.
// Crie um reducer para aluno e um para aulas.
// Renderize na tela o nome, email, tempo restante e o total de aulas completas
// Configure a DevTools
import store from "./store.js";

function calcularAulasCompletas(aulas = []) {
  aulas.filter((aula) => aula.completa)
  return aulas.length
}

function render() {
  const { aulas, aluno } = store.getState()
  const nome = document.getElementById('nome');
  const email = document.getElementById('email');
  const dias = document.getElementById('dias')

  dias.innerText = `Dias restantes:${aluno.diasRestantes}`;
  nome.innerText = `Nome: ${aluno.nome}`
  email.innerText = `Email: ${aluno.email}`
  completas.innerText = `Completas: ${calcularAulasCompletas(aulas)}`
}


store.subscribe(render)
render()
