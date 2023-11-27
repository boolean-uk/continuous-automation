const sum = require('./example')

test('adds 4 and 5 to equal 9', () => {
    expect(sum(4, 5)).toBe(9)
})