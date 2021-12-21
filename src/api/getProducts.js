const getProducts = async() => {
    const url = 'https://fakestoreapi.com/products/';
    const res = await fetch(url)
    const products = await res.json()
    return products;
};
export default getProducts;