const urlDesp = 'http://127.0.0.1:8080/login'
const urlProds = `http://127.0.0.1:8080/products?_page=1&_limit=10`

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

export const getProduct = (token) => new Promise((resolve, reject) => {
  fetch(urlProds, {
    method: "GET",
    headers: { "Authorization": `Bearer ${token}` }
  })
    .then(response => response.json())
    .then(json => resolve(json))
    .catch(err => reject(err));
})