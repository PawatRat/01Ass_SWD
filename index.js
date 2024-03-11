const gridPic = document.querySelector('.grid-pic');
function animateGap() {
  gridPic.style.gridColumnGap = '50%';
  gridPic.style.gridRowGap = '40px';
}

setTimeout(animateGap, 200);