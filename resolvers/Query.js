const { reviews } = require("../db");

exports.Query =  {
    hello: (parent, args, context) => {
        return "World";
    },
    numOfAnimals: (parent, args, context) => {
        return 1230;
    },
    price: (parent, args, context) => {
        return 156.112;
    },
    isCool: (parent, args, context) => {
        return true;
    },
    names: (parent, args, context) => {
        return ["Eli", "Alona", "David"];
    },
    products: (parent, {filter}, {products}) => {
        let filteredProducts = products;
        if(filter){
            const { onSale, avgRating } = filter;
            if(onSale === true) {
                filteredProducts = products.filter(product => {
                    return product.onSale
                })
            }
            if ([1,2,3,4,5].includes(avgRating)) {
                filteredProducts = filteredProducts.filter((product) => {
                    let sumOfRating = 0;
                    let numOfRating = 0;
                    reviews.forEach(review => {
                        if(review.productId === product.id){
                            sumOfRating += review.rating;
                            numOfRating++;
                        }
                    });
                    const avgProductRating = sumOfRating/numOfRating;
                    return avgProductRating >= avgRating;
                })
            }
        }
        return filteredProducts
},
    product: (parent, {id: productId}, {products}) => {
        return products.find( product => product.id === productId);
    },
    category: (parent, {id}, {categories}) => {
        return categories.find((category) => category.id === id);
    },
    categories: (parent, args, context) => categories
};