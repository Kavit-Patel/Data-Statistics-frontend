export const ellipsify = (text: string) =>
  text.length > 10 ? `${text.substring(0, 10)}...` : text;
