document.addEventListener('DOMContentLoaded', main);

function main() {
  console.log('main function');
  var form = document.getElementById('my_form');
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    var picURL = event.target.picture.value; // event -> { target: { picture: { value: 'http://somethingtheuserentered.com' }}}
    var topCaption = event.target.topCaption.value;
    var bottomCaption = event.target.bottomCaption.value;
    generateMeme(picURL, topCaption, bottomCaption);
    form.reset();
  });
}

function generateMeme(imageURL, topCaptionText, bottomCaptionText) {
  var imageHolder = document.createElement('div');

  imageHolder.style.height = '400px';
  imageHolder.style.position = 'relative';
  document.getElementById('container').appendChild(imageHolder);
  imageHolder.style.backgroundImage = `url${imageURL}`;
  imageHolder.className = 'image_holder';

  var x = document.createElement('button');
  x.innerText = '✘';
  x.className = 'x';
  x.addEventListener('click', function() {
    container.removeChild(imageHolder);
  });
  imageHolder.appendChild(x);

  var memeImg = document.createElement('img');
  memeImg.className = 'meme';
  memeImg.style.maxHeight = '400px';
  memeImg.setAttribute('src', imageURL);

  var memeTopTxt = document.createElement('span');
  memeTopTxt.innerText = topCaptionText;
  memeTopTxt.setAttribute('id', 'top_text');

  var memeBotTxt = document.createElement('span');
  memeBotTxt.innerText = bottomCaptionText;
  memeBotTxt.setAttribute('id', 'bot_text');

  imageHolder.appendChild(memeTopTxt);
  imageHolder.appendChild(memeImg);
  imageHolder.appendChild(memeBotTxt);

  var container = document.getElementById('container');
  container.appendChild(imageHolder);
}

function resetForm(inputs) {
  inputs.reset();
}
