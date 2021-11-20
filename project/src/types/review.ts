type Review = {
  id: number;
  user: {
    id: number;
    name: string;
  },
  rating: number;
  comment: string;
  date: string,
}

type ReviewToServer = {
  rating: number;
  comment: string;
}

export type { Review, ReviewToServer };
