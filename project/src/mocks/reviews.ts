import { Review } from '../types/review/review';

const reviews: Review[] = [
  {
    id: 1,
    user: {
      id: 4,
      name: 'Kate Muir',
    },
    rating: 8.9,
    comment: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the directors funniest and most exquisitely designed movies in years.',
    date: '2019-05-08T14:13:56.569Z',
  },
  {
    id: 2,
    user: {
      id: 12,
      name: 'Isaac',
    },
    rating: 2.6,
    comment: 'Poised to be an instant classic, almost everything about this film is phenomenal - the acting, the cinematography, the discography, etc.',
    date: '2021-10-06T15:08:29.951Z',
  },
  {
    id: 3,
    user: {
      id: 10,
      name: 'Kendall',
    },
    rating: 4.6,
    comment: 'This movie is just plain bad. There must be some big payola going round this awards season. Badly written, average acting at best, all the characters are unrelatable and inlikeable. 2 hours of my life wasted.',
    date: '2021-10-22T15:08:29.951Z',
  },
  {
    id: 4,
    user: {
      id: 199,
      name: 'Zak',
    },
    rating: 9.9,
    comment: 'I personally found this movie to be boring. Definitely one of the most boring movies Ive ever seen.',
    date: '2021-09-27T15:08:29.950Z',
  },
];

export { reviews };
