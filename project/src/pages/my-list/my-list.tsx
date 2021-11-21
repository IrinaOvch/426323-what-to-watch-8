
import { useSelector } from 'react-redux';
import FilmsList from '../../components/films-list/films-list';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { getMyList, getMyListErrorStatus } from '../../store/films-data/selectors';

function MyList(): JSX.Element {
  const myList = useSelector(getMyList);
  const isMyListError = useSelector(getMyListErrorStatus);

  return (
    <div className="user-page">
      <Header className="user-page__head" isUserBlock>
        <h1 className="page-title user-page__title">My list</h1>
      </Header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <FilmsList films={myList}/>
        {
          (myList.length === 0 && !isMyListError) &&
          <p style={{textAlign:'center'}}>Your list is empty, add your first film by clicking My list button.</p>
        }
        {
          isMyListError &&
          <p style={{textAlign:'center'}}>An error ocured while loading your list, please try reloading the page.</p>
        }
      </section>

      <Footer />
    </div>
  );
}

export default MyList;
