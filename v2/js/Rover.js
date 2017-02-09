    function Rover(plateau, coordinates, currentDirection){
        this.plateau = plateau;
        this.coordinates = coordinates;
        this.currentDirection = currentDirection;
        
        this._turnLeft = function(){
            this.currentDirection = this.currentDirection.left();
        }
        
        this._turnRight = function(){
            this.currentDirection = this.currentDirection.right();
        }
        
        this._move = function(){
            this.coordinates.updateCoordinates(this.currentDirection.stepArray);
        }
        
        this._doNotSupport = function(command){
            console.log("We do not support this command - " + command);
        }
    }

    //commands is an array.
    Rover.prototype.processCommands = function(commands){
        if(commands){
            commands.forEach((command)=>{
                this._processCommand(command);
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

    Rover.prototype.reportPosition= function(){
        if(this.plateau){
            if(this.plateau.exceededBoundaries(this.coordinates.currentPosition())){
                return ("[" + this.coordinates.currentPosition().join(' ') + ' ' + this.currentDirection.current() +"] exceeds plateau.");
            }else{
                return this.coordinates.currentPosition().join(' ') + ' ' + this.currentDirection.current();
            }
        }
    }