export const totalPrice = (products) =>{
    let total = 0;
    products.forEach(element => {
        total += element.price;
    });
    return total;
}