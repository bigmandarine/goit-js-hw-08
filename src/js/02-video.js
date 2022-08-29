import Player from '@vimeo/player';
import { throttle } from 'lodash';
const vimeoPlayerEl = document.querySelector('#vimeo-player');
const player = new Player(vimeoPlayerEl);

player.on(
  'timeupdate',
  throttle(evt => {
    localStorage.setItem('videoplayer-current-time', evt.seconds);
  }, 1000)
);

player
  .setCurrentTime(localStorage.getItem('videoplayer-current-time'))
  .catch(function (error) {
    console.error('Get state error: ', error.message);
  });
