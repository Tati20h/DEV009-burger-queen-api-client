const urlDesp = 'https://virtserver.swaggerhub.com/ssinuco/BurgerQueenAPI/2.0.0/login'
const urlDatabase = `https://tati20h.github.io/burger-queen-api-mock/db.json`

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

export const getDatabase = () => new Promise((resolve, reject) => {
  fetch(urlDatabase, {
    method: "GET",
    headers: {
      'accept': 'application/json'
    }
  })
    .then(response => response.json())
    .then(json => resolve(json))
    .catch(err => reject(err));
})

