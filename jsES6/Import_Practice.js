//   Understand the Differences Between import and require
export const capitalizeString = str => str.toUpperCase()





// Use export to Reuse a Code Block
const capitalizeString = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  export { capitalizeString };
  

  // Use export for variables
  export const foo = "bar";
  export const bar = "foo";



  
// Create an Export Fallback with export default
export default function subtract(x,y) {return x - y;}