//Direction definition
function Direction(shortCode, stepArray){
    this.shortCode = shortCode;
    this.stepArray = stepArray;
}
Direction.prototype = {
    left: function(){},
    right: function(){},
    current: function(){return this.shortCode}
}

//NDirection definition
function NDirection(){
    if (NDirection._instance) {
        return NDirection._instance;
    }
    NDirection._instance = this;

    this.left = function(){
        return WDirection.getInstance();
    }
    
    this.right = function(){
        return EDirection.getInstance();
    }
}
NDirection.prototype = new Direction('N', [0,1])
NDirection.getInstance = function(){
    return NDirection._instance || new NDirection();
}

//SDirection definition
function SDirection(){
    if (SDirection._instance) {
        return SDirection._instance;
    }
    SDirection._instance = this;
    
    this.left = function(){
        return EDirection.getInstance();
    }
    
    this.right = function(){
        return WDirection.getInstance();
    }
}
SDirection.prototype = new Direction('S', [0, -1]);
SDirection.getInstance = function(){
    return SDirection._instance || new SDirection();
}

//WDirection definition
function WDirection(){
    if (WDirection._instance) {
        return WDirection._instance;
    }
    WDirection._instance = this;
    
    this.left = function(){
        return SDirection.getInstance();
    }
    
    this.right = function(){
        return NDirection.getInstance();
    }
}
WDirection.prototype = new Direction('W', [-1,0]);
WDirection.getInstance = function(){
    return WDirection._instance || new WDirection();
}

//EDirection definition
function EDirection(){
    if (EDirection._instance) {
        return EDirection._instance;
    }
    EDirection._instance = this;
    
    this.left = function(){
        return NDirection.getInstance();
    }
    
    this.right = function(){
        return SDirection.getInstance();
    }
}
EDirection.prototype = new Direction('E', [1,0]);
EDirection.getInstance = function(){
    return EDirection._instance || new EDirection();
}

//InvalidDirection definition
function InvalidDirection(){
    if (InvalidDirection._instance) {
        return InvalidDirection._instance;
    }
    InvalidDirection._instance = this;
    
    this.left = function(){
        console.log('Invalid direction');
        return InvalidDirection.getInstance();
    }
    
    this.right = function(){
        console.log('Invalid direction');
        return InvalidDirection.getInstance();
    }
}
InvalidDirection.prototype = new Direction('X', [0,0]);
InvalidDirection.getInstance = function(){
    return InvalidDirection._instance || new InvalidDirection();
}

