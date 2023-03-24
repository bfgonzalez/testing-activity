import { multiplyNumbers } from '../multiplyNumbers'

describe('Multiply numbers', () => {
  it('Should be able to multiply numbers', () => {
    expect(multiplyNumbers(2, 3)).toBe(6)
  })
})
