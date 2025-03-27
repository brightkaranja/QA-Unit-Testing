
const { add, subtract } = require("./math");


test ("add 6+4 equals 10 ",()=>{
    expect(add(6,4)).toBe(10);
});

test ("subtract 6-3 equals 3",()=>{
    expect(subtract(6,3)).toBe(3);
});


