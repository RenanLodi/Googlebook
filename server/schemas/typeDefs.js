const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Book {
        authors: [String]
        description: String
        bookId: ID
        image: String
        link: String
        title: String
    }

    type User {
      _id: ID
      username: String
      email: String
      bookCount: Int
      savedBooks: [Book]        
  }
  
  type Query {
    me: User
    users: [User]
    user(username: String!): User
}

type Auth {
  token: ID!
  user: User
  }

  input BookInput {
    authors: [String]
    description: String
    bookId: String
    image: String
    link: String
    title: String
}

type Mutation {
  login(email: String!, password: String!): Auth
  addUser(username: String!, email: String!, password: String!): Auth
  saveBook(bookInput: BookInput): User
  removeBook(bookId: ID!): User
}
`;

module.exports = typeDefs;
