import MainPage from '../main/main';

type AppProps = {
  promo: {
    title: string;
    genre: string;
    releaseYear: number;
  }
  films: {
    title: string;
    src: string;
    id: number;
  }[]
}

function App({promo, films}: AppProps): JSX.Element {
  return (
    <MainPage
      promo = {promo}
      films = {films}
    />
  );
}

export default App;
