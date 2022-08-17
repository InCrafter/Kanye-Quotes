let body;
let quotes;

const getQuote = async () => {
    const response = await fetch('https://api.kanye.rest', {
      method: 'POST',
      body: quotes, // string or object
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const myJson = await response.json(); //extract JSON from the http response
    // do something with myJson
    document.getElementById("quotes").innerHTML = `"${myJson.quote}"`; 
    unfade(document.getElementById("quotes"))
  }

  getQuote();


function unfade(element) {
  var op = 0.1;  // initial opacity
  element.style.display = 'block';
  var timer = setInterval(function () {
      if (op >= 1){
          clearInterval(timer);
      }
      element.style.opacity = op;
      element.style.filter = 'alpha(opacity=' + op * 100 + ")";
      op += op * 0.1;
  }, 15);
}