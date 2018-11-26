const Grid = class {
    constructor() {
        this.case = {
            nbCaseHeight: 12,
            nbCaseWidth: 11,
            caseSize: 37.67
        }
    }

     render() {
        // for (let iHeight = 0; iHeight < 12; iHeight++) {
        //     for (let iWidth = 0; iWidth < 11; iWidth++) {
        //         let row = $("div", {'style': 'position: absolute; top: ' + (iHeight + 37.67) + 'px; left: ' + (iWidth + 37.67) + 'px;'});
        //         $('#grid').appendChild(row);
        //     }
        // }
    }
};

module.exports = Grid;