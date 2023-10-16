
function submitData(name, email) {
    const user = {
        name: name,
        email: email
    }
    return fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(response => response.json())
    .then(data => {
      document.body.innerHTML += `<p>${data.id}</p>`;
    })
    .catch(error => {
      document.body.innerHTML += `<p>${error.message}</p>`;
    });
}