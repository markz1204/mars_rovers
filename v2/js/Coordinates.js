function Coordinates(x, y){
    this.x = x;
    this.y = y;
}

Coordinates.prototype.currentPosition = function(){
    return [this.x, this.y];
}

//changes is an array indicates step for moving in x, y.
Coordinates.prototype.updateCoordinates = function(changes){
    if(changes){
        this.x = parseInt(this.x) + parseInt(changes[0]);
        this.y = parseInt(this.y) + parseInt(changes[1]);
    }
}