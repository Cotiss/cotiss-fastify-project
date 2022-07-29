import {
  FastifyPluginAsync,
  preHandlerAsyncHookHandler,
} from "fastify";
import fp from "fastify-plugin";

const apiKeyAuthenticationPlugin: FastifyPluginAsync = async function (
  instance
) {
  const authenticateApiKey: preHandlerAsyncHookHandler = async function (
    request,
    reply
  ) {
    /**
     * TODO:
     * Extract api key and secret key from request headers (look at tests to see which headers are used)
     * Verify api key pair with APIKeyService
     * Return appropriate errors on reply if keys not present or invalid
     */
  };

  instance.decorate("authenticateApiKey", authenticateApiKey);
};

export default fp(apiKeyAuthenticationPlugin, {
  name: "apiKeyAuthenticationPlugin",
});
