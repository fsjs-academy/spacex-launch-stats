import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import cors from 'cors';
// import path from 'path';

import { typeDefs } from './schema';
import { resolvers } from './resolvers';

const PORT = process.env.PORT || 4000
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

app.use(cors());
// app.use(express.static(path.join(__dirname, 'public')));
// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
// });

server.applyMiddleware({ app });

app.listen(PORT, () => {
  console.log(`🚀 Server ready at port http://localhost/${PORT}${server.graphqlPath}`);
});