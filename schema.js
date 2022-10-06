const { gql} = require("apollo-server");

exports.typeDefs = gql`
    type Query {
        hello: String
        numOfAnimals: Int
        price: Float
        isCool: Boolean
        names: [String!]!
        products (filter: productsFilter): [Product!]!
        product(id: ID!): Product
        categories: [Category!]!
        category(id: ID!): Category
    }

    type Product {
        id: ID!
        name: String!
        image: String!
        description: String!
        quantity: Int!
        price: Float!
        onSale: Boolean!
        categoryId: ID!
        category: Category
        reviews: [Review!]!
    }

    type Category {
        id: ID!
        name: String!
        products(filter: productsFilter): [Product!]!
    }

    type Review {
      id: ID!
      date: String
      title: String
      comment: String
      rating: Int
      productId: ID!
    }

    input productsFilter {
        onSale: Boolean
        avgRating: Int
    }
`;