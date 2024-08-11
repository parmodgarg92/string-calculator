const StringCalculator = ({ input }) => {
    const calculate = (input) => {
      if (input === "" || input === undefined) return 0;

      let numbers = input;

      // Split the input by both commas and new lines
      numbers = input.split(/,|\n/).map(num => parseInt(num));
      const negativeNumbers = numbers.filter(num => num < 0);
  
      if (negativeNumbers.length > 0) {
        throw new Error(`negative numbers not allowed: ${negativeNumbers.join(", ")}`);
      }
  
      return numbers.reduce((acc, num) => acc + num, 0);
    };
  
    return calculate(input);
  };
  
  export default StringCalculator;
  