console.log('bing');
// change the text of the main text

var element =  document.getElementById('main-text');

element.innerHTML = 'New Value';

var img = document.getElementById('img');
img.onclick = function()
{
  img.style.marginleft = '100px';
};