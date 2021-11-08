const url = 'https://jsonplaceholder.typicode.com/posts'
const file = 'db.json'

let response;

let xhrGet = new XMLHttpRequest()
let xhrSend = new XMLHttpRequest()

xhrGet.open('GET', file);
xhrGet.responseType = 'json';

xhrGet.send();

xhrGet.onload = function() {
  response = xhrGet.response;
  console.log(response);

  xhrSend.open('POST', url)
  xhrSend.setRequestHeader('Content-type', 'application/json; charset=UTF-8');
  xhrSend.send(JSON.stringify(response));
};

xhrSend.onload = function() {
  let sendResponse = xhrSend.response;
  console.log(sendResponse);
};
