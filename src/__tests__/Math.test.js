import { Add, Substract, Multiplication } from '../Math'

test('Return sum of two arguments', () => {
  // Arrange

  const a = 20;
  const b = 10;
  const excpected = 30;
  // Act
 
  const calculate = Add(a,b)

  // Assert
  expect(calculate).toBe(excpected)
  
})

test('Return substraction of a - b', () => {
   // Arrange

   const a = 20;
   const b = 10;
   const excpected = 10;
   // Act
  
   const calculate = Substract(a,b)
 
   // Assert
   expect(calculate).toBe(excpected)

})

test('Return multiplication of two arguments', () => {
   // Arrange

   const a = 20;
   const b = 10;
   const excpected = 200;
   // Act
  
   const calculate = Multiplication(a,b)
 
   // Assert
   expect(calculate).toBe(excpected)
})