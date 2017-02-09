    function Rover(plateau, x, y, currentDirection){
        this.plateau = plateau;
        this.x = x;
        this.y = y;
        this.currentDirection = currentDirection;
        
        this._turnLeft = function(){
            if('N' == this.currentDirection){
                this.currentDirection = 'W';
            }else if('S' == this.currentDirection){
                this.currentDirection = 'E';
            }else if('W' == this.currentDirection){
                this.currentDirection = 'S';
            }else if('E' == this.currentDirection){
                this.currentDirection = 'N';
            }
        }
        
        this._turnRight = function(){
            if('N' == this.currentDirection){
                this.currentDirection = 'E';
            }else if('S' == this.currentDirection){
                this.currentDirection = 'W';
            }else if('W' == this.currentDirection){
                this.currentDirection = 'N';
            }else if('E' == this.currentDirection){
                this.currentDirection = 'S';
            }
        }
        
        this._move = function(){
            if('N' == this.currentDirection){
                this.y++;
            }else if('S' == this.currentDirection){
                this.y--;
            }else if('W' == this.currentDirection){
                this.x--;
            }else if('E' == this.currentDirection){
                this.x++;
            }
        }
        
        this._doNotSupport = function(command){
            console.log("We do not support this command - " + command);
        }
    }

    Rover.prototype.processCommands = function(commands){
        if(commands){
            commands.split("").forEach((command)=>{
                rover._processCommand(command);
            });
        }
    }
        
    Rover.prototype._processCommand = function(command){
            if('L' === command){
                this._turnLeft();
            }else if('R' === command){
                this._turnRight();
            }else if('M' === command){
                this._move();
            }else{
                this._doNotSupport(command);
            }
        }   

    Rover.prototype.currentPosition= function(){
        if(this.plateau){
            if(this.plateau.exceededBoundaries(this.x, this.y)){
                console.log("Warning: current position(" + this.x +"," + this.y +") exceeds plateau.");
            }
        }
        
        return this.x + ' ' + this.y + ' ' + this.currentDirection;
    }