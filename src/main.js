import GridDisplayer from './game/grid';

//Game grid
// const gridDisplayer = new GridDisplayer();
//Displays the grid
// gridDisplayer.render();

let code;
const bckVideo = $('#bckVideo');
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'i', 'j'];
$(document).on('keyup', (event) => {
    if (event.key !== undefined) {
        code = event.key;
        bckVideo.fadeOut(1000, () => {
            bckVideo.attr('src', './assets/video/cave_' + letters[Math.floor(Math.random() * Math.floor(8))] + '_HD_gridless.m4v')
                .fadeIn(1000);
        })
    }
});