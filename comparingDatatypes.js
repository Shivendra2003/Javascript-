1 === 1; // true
"hello" === "hello"; // true

1 === 2; // false
"hello" === "world"; // false

1 === "1"; // false
true === 1; // false

// == performs type coercion, meaning it attempts to convert values to the same type before comparison. Use == only when you explicitly want type coercion.

// === It ensures that both the value and the type are the same for equality. In most cases, === is preferred. It helps avoid unexpected results caused by type coercion.