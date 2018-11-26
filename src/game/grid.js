const mapJSON = require('./maps/room-torch-doorway.json');
const GridDisplayer = class {
    constructor() {
        this.gridDiv = $('#grid');
        this.map = mapJSON;
    }

    render() {
        //For each row
        for (let row of this.map.Matrice) {
            //For each cell
            for (let gridCase of row) {
                let cell = $("<div class='cell'></div>");
                cell.height(this.map.CaseSize).width(this.map.CaseSize);

                if (gridCase === 1) {
                    cell.css("background-color", "rgba(255, 255, 255, 0.2)");
                }
                else if (gridCase === 0) {
                    cell.css("background-color", "rgba(255, 0, 0, 0.2)");
                }

                this.gridDiv.append(cell);
            }
            this.gridDiv.append('<div class="break"></div>');
        }
    }
};

module.exports = GridDisplayer;