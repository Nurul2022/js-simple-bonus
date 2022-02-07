const products = [
    { name: 'iphone 14', price: 70000 },
    { name: 'Samsung Galaxy', price: 6000 },
    { name: 'dell laptop', price: 50000 },
    { name: 'lenovo yoga', price: 55000 },
    { name: 'Asus', price: 35000 },
    { name: 'Smart Watch', price: 4000 },
    { name: 'Apple Watch', price: 9000 },
    { name: 'One plus', price: 27000 }

];

// for (const product of products) {
//     if(product.price<5000){
//         break;
//     }
// console.log(product);
// }
for (const product of products) {
    if(product.price<10000){
        continue;
    }
    console.log(product);
}
console.log('after the loop');