import { combineReducers } from "redux";

import alunoReducer from "./aluno";
import aulasReducer from "./aulas";

const rootReducer = combineReducers({
  aluno: alunoReducer,
  aulas: aulasReducer
})

export default rootReducer
