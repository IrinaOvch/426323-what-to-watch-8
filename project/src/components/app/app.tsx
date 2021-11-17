import {connect, ConnectedProps} from 'react-redux';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { AppRoute } from '../../const';
import MainPage from '../../pages/main/main';
import AuthScreen from '../../pages/sign-in/sign-in';
import PrivateRoute from '../private-route/private-route';
import MyList from '../../pages/my-list/my-list';
import NotFoundScreen from '../../pages/page-not-found/page-not-found';
import FilmPage from '../../pages/film-page/film-page';
import AddReview from '../../pages/add-review/add-review';
import Player from '../../pages/player/player';
import { State } from '../../types/state';
import LoadingScreen from '../loading-screen/loading-screen';
import { isCheckedAuth } from '../../utils/is-checked-auth';

const mapStateToProps = ({authorizationStatus, isDataLoaded, films}: State) => ({
  authorizationStatus,
  isDataLoaded,
  films,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux;

function App(props: ConnectedComponentProps): JSX.Element {
  const {authorizationStatus, isDataLoaded, films} = props;

  if (isCheckedAuth(authorizationStatus) || !isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Main}>
          <MainPage/>
        </Route>
        <Route exact path={AppRoute.SignIn}>
          <AuthScreen/>
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.MyList}
          render={() => <MyList films={films} />}
        />
        <Route exact path={AppRoute.Film}>
          <FilmPage films={films}/>
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.AddReview}
          render={() => <AddReview />}
        />
        <Route exact path={AppRoute.Player}>
          <Player/>
        </Route>
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>

  );
}

export { App };
export default connector(App);
