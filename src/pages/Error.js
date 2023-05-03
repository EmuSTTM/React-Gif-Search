
import SearchForm from "../components/Seeker";
import { Helmet } from "react-helmet";
import Button from '../components/Button'


const gifsErrors = ['d2jjuAZzDSVLZ5kI', 'Bp3dFfoqpCKFyXuSzP', 'hv5AEBpH3ZyNoRnABG', 'hLwSzlKN8Fi6I'];



export default function ErrorPage() {
  const randomImage = () => {
    return `https://media.giphy.com/media/${gifsErrors[Math.floor(Math.random() * gifsErrors.length) + 1 ]}/giphy.gif`
  }

  return (
    <>
      <Helmet>
        <title>Error 404 | Giffy</title>
      </Helmet>
      <header className="o-header">
        <SearchForm />
      </header>
      <div className="App-wrapper">
        <div className="error-page_container" >
            <span >404</span>
            <span >Sometimes gettings lost isn't that bad</span>
            <img src={randomImage()} alt="alt-page-404"/>
            <Button href='/'>Go back home</Button>
        </div>
      </div>
    </>
  );
}
