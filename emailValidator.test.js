const isValidEmail = require("./emailValidator")

test("returns false when Meron@gmail.com",()=>{
    expect(isValidEmail("Meron@@gmail.com")).toBe(false)
}

)