// Загрузка YouTube IFrame API
function loadYouTubePlayerAPI() {
  var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

loadYouTubePlayerAPI();

// Создание плееров при загрузке API
var players = {};
function onYouTubeIframeAPIReady() {
  players['player1'] = new YT.Player('player1', {
    height: '360',
    width: '640',
    videoId: 'ib805EAN60A',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });

  players['player2'] = new YT.Player('player2', {
    height: '360',
    width: '640',
    videoId: 'wCPKbtsPZ1Q',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });

  players['player3'] = new YT.Player('player3', {
    height: '360',
    width: '640',
    videoId: 'AnXTe6VLns0',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
  players['player4'] = new YT.Player('player4', {
    height: '360',
    width: '640',
    videoId: 'VhQkJdqFD2s',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

// Код, который выполняется после создания плееров
function onPlayerReady(event) {
  // Воспроизведение видео при готовности плеера
  event.target.mute();
}

// Код, который выполняется при изменении состояния плеера
function onPlayerStateChange(event) {
  // Вы можете добавить дополнительные действия в соответствии с состоянием плеера
  // Например, обновление интерфейса, обработка событий остановки или завершения видео и т. д.
}

// Обработчик события нажатия на ссылку
var links = document.getElementsByClassName('video-link');
for (var i = 0; i < links.length; i++) {
  links[i].addEventListener('click', function (e) {
    e.preventDefault();
    var videoId = this.getAttribute('data-video');
    var videoContainer = document.getElementById(videoId);
    var player = players[videoId];

    if (videoContainer && player) {
      if (videoContainer.style.display === 'none') {
        videoContainer.style.display = 'block';
        player.playVideo();
      } else {
        videoContainer.style.display = 'none';
        player.pauseVideo(); // Добавлено: остановка воспроизведения видео
      }
    }
  });
}