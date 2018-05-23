document.addEventListener('DOMContentLoaded', main);

function main() {
  console.log('main function');
  var form = document.getElementById('myform');
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    var picURL = event.target.picture.value; // event -> { target: { picture: { value: 'http://somethingtheuserentered.com' }}}
    var topCaption = event.target.topCaption.value;
    var bottomCaption = event.target.bottomCaption.value;
    generateMeme(picURL, topCaption, bottomCaption);
  });
}

function generateMeme(imageURL, topCaptionText, bottomCaptionText) {
  var newDiv = document.createElement('div');

  var memeImg = document.createElement('img');
  memeImg.setAttribute('src', imageURL);

  var memeTopTxt = document.createElement('span');
  memeTopTxt.innerText = topCaptionText;
  memeTopTxt.setAttribute('id', 'top_text');

  var memeBotTxt = document.createElement('span');
  memeBotTxt.innerText = bottomCaptionText;
  memeBotTxt.setAttribute('id', 'bot_text');

  newDiv.appendChild(memeImg);
  newDiv.appendChild(memeTopTxt);
  newDiv.appendChild(memeBotTxt);

  var container = document.getElementById('container');
  container.appendChild(newDiv);
}

//clear input box when clicked.
//add texts to img
//keep meme on page when additional memes are generated.
//style form to be vertical
