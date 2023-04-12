import { useReducer } from 'react'



export default function useForm ({initialKeyword, initialRating}) {
  const [state, dispatch] = useReducer(reducer, {
    keyword: decodeURI(initialKeyword),
    rating: initialRating,
  });

  const { keyword, rating } = state;

  return{
    keyword,
    rating,
    updateKeyword: keyword =>  dispatch({ type: "update_keyword", payload: keyword }),
    updateRating: rating =>  dispatch({ type: "update_rating", payload: rating })
  }
 
}

// estamos despachando acciones, Vamosa darle toda la información para
// que sepa qué estado tiene que actualizar y cómo debe hacerlo. Normalmente es param, ya
// que en el dispatch se suelee enviar el param. Pero en este caso enviamos un objeto con el type de
// accion y un payload/un param
const reducer = (state, action) => {
  if (action.type === "update_keyword") {
    return { ...state, keyword: action.payload };
  }
  if (action.type === "update_rating") {
    return { ...state, rating: action.payload };
  }

  return state;
};