document.addEventListener('DOMContentLoaded', main);

function main() {
  var form = document.getElementById('my_form');
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    var picURL = event.target.picture.value;
    var topCaption = event.target.topCaption.value;
    var bottomCaption = event.target.bottomCaption.value;
    generateMeme(picURL, topCaption, bottomCaption);
    form.reset();
  });
}

function generateMeme(imageURL, topCaptionText, bottomCaptionText) {
  //div to hold meme image
  var imageHolder = document.createElement('div');
  imageHolder.style.height = '400px';
  imageHolder.style.position = 'relative';
  document.getElementById('container').appendChild(imageHolder);
  imageHolder.style.backgroundImage = `url${imageURL}`;
  imageHolder.className = 'image_holder';

  //x button to remove the div that holds meme image
  var x = document.createElement('button');
  x.innerText = '✘';
  x.className = 'x';
  imageHolder.appendChild(x);
  x.addEventListener('click', function() {
    container.removeChild(imageHolder);
  });

  //creation of meme image from URL
  var memeImg = document.createElement('img');
  memeImg.className = 'meme';
  memeImg.style.maxHeight = '400px';
  memeImg.setAttribute('src', imageURL);

  //add top caption
  var memeTopTxt = document.createElement('span');
  memeTopTxt.innerText = topCaptionText;
  memeTopTxt.setAttribute('id', 'top_text');

  //add bottom caption
  var memeBotTxt = document.createElement('span');
  memeBotTxt.innerText = bottomCaptionText;
  memeBotTxt.setAttribute('id', 'bot_text');

  //attach everything to the div that holds meme image
  imageHolder.appendChild(memeTopTxt);
  imageHolder.appendChild(memeImg);
  imageHolder.appendChild(memeBotTxt);

  //create container to hold imageHolder for positioning purposes
  var container = document.getElementById('container');
  container.appendChild(imageHolder);
}
