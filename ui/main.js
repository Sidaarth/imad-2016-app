console.log('loaded!');
// change the text of the main text

var element =  document.getElementById('main-text');

element.innerHTML = 'New Value';
var img = document.getElementById('madi');
var marginleft = 0;
function moveRight () {
    marginLeft = marginLeft + 10;
    img.style.marginLeft = marginLeft + 'px';
}

img.onclick = function()
{
  var interval = setInterval(moveRight, 100);
};