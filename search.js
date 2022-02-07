const products = [
    { name: 'iphone 14', price: 70000 },
    { name: 'Samsung Galaxy', price: 60000 },
    { name: 'dell laptop', price: 50000 },
    { name: 'lenovo yoga', price: 55000 },
    { name: 'Asus', price: 35000 },
    { name: 'Smart Watch', price: 7000 },
    { name: 'Apple Watch', price: 20000 },
    { name: 'One plus', price: 27000 }

];

function searchProducts(products, searchTest){
    const result = [];
    for(const product of products){
        if(product.name.includes(searchTest)){
            result.push(product);
        }
       
    }
    return result;
}

const matched = searchProducts(products, 'laptop');
console.log(matched);