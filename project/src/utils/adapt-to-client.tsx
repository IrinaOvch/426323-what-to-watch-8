import { Film, FilmFromServerType } from '../types/film';
import { UserInfo, UserInfoFromServer } from '../types/user-info';

const adaptFilmToClient = (film: FilmFromServerType): Film => {
  const adaptedFilm = Object.assign (
    {},
    film,
    {
      'title': film['name'],
      'posterImage': film['poster_image'],
      'previewImage': film['preview_image'],
      'backgroundImage': film['background_image'],
      'backgroundColor': film['background_color'],
      'scoresCount': film['scores_count'],
      'runTime': film['run_time'],
      'releaseYear': film['released'],
      'videoLink': film['video_link'],
      'previewVideoLink': film['preview_video_link'],
      'isFavourite': film['is_favorite'],
    },
  );

  delete adaptedFilm['name'];
  delete adaptedFilm['poster_image'];
  delete adaptedFilm['preview_image'];
  delete adaptedFilm['background_image'];
  delete adaptedFilm['background_color'];
  delete adaptedFilm['scores_count'];
  delete adaptedFilm['run_time'];
  delete adaptedFilm['released'];
  delete adaptedFilm['video_link'];
  delete adaptedFilm['preview_video_link'];
  delete adaptedFilm['is_favorite'];

  return adaptedFilm;
};

const adaptFilmsToClient = (films: FilmFromServerType[]): Film[] => films.map((film) => adaptFilmToClient(film));

const adaptUserToClient = (userInfo: UserInfoFromServer): UserInfo => {
  const adaptedUserInfo = Object.assign (
    {},
    userInfo,
    {
      'avatarUrl': userInfo['avatar_url'],
    },
  );

  delete adaptedUserInfo['avatar_url'];

  return adaptedUserInfo;
};


export { adaptFilmsToClient, adaptFilmToClient, adaptUserToClient };
