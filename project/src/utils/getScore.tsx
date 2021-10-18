function getScore(score: number): string {
  if (score >= 0 && score < 3) {
    return 'Bad';
  }
  if (score >= 3 && score < 5) {
    return 'Normal';
  }
  if (score >= 5 && score < 8) {
    return 'Good';
  }
  if (score >= 8 && score < 10) {
    return 'Very good';
  }
  return 'Awesome';
}

export { getScore };
