const lifeworld ={

    //initialize necessary components
    init(numCols,numRows){
        this.numCols = numCols,
        this.numRows = numRows,
        this.world = this.buildArray();
        this.worldBuffer = this.buildArray();
        //this.randomSetup();
    },
    
    //build an empty array
    buildArray(){
        let outerArray = [];
        for(let row = 0; row<this.numRows; row++) {
            let innerArray = [];
            for(let col = 0; col<this.numCols; col++){
                innerArray.push(0);   
            }
            outerArray.push(innerArray);
        }
        return outerArray;
    },
    
    //build an array with random filled cells
    randomSetup(){
        for(let row = 0; row<this.numRows; row++) {
            for(let col = 0; col<this.numCols; col++){
                this.world[row][col] = 0;
                if(Math.random() < .1) {
                    this.world[row][col] = 1;
                }
            }
        }
    },
    
    //check the living neighbors of a cell
    getLivingNeighbors(row, col){
        //avoid null reference exceptions by ignoring the sides of the array
        if(row <= 0 || col <= 0 || row >= this.numRows - 1 || col  >= this.numCols - 1)
        {
            return 0;
        }
        let sum = 0;
        //NW
        if(this.world[row-1][col-1] == 1)
        {
            sum++;
        }
        //N
        if(this.world[row-1][col] == 1)
        {
            sum++;
        }
        //NE
        if(this.world[row-1][col+1] == 1)
        {
            sum++;
        }
        //W
        if(this.world[row][col-1] == 1)
        {
            sum++;
        }
        //E
        if(this.world[row][col+1] == 1)
        {
            sum++;
        }
        //SW
        if(this.world[row+1][col-1] == 1)
        {
            sum++;
        }
        //S
        if(this.world[row+1][col] == 1)
        {
            sum++;
        }
        //SE
        if(this.world[row+1][col+1] == 1)
        {
            sum++;
        }
        return sum;
    },
    
    //incrementing the array via the rules of the Game of Life
    step(){
        for(let row = 0; row<this.numRows; row++) {
            for(let col = 0; col<this.numCols; col++){
                let neighbors = this.getLivingNeighbors(row, col);
                //Any live cell with two or three live neighbours lives on to the next generation.
                if(neighbors > 1 && neighbors < 4 && this.world[row][col] == 1)
                {
                    this.worldBuffer[row][col] = 1;
                }
                //Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
                else if(neighbors == 3 && this.world[row][col] == 0)
                {
                    this.worldBuffer[row][col] = 1;
                }
                //Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
                //Any live cell with more than three live neighbours dies, as if by overpopulation.
                else
                {
                    this.worldBuffer[row][col] = 0;
                }
            }
        }
        //adjust array vars appropriately so the visual array can be updated properly
        let currentFrame = this.world;
        this.world = this.worldBuffer;
        this.worldBuffer = currentFrame;
    }
} //end lifeworld literal