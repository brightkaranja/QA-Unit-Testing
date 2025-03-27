const { default: expect } = require("expect");
const { add, multiplication, subtract } = require("./math");

test('adds 2 and 3 equal to 5',() =>{
    expect(add(2,3)).toBe(5);
});

test('subtract 3 and 2  equal to 1',() =>{
    expect(subtract(3,2)).toBe(1);
});

test('multiply 2 and 3  equal to 6',() =>{
    expect(multiplication(2,3)).toBe(6)
});



 