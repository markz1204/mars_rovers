QUnit.test("Plateau initiation successfully", function( assert ) {
    var plateau = new Plateau(3,3);
    assert.ok(plateau);
    assert.equal(plateau.details(), "[3,3]");
});

QUnit.test("Plateau exceed boundary validation successfully", function( assert ) {
    var plateau = new Plateau(3,3);
    assert.ok(plateau.exceededBoundaries([4, 1]));
    assert.ok(plateau.exceededBoundaries([1, 4]));
    assert.ok(plateau.exceededBoundaries([4, 4]));
    
    assert.ok(plateau.exceededBoundaries([1, -1]));
    assert.ok(plateau.exceededBoundaries([-1, 1]));
    assert.ok(plateau.exceededBoundaries([-1, -1]));
    
    assert.notOk(plateau.exceededBoundaries([1, 1]));
    assert.notOk(plateau.exceededBoundaries([3, 3]));

});

QUnit.test("Coordinates initiation successfully", function( assert ) {
    var coordinates = new Coordinates(3,3);
    assert.ok(coordinates);
    assert.equal(coordinates.currentPosition().join(' '), "3 3");
});

QUnit.test("Coordinates updates successfully", function( assert ) {
    var coordinates = new Coordinates(3,3);
    assert.ok(coordinates);
    
    coordinates.updateCoordinates([2, 1]);
    assert.equal(coordinates.currentPosition().join(' '), "5 4");
    
    coordinates.updateCoordinates([-2, 1]);
    assert.equal(coordinates.currentPosition().join(' '), "3 5");
});

QUnit.test("NDirection initiation successfully", function( assert ) {
    var ndirection = DirectionFactory.createDirection('N');
    assert.ok(ndirection instanceof NDirection);
    
    ndirection = DirectionFactory.createDirection('n');
    assert.ok(ndirection instanceof InvalidDirection);

});

QUnit.test("NDirection is singleton successfully", function( assert ) {
    var ndirection1 = DirectionFactory.createDirection('N');
    assert.ok(ndirection1 instanceof NDirection);
    
    var ndirection2 = DirectionFactory.createDirection('N');
    assert.equal(ndirection1, ndirection2);

});

QUnit.test("NDirection left and right are correct direction", function( assert ) {
    var ndirection = DirectionFactory.createDirection('N');
    
    var direction = ndirection.left();
    assert.ok(direction instanceof WDirection);
    
    direction = ndirection.right();
    assert.ok(direction instanceof EDirection);

});

QUnit.test("Rover initiation successfully", function( assert ) {
    var plateau = new Plateau(5,5),
        coordinates = new Coordinates(1,1);
        direction = DirectionFactory.createDirection('E');
    
    var rover = new Rover(plateau, coordinates, direction);
    
    assert.ok(rover);
    assert.equal(rover.reportPosition(), '1 1 E');

});

QUnit.test("Rover prcess command correctly", function( assert ) {
    var plateau = new Plateau(5,5),
        coordinates = new Coordinates(1,1);
        direction = DirectionFactory.createDirection('E');
    
    var rover = new Rover(plateau, coordinates, direction);
    
    rover.processCommands(['L']);
    assert.equal(rover.reportPosition(), '1 1 N');

    rover.processCommands(['R']);
    assert.equal(rover.reportPosition(), '1 1 E');
    
    rover.processCommands(['M']);
    assert.equal(rover.reportPosition(), '2 1 E');
    
    rover.processCommands("LRMMRLRMLLM".split(''));

    assert.equal(rover.reportPosition(), '4 1 N');
    
    rover.processCommands("MMMMM".split(''));

    assert.equal(rover.reportPosition(), '[4 6 N] exceeds plateau.');
    
});