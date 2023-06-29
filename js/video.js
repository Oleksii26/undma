var popupContainers = document.querySelectorAll(".popup-container");
var popupVideos = document.querySelectorAll(".popup-video");
var body = document.body;
var popupVideos = document.querySelectorAll(".popup-video");


function openPopupVideo(index) {
  popupContainers[index].style.display = "block";
  popupVideos[index].play();
  body.style.overflow = "hidden";
}

function closePopupVideo(index) {
  popupContainers[index].style.display = "none";
  popupVideos[index].pause();
  popupVideos[index].currentTime = 0;
  body.style.overflow = "auto";
}

function handleKeyDown(event, index) {
  if (event.key === "Escape") {
    closePopupVideo(index);
  }
}

function handleContainerClick(event, index) {
  if (event.target === popupContainers[index]) {
    closePopupVideo(index);
  }
}

popupContainers.forEach(function(container, index) {
  container.addEventListener("click", function(event) {
    handleContainerClick(event, index);
  });
});

document.addEventListener("keydown", function(event) {
  popupContainers.forEach(function(container, index) {
    if (container.style.display === "block") {
      handleKeyDown(event, index);
    }
  });
});

window.addEventListener("beforeunload", function() {
  popupVideos.forEach(function(video) {
    video.pause();
    video.currentTime = 0;
  });
});

var homepageLink = document.getElementById("index.html");
homepageLink.addEventListener("click", function(event) {
  event.preventDefault();
  if (isAutoplayEnabled()) {
    pauseAllVideos();
  }
  window.location.href = homepageLink.href;
});

function isAutoplayEnabled() {
  return popupVideos.some(function(video) {
    return video.autoplay;
  });
}

function pauseAllVideos() {
  popupVideos.forEach(function(video) {
    video.pause();
  });
}