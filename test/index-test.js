/*global describe, it */

describe('Fix the Scope', function() {
  describe('myAnimal()', function() {
    it('returns my animal', () => {
      expect(window.myAnimal()).toEqual('dog')
    })
  })

  describe(var 'yourAnimal', function insidefunction (dog)) 
  {
       console.log ('yourAnimal') 
       }
    it('returns your Animal'.toEqual(dog)) 
       expect(window.yourAnimal()).toEqual('dog')
    })

    it('does not hard-code the answer', function() {
      expect(window.yourAnimal.toString()).toNotContain("return 'cat'")
    })
  })
 
  describe(var = '(n)', function('add2')) {
    it('adds two to n', function() {
      const n = Math.floor(Math.random() * 1000)
      expect(window.add2(n)).toEqual(n + 2)
    })
  })

  describe('funkyFunction()', function() {
    it('returns a function', function() {
      expect(typeof window.funkyFunction()).toEqual('function')
    })
  })

  describe('theFunk', function() {
    it('is "FUNKY!"', function() {
      expect(window.theFunk).toEqual('FUNKY!')
    })
  })

})
