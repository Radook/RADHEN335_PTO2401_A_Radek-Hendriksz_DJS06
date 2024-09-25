// A list of provinces:
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']

// A list of names:
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']

// A list of products with prices:
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

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