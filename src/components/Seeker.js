// 33:32. Estabamos comenzando a aplicar el useReducer

import { useLocation } from "wouter";
import { memo } from "react";
import "./Seeker.css";
import useForm from '../hooks/useForm'



const RATINGS = ["g", "pg", "pg-13", "r"];

function Seeker({ initialKeyword = "", initialRating = RATINGS[0] }) {
  const [path, pushLocation] = useLocation();
  const { keyword, rating, updateKeyword, updateRating } = useForm({initialKeyword, initialRating})

  const handleSubmit = (evt) => {
    evt.preventDefault();
    // Esto es un custom hook creado por otros -->
    pushLocation("/search/" + keyword + "/" + rating);
  };

  const handleChange = (evt) => {
    updateKeyword(evt.target.value);
  };

  const handleChangeRating = (evt) => {
    updateRating(evt.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="c-search">
      <button className="c-search-button">Buscar</button>
      <input
        className="c-search-input"
        placeholder="Busca tu gif aquí"
        onChange={handleChange}
        type="text"
        value={keyword}
        required
      ></input>
      <select
        className="c-search-list"
        onChange={handleChangeRating}
        defaultValue={rating}
        select={rating}
      >
        <option disabled>Clasificación</option>
        {RATINGS.map((rat) => {
          return (
            <option key={rat} value={rat}>
              {rat}
            </option>
          );
        })}
      </select>
    </form>
  );
}

// Lo habiamos exportado así para que el componente no se re-renderice cuando
// se modifique su componente padre
export default memo(Seeker);
