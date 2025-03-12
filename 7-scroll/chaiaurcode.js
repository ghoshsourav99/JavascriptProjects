document.addEventListener("DOMContentLoaded", function(){
  let progressBar = document.querySelector(".progress");
  function updateProgressBar(){
    let scrollHeight = 
    document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollTop = document.documentElement.scrollTop;
    scrollPercent = (scrollTop/scrollHeight)*100;
    progressBar.style.width = scrollPercent + "%";
  }
  window.addEventListener("scroll",updateProgressBar)
})
