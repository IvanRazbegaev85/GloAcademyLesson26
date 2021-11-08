let url = 'https://jsonplaceholder.typicode.com/posts'

const file = 'db.json'

const sendData = (url,data) => {
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers:{
      'Content-type': 'application/json; charset=UTF-8'
    }
  }).then(response => response.json())
}

const getData = (fileData) => {
  return fetch(fileData)
      .then(response => response.json())
  }

  getData(file).then(data => {
    sendData(url,data)
        .then(response => console.log(response))
        .catch(error => console.log(error))
  })
      .catch(error => console.log(error));