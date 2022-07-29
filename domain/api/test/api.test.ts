import { test } from 'tap';
import buildServer from '../../..';
import configSchema from '../../../config';

test('Request "api/generate" route', async (t) => {
  const app = buildServer(configSchema, true);
  t.teardown(() => app.close());

  const response = await app.inject({
    method: 'GET',
    url: 'api/generate',
  });

  t.equal(response.statusCode, 200);
  t.equal(response.headers['content-type'], 'application/json; charset=utf-8');
  t.match(response.json(), {
    apiKey: /[0-9a-f]{44}/,
    apiSecretKey: /[0-9a-f]{88}/,
  });
});

test('Request "api/protected" route with valid keys', async (t) => {
  const app = buildServer(configSchema, true);
  t.teardown(() => app.close());

  const apiKeyResponse = await app.inject({
    method: 'GET',
    url: 'api/generate',
  });
  const apiKeys = apiKeyResponse.json();
  const { apiKey, apiSecretKey } = apiKeys;

  const response = await app.inject({
    method: 'GET',
    url: 'api/protected',
    headers: {
      'x-api-key': apiKey,
      'x-api-key-secret': apiSecretKey,
    },
  });

  t.equal(response.statusCode, 200);
  t.equal(response.headers['content-type'], 'application/json; charset=utf-8');
  t.same(response.json(), {
    hello: 'world',
  });
});

test('Request "api/protected" route without api keys', async (t) => {
  const app = buildServer(configSchema, true);
  t.teardown(() => app.close());

  const response = await app.inject({
    method: 'GET',
    url: 'api/protected',
  });

  t.equal(response.statusCode, 400);
  t.equal(response.headers['content-type'], 'application/json; charset=utf-8');
});

test('Request "api/protected" route with invalid keys', async (t) => {
  const app = buildServer(configSchema, true);
  t.teardown(() => app.close());

  const response = await app.inject({
    method: 'GET',
    url: 'api/protected',
    headers: {
      'x-api-key': 'asdf',
      'x-api-key-secret': 'asdf',
    },
  });

  t.equal(response.statusCode, 403);
  t.equal(response.headers['content-type'], 'application/json; charset=utf-8');
});
