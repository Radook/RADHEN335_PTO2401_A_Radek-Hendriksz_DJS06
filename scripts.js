// A list of provinces:
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']

// A list of names:
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']


//ForEach Basics
names.forEach((name, index) => {
  console.log(`${name} (${provinces[index]})`);
});

//toUpperCase
console.log(provinces.map(province => province.toUpperCase()));

//Name Lengths
console.log(names.map(name => name.length));

//Sorting
console.log(provinces.sort());

//Filtering Cape
console.log(provinces.filter(province => !province.includes("Cape")))

//Finding 'S'
console.log(names.map(name => name.toUpperCase().split('').some(letter => letter === 'S')));

//Creating Object Mapping
console.log(names.reduce((accumulator, name, index) => {
  accumulator[name] = provinces[index]; // Map name to the corresponding province
  return accumulator; // Return the accumulator for the next iteration
}, {}));



// A list of products with prices:
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]



// Advanced Exercises (Single console.log Execution)
console.log(
  // Log Products: Create a comma-separated string of all product names
  products.map(product => product.product).join(', '),

  // Filter by Name Length: Get products with names longer than 5 characters
  products.filter(product => product.product.length > 5).map(product => product.product),

  // Price Manipulation: Calculate the total price of products with valid prices
  products
    .filter(product => String(product.price).trim() !== '') // Filter out products without prices
    .reduce((total, product) => total + Number(product.price), 0), // Convert string prices to numbers and calculate total

  // Concatenate Product Names: Concatenate all product names into a single string
  products.reduce((acc, { product }) => acc + product + ' ', '').trim(), // Ensure it returns a single string

  // Find Extremes in Prices: Determine the highest and lowest prices among products
  (() => {
    const prices = products
      .filter(product => String(product.price).trim() !== '') // Filter out products without prices
      .map(product => Number(product.price)); // Convert valid prices to numbers
    return `Highest: ${Math.max(...prices)}. Lowest: ${Math.min(...prices)}.`; // Return formatted string
  })(),

  // Object Transformation: Create an object mapping product names to their respective prices
  products.reduce((acc, { product, price }) => {
    acc[product] = { name: product, cost: price }; // Map product name to an object with name and cost
    return acc; // Return the accumulator for the next iteration
  }, {}), 
);

