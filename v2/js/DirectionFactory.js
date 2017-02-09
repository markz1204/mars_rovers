function DirectionFactory(){}

DirectionFactory.createDirection = function(shortCode){
    if('N' === shortCode){
        return NDirection.getInstance();
    }else if('S' === shortCode){
        return SDirection.getInstance();
    }else if('W' === shortCode){
        return WDirection.getInstance();
    }else if('E' === shortCode){
        return EDirection.getInstance();
    }else{
        return InvalidDirection.getInstance();
    }
}