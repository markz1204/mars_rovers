    function Plateau(topX, topY){
                
        this.topX = topX;
        this.topY = topY;
        
        this._exceededXBoundary = function(currentX){
            return this.topX < currentX || currentX < 0;
        }
        
        this._exceededYBoundary = function(currentY){
            return this.topY < currentY || currentY < 0;
        }
    }    
    
    Plateau.prototype.exceededBoundaries = function(coordinates){
        if(coordinates){
            return this._exceededXBoundary(coordinates[0]) || this._exceededYBoundary(coordinates[1]);
        }
    }
    
    Plateau.prototype.details = function(){
        return "[" + this.topX + "," + this.topY +"]";
    }