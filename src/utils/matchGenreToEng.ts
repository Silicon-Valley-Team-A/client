export const matchGenreToEng = (genre: string) => {
  switch (genre) {
    case '클래식':
      return 'classical';
    case '재즈':
      return 'jazz';
    case '팝':
      return 'pop';
    case 'R&B':
      return 'R&B';
    case '힙합':
      return 'hip-hop';
    case '컨트리 음악':
      return 'country';
    case '포크 음악':
      return 'folk';
    case 'K-POP':
      return 'k-pop';
    case '댄스':
      return 'dance';
    case 'EDM':
      return 'edm';
    case '어쿠스틱':
      return 'acoustic';
    case '인디 음악':
      return 'indie';
    case '펑크':
      return 'funk';
    case '록':
      return 'rock';
    case '디스코':
      return 'disco';
    case '레게':
      return 'reggae';
    default:
      return '';
  }
};
