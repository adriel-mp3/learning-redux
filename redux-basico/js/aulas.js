import { produce } from 'immer'

const COMPLETAR_AULA = 'aulas/COMPLETAR_AULA';
const COMPLETAR_CURSO = 'aulas/COMPLETAR_CURSO';
const RESETAR_CURSO = 'aulas/RESETAR_CURSO';

export function completarAula(id) {
  return { type: COMPLETAR_AULA, id }
}

export function completarCurso() {
  return { type: COMPLETAR_CURSO }
}

export function resetarCurso() {
  return { type: RESETAR_CURSO }
}

const initialState = [
  {
    id: 1,
    nome: 'Design',
    completa: true,
  },
  {
    id: 2,
    nome: 'HTML',
    completa: false,
  },
  {
    id: 3,
    nome: 'CSS',
    completa: false,
  },
  {
    id: 4,
    nome: 'JavaScript',
    completa: false,
  },
];

const aulasReducer = produce((state, action) => {
  switch (action.type) {
    case COMPLETAR_AULA:
      const index = state.findIndex((aula) => aula.id === action.id)
      if (!isNaN(index) && state[index]) state[index].id = true
      break;
    case COMPLETAR_CURSO:
      state.forEach((aula) => aula.completa = true)
      break;
    case RESETAR_CURSO:
      state.forEach((aula) => aula.completa = false)
      break;
  }
}, initialState)

export default aulasReducer
