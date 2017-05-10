var m = ['arctic.jpg', 'Gallet.jpg', 'Gallet2.jpg', 'HTB.jpg', 'KS099.jpg', 'SH093.jpg']
for (var i = 0; i < document.getElementsByClassName('box').length; i++) {
  document.getElementsByClassName('box')[i].src = 'images/' + m[i];
  document.getElementById('mainImeg').src = 'images/' + m[0];
}


for (var i = 0; i < document.getElementsByClassName('box').length; i++) {
  document.getElementsByClassName('box')[i].onclick = fStart;
}

function fStart() {
  a = this.src;
  document.getElementById('mainImeg').src = a;

  for (var i = 0; i < document.getElementsByClassName('box').length; i++) {
    document.getElementsByClassName('box')[i].style.border = '3px solid green';
    this.style.border = '3px solid #dd3cd6';
  }
}
