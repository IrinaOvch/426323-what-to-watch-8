import { useSelector } from 'react-redux';
import { Switch, Route, Router as BrowserRouter } from 'react-router-dom';
import { AppRoute } from '../../const';
import MainPage from '../../pages/main/main';
import SignInScreen from '../../pages/sign-in-screen/sign-in-screen';
import PrivateRoute from '../private-route/private-route';
import MyList from '../../pages/my-list/my-list';
import NotFoundScreen from '../../pages/page-not-found/page-not-found';
import FilmPage from '../../pages/film-page/film-page';
import AddReview from '../../pages/add-review/add-review';
import Player from '../../pages/player/player';
import LoadingScreen from '../loading-screen/loading-screen';
import { isCheckedAuth } from '../../utils/is-checked-auth';
import browserHistory from '../../browse-history';
import { getAuthorizationStatus } from '../../store/user/selectors';

function App(): JSX.Element {
  const authorizationStatus = useSelector(getAuthorizationStatus);

  if (isCheckedAuth(authorizationStatus)) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.Main}>
          <MainPage/>
        </Route>
        <Route exact path={AppRoute.SignIn}>
          <SignInScreen/>
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.MyList}
          render={() => <MyList />}
        />
        <Route exact path={AppRoute.Film}>
          <FilmPage />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.AddReview}
          render={() => <AddReview />}
        />
        <Route exact path={AppRoute.Player}>
          <Player/>
        </Route>
        <Route exact path={AppRoute.NotFound}>
          <NotFoundScreen />
        </Route>
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
