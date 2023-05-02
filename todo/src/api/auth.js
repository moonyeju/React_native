const EMAIL = 'a';
const PASSWORD = '1';

export const signIn = (email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === EMAIL && password === PASSWORD) {
        resolve(email);
      } else {
        reject('The email or password is wrong');
      }
    }, 1000);
  });
};
