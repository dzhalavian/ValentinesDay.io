let imgEle = document.querySelector('#img');
let nobtn = document.querySelector('#no');
let Please_Array = [
  'https://media.tenor.com/yASBwuAbiMwAAAAM/k-on-yui.gif',
  'https://media.tenor.com/N31ENoD3Yd0AAAAM/bocchi-the-rock-bocchi.gif',
'https://media1.tenor.com/m/3aEpEL1dVekAAAAC/anime-konosuba.gif',
  'https://media1.tenor.com/m/EGEelRa-r24AAAAC/anime-sad.gif',
  'https://media.tenor.com/jGtzdmPH3DwAAAAM/juvia-cry.gif',
  'https://media1.tenor.com/m/Qc-lDe77IIUAAAAC/anime-hug-hearts.gif',
  'https://media.tenor.com/hbGUzkHNBXgAAAAM/anime-girl.gif',
  'https://media.tenor.com/Y9g7q5u4W8IAAAAM/girl-please.gif',
  'https://media.tenor.com/rpHL5CWYxmEAAAAM/anime.gif',
  'https://media.tenor.com/Be_LxwmiwpkAAAAM/battle-spirits-batosupi.gif',
  'https://media.tenor.com/gWPiR8enwQgAAAAM/anime-mhm.gif',
  'https://media.tenor.com/84AuVjffSrQAAAAM/bocchi-the.gif',
  'https://media.tenor.com/CZFVjOCLQt0AAAAM/anime-shy.gif',
  'https://media.tenor.com/DhA64mS_cmMAAAAM/anime-confused.gif',
  'https://media.tenor.com/XoNY12yIQekAAAAM/katanagatari-please.gif',
  'https://media.tenor.com/YgQQkcsPTgMAAAAM/tbhk-funny.gif',
  'https://media.tenor.com/7iJXvW8LFF8AAAAM/please-appeal.gif',
  'https://media.tenor.com/h5leyxiR4UYAAAAM/yoi-sad.gif',

];

function no(){
  
  let index = Math.floor(Math.random()*Please_Array.length);
  imgEle.src=Please_Array[index];
}

function yes(){
  
  nobtn.style.display="none";
  imgEle.src='https://media1.tenor.com/m/-d_ZWWSD8HwAAAAC/crush-love-you.gif';
  setTimeout(()=>{
   window.open("https://www.youtube.com/watch?v=-pHfPJGatgE");
  },2000)
}