import { FastifyInstance } from 'fastify';

export default async function ApiKeysContoller(instance: FastifyInstance) {
  instance.get('/generate', {
    // TODO: Add in 200 ok response schema
    // schema: {
    //   response: {
    //     200: ...
    //   }
    // }
  }, async () => {
    /**
     * TODO:
     * Generate api key pair from APIKeyService and return them as an object.
     * The object must be in the format: 
     * {
     *  apiKey: ...,
     *  apiSecretKey: ...
     * }
     */
  });

  instance.get(
    '/protected',
    {
      // TODO: Add plugin to prehandler hook to validate api keys
      // preHandler: [...],

      // TODO: Add headers schema to validate api key request headers
      // schema: {
      //   headers: ...,
      // },
    },
    async () => {
      return {
        hello: 'world',
      };
    }
  );
}
