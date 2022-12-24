import throttle from 'lodash.throttle';
import Player from '@vimeo/player';
const CURRENT_TIME = "videoplayer-current-time";


const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);


const onPlay = function(data) {
    localStorage.setItem(CURRENT_TIME, JSON.stringify(data));
};
player.on('timeupdate', throttle(onPlay, 1000));


try {
    const savedSettings = localStorage.getItem(CURRENT_TIME);
    const parsedSettings = JSON.parse(savedSettings);
    const playTime = parsedSettings.seconds;
    player.setCurrentTime(playTime).then(function(seconds) {
   
    }).catch(function(error) {
        switch (error.name) {
        case 'RangeError':           
            break;
        default:            
            break;
    }
});
}
catch (error) {
    console.log(error.name);
};












