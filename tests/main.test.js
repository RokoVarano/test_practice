import { test } from '@jest/globals';
import { stringLength, reverseString, capitalize } from '../main.js';
import Calculator from '../calculator.js';
import { describe } from 'yargs';

const string = 'abcdshfkeos';

test('expect return to be a number', () => {
  expect(stringLength(string)).toBeInstanceOf(String);
});

test('expect string to be longer than 1 and shorter than 10', () => {
  expect(stringLength(string) < 10).toBe(true);
  expect(stringLength(string) > 1).toBe(true);
});

test('expect to return reversed string', () => {
  expect(reverseString(string)).toBe(string.reverse())
});

describe('calculator', () => {

  const calculator = new Calculator();
  const x = 4;
  const y = 7;

  test('expect return to be x + y', () => {
    expect(calculator.add(x, y)).toBe(x+y);
  })

  test('expect param x to be a number', () => {
    expect(calculator.add('7', y)).toBeInstanceOf(Error);
  })

  test('expect param y to be a number', () => {
    expect(calculator.add(x, '7')).toBeInstanceOf(Error);
  })

  test('expect return to be x + y', () => {
    expect(calculator.substract(x, y)).toBe(x-y);
  })

  test('expect param x to be a number', () => {
    expect(calculator.substract('7', y)).toBeInstanceOf(Error);
  })

  test('expect param y to be a number', () => {
    expect(calculator.substract(x, '7')).toBeInstanceOf(Error);
  })

  test('expect return to be x + y', () => {
    expect(calculator.divide(x, y)).toBe(x/y);
  })

  test('expect param x to be a number', () => {
    expect(calculator.divide('7', y)).toBeInstanceOf(Error);
  })

  test('expect param y to be a number', () => {
    expect(calculator.divide(x, '7')).toBeInstanceOf(Error);
  })

  test('expect return to be x + y', () => {
    expect(calculator.multiply(x, y)).toBe(x*y);
  })

  test('expect param x to be a number', () => {
    expect(calculator.multiply('7', y)).toBeInstanceOf(Error);
  })

  test('expect param y to be a number', () => {
    expect(calculator.multiply(x, '7')).toBeInstanceOf(Error);
  })
})

describe('capitalize', () => {
  test('it returns the string with the first letter being in uppercase', () => {
    expect(capitalize(string[0]).toBe(string[0].toUpperCase));
  })
})