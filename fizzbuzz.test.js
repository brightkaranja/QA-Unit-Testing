const fizzBuzz = require("./fizzbuzz")

test('should return string when given 4',()=>{
    expect(fizzBuzz(4)).toBe('4');  
}
);
test('should return Fizz when given 9',()=>{
    expect(fizzBuzz(9)).toBe('Fizz'); 
}
);