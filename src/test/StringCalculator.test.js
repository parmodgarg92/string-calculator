import { render, screen } from '@testing-library/react';
import StringCalculator from '../StringCalculator';

test('returns 0 for an empty string', () => {
    const result = StringCalculator("");
    console.log(result,'result in ')
    expect(result).toBe(0);
  });  

test('returns the number itself if only one number is provided', () => {
    const { getByText } = render(<StringCalculator input="5" />);
    expect(getByText(/5/i)).toBeInTheDocument();
});
  
test('throws an exception when negative numbers are provided', () => {
    const input = "-1,2,-3";

    expect(() => {
        StringCalculator({ input });
    }).toThrowError("negative numbers not allowed: -1, -3");
});
  

test('handles new lines between numbers', () => {
    const input = "1\n2,3,5,6,7,8";
  
    expect(() => {
      StringCalculator({ input });
    }).not.toThrow();
  
    expect(StringCalculator({ input })).toBe(32);
});

test('handles any amount of numbers', () => {
    const input = "1,2,3,4,5,6,7,8,9";
  
    expect(() => {
      StringCalculator({ input });
    }).not.toThrow();
  
    expect(StringCalculator({ input })).toBe(45);
});
  