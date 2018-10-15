var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/cambodia1.jpg') {
      myImage.setAttribute ('src','images/cambodia2.jpg');
    } else {
      myImage.setAttribute ('src','images/cambodia3.jpg');
    }
}