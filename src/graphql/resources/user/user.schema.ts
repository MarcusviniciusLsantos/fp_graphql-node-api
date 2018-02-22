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

const userQueries = `
    users(first: Int, offset: Int): [ User! ]!
    user(id: ID!): User
`;

const userMutations = `
      createUser(input: UserCreateInput!): User
      updateUser(id: ID!, input: UserUpdateInput!): User
      updateUserPassword(id: ID!, input: UserUpdatePasswordInput!): Boolean
      deleteUser(id: ID!): Boolean
`;

export{
  userTypes,
  userQueries,
  userMutations
}