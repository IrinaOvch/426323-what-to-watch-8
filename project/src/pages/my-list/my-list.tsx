
import { useSelector } from 'react-redux';
import FilmsList from '../../components/films-list/films-list';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import LoadingScreen from '../../components/loading-screen/loading-screen';
import { getMyList, getMyListErrorStatus, getMyListStatus } from '../../store/films/selectors';

function MyList(): JSX.Element {
  const myList = useSelector(getMyList);
  const isMyListError = useSelector(getMyListErrorStatus);
  const isMyListLoading = useSelector(getMyListStatus);

  if (isMyListLoading) {
    return <LoadingScreen/>;
  }

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
          <p style={{textAlign:'center'}}>An error occured while loading your list, please try reloading the page.</p>
        }
      </section>

      <Footer />
    </div>
  );
}

export default MyList;
