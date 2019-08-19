describe("fizzBuzz", function(){

  it("should return 1 when passed 1", function(){
    expect(fizzBuzz(1)).toEqual(1);
  })

  it("should return 2 when passed 2", function(){
    expect(fizzBuzz(2)).toEqual(2);
  })

  it("should return 'fizz' when passed 3", function(){
    expect(fizzBuzz(3)).toEqual('fizz');
  })

  it("should return 'buzz' when passed 5", function(){
    expect(fizzBuzz(5)).toEqual('buzz');
  })

  it("should return 'fizz' when passed 6", function(){
    expect(fizzBuzz(6)).toEqual('fizz');
  })

  it("should return 'buzz' when passed 10", function(){
    expect(fizzBuzz(10)).toEqual('buzz');
  })

  it("should return 'fizzbuzz' when passed 15", function(){
    expect(fizzBuzz(15)).toEqual('fizzbuzz');
  })
})