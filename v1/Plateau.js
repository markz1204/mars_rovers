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
    
    Plateau.prototype.exceededBoundaries = function(currentX, currentY){
        return this._exceededXBoundary(currentX) || this._exceededYBoundary(currentY);
    }