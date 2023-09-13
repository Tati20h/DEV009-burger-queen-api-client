const urlDesp = 'https://virtserver.swaggerhub.com/ssinuco/BurgerQueenAPI/2.0.0/login'

export const loginUser = (email, password) => new Promise((resolve, reject) => {
  fetch(urlDesp, {
    method: 'POST',
    headers: {
      'accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      password
    })
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      resolve(data)
    })
    .catch(error => {
      console.error('Error:', error);
      reject(error)
    });
});
