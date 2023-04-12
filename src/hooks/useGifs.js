import { useContext, useState, useEffect } from "react";
import getGifs from "../services/getGifs";
import GifContext from "../context/GifContext";

const INITIAL_PAGE = 0;

export default function useGifs({ keyword, rating } = { keyword: null }) {
  const { gifs, setGifs } = useContext(GifContext);
  const [page, setPage] = useState(INITIAL_PAGE);
  const [loading, setLoading] = useState(false);
  const [loadingNextPage, setLoadingNextPage] = useState(false);

  // Recuperamos la keyword del localstorage
  const keywordToUse = keyword || localStorage.getItem("lastKeyword");

  useEffect(() => {
    setLoading(true);

    getGifs({ keyword: keywordToUse, rating }).then((gifs) => {
      setGifs(gifs);
      setLoading(false);
      // Guardamos la keyword al localstorage
      localStorage.setItem("lastKeyword", keywordToUse);
    });
  }, [keyword, keywordToUse, rating, setGifs]);

   // Para la paginación del infinity scroll
  useEffect(() => {
    if (page === INITIAL_PAGE) return;

    setLoadingNextPage(true);

    getGifs({ keyword: keywordToUse, page, rating }).then((nextGifs) => {
      setGifs((prevGifs) => prevGifs.concat(nextGifs));
      setLoadingNextPage(false);
    });
  }, [page, keywordToUse, rating, setGifs]);

  return { loading, loadingNextPage, gifs, setPage };
}
