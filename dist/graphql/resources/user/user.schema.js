"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userTypes = `
      # Comentários -- Definindo o tipo do User
      type User {
          id: ID!
          name: String!
          email: String!
          photo: String
          createAt: String!
          updateAt: String!
      }

      input UserCreateInput {
        name: String!
        email: String!
        password: String!
        
      }

      input UserUpdateInput {
        name: String!
        email: String!
        #A foto está como não Obrigatório
        photo: String
      }

      input UserUpdatePasswordInput {
        password: String!
      }

`;
exports.userTypes = userTypes;
const userQueries = `
    users(first: Int, offset: Int): [ User! ]!
    user(id: ID!): User
`;
exports.userQueries = userQueries;
const userMutations = `
      createUser(input: UserCreateInput!): User
      updateUser(id: ID!, input: UserUpdateInput!): User
      updateUserPassword(id: ID!, input: UserUpdatePasswordInput!): Boolean
      deleteUser(id: ID!): Boolean
`;
exports.userMutations = userMutations;
