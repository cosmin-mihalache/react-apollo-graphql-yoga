import { GraphQLServer } from 'graphql-yoga';

const server = GraphQLServer({
  typeDefs: './schema.graphql',
  resolvers,
});
