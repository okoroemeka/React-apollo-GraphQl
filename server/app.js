import express from 'express';
import graphqlHTTP from 'express-graphql';
import mongoose from 'mongoose';
import cors from 'cors'
import schema from './Schema/schema';


const app = express();

app.use(cors());
mongoose.connect('mongodb://okoro_123:Wise2424@cluster0-shard-00-00-045j4.mongodb.net:27017,cluster0-shard-00-01-045j4.mongodb.net:27017,cluster0-shard-00-02-045j4.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true');
mongoose.connection.once('open', () => {
  console.log('Database connected');
});

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}));
const port = 4201;

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
