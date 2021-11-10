import { Film, FilmFromServerType } from '../types/film';

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

  return adaptedFilm;
};

const adaptFilmsToClient = (films: FilmFromServerType[]): Film[] => films.map((film) => adaptFilmToClient(film));


export { adaptFilmsToClient, adaptFilmToClient };
