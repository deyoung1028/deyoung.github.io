const myHeading = document.querySelector('h1');
myHeading.textContent = 'Jennie DeYoung';
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/deyoungfam.png') {
      myImage.setAttribute('src','images/deyoungfam.png');
    } else {
      myImage.setAttribute('src','images/deyoungfam.png');
    }
}






