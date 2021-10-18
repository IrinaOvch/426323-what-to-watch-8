type FilmPreview = {
  id: number;
  title: string;
  previewImage: string;
}

type Film = FilmPreview & {
  posterImage: string;
  backgroundImage: string;
  backgroundColor: string;
  description: string;
  rating: number;
  scoresCount: number;
  director: string;
  starring: string[];
  runTime: number;
  genre: string;
  releaseYear: number;
  videoLink: string;
  previewVideoLink: string;
  isFavourite: boolean
}

export type { Film, FilmPreview };
