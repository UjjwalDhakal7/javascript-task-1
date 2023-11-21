

// Using custom sort for array objects.

const items = ["Gracias", "Premier", "Bueno", "Good Morning", "Hello", "Hi"];
items.sort((a, b) => a.localeCompare(b));
console.log(items);