function playClip(media) {
    media.play();
  }
  
  //стоп воспроизведения видео примера
  function stopClip(media) {
    media.pause();
  }
  
  //Использование и демонстрация:
  //получим медиа объект в переменную
  var myVideo = document.getElementById("video-example-1");
  
  //запуск по onclick для кнопок:
  playClip(myVideo); //для кнопки "Play"
  stopClip(myVideo); //для кнопки "Stop"