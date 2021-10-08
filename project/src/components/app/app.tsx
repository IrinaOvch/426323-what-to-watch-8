import MainPage from '../../pages/main/main';
import { Film } from '../../types/film/film';

type AppProps = {
  promo: {
    title: string;
    genre: string;
    releaseYear: number;
  },
  films: Film[]
}

function App({promo, films}: AppProps): JSX.Element {
  return (
    <MainPage
      promo={promo}
      films={films}
    />
  );
}

export default App;
