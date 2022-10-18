const { gql } = require("apollo-server");

exports.typeDefs = gql`
  type Query {
    hello: String
    numOfAnimals: Int
    price: Float
    isCool: Boolean
    names: [String!]!
    products(filter: productsFilter): [Product!]!
    product(id: ID!): Product
    categories: [Category!]!
    category(id: ID!): Category
  }

  type Mutation {
    addCategory(input: AddCategoryInput): Category!
    addProduct(input: AddProductInput): Product!
    addReview(input: AddReviewInput): Review!
    deleteCategory(id: ID!): Boolean
    deleteProduct(id: ID!): Boolean
    deleteReview(id: ID!): Boolean
    updateCategory(id: ID!, input: UpdateCategoryInput): Category!
    updateProduct(id: ID!, input: UpdateProductInput): Product!
    updateReview(id: ID!, input: UpdateReviewInput): Review!

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

  input AddCategoryInput {
    name: String!
  }

  input AddProductInput {
    name: String!
    image: String!
    description: String!
    quantity: Int!
    price: Float!
    onSale: Boolean!
    categoryId: ID!
  }

  input AddReviewInput {
    date: String
    title: String
    comment: String
    rating: Int
    productId: ID!
  }

  input UpdateCategoryInput { 
    name: String!
  }

  input UpdateProductInput { 
    name: String
    image: String
    description: String
    quantity: Int
    price: Float
    onSale: Boolean
    categoryId: ID
  }

  input UpdateReviewInput { 
    date: String
    title: String
    comment: String
    rating: Int
    productId: ID!
  }
`;
