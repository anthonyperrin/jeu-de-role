import GridDisplayer from './game/grid';

//Game grid
// const gridDisplayer = new GridDisplayer();
//Displays the grid
// gridDisplayer.render();

let code;
const bckVideo = $('#bckVideo');
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'i', 'j'];
const ev = new EventSource('http://127.0.0.1:8080/time');
ev.addEventListener('time', function (result) {
    changeMap();
    console.log(result.data);
});
$(document).on('keyup', (event) => {
    changeMap();
});
const changeMap = () => {
    bckVideo.fadeOut(1000, () => {
        bckVideo.attr('src', './assets/video/cave_' + letters[Math.floor(Math.random() * Math.floor(8))] + '_HD_gridless.m4v')
            .fadeIn(1000);
    })
};