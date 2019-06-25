import * as express from 'express';
import * as bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { makeRemoteExecutableSchema, mergeSchemas, introspectSchema } from 'graphql-tools';
import { createApolloFetch } from 'apollo-fetch';

const createRemoteSchema = async (uri: string) => {
	const fetcher = createApolloFetch({ uri });
	return makeRemoteExecutableSchema({
		schema: await introspectSchema(fetcher),
		fetcher
	});
}

let stitchedSchema: any;

async function buildSchema() {
  console.log('Fetching Schemas');

	const createDriverServiceSchema = await createRemoteSchema(`${process.env.CREATE_DRIVER_URI}/graphql`);
  const getDriversServiceSchema = await createRemoteSchema(`${process.env.GET_DRIVERS_URI}/graphql`);
  const updateDriverStatusSchema = await createRemoteSchema(`${process.env.UPDATE_DRIVER_STATUS}/graphql`);

	console.log('Schemas fetched');

	return mergeSchemas({
		schemas: [
      createDriverServiceSchema,
      getDriversServiceSchema,
      updateDriverStatusSchema,
    ],
	});
}

const main = () => {
  const app = express();

	app.use('/graphql', bodyParser.json(), graphqlExpress(async (_) => {
    stitchedSchema = stitchedSchema || await buildSchema();
		return { schema: stitchedSchema };
  }));

	app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

  app.listen(process.env.PORT);

	console.log('DriverAPI is running. Open http://localhost:9090/graphiql to run queries.');
}

try {
  main();
} catch (e) {
	console.log(e, e.message, e.stack);
}
