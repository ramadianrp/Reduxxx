import bcryptjs from 'bcryptjs';

export const hashText = (text: string) => {
  bcryptjs.hashSync(text, 10);
}

export const compareTextWithHash = (text: string, hash: string): boolean => {
  return bcryptjs.compareSync(text, hash);
}