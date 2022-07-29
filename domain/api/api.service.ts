import { expose, Service } from '../../core/service';

export class APIKeyService extends Service {
  public serviceName = 'APIKeyService';

  async generateNewApiKey() {
    /**
     * TODO:
     * Generate api key and api secret key
     * Hash api secret key
     * Save in database (query given below)
     * Return api key pair
     */

    // Mongoose Query
    // await APIKey.create([
    //   { apiKey: ...,
    //     apiSecretKey: ...
    //   },
    // ]);
  }

  async verifyApiKey(apiKey: string, apiSecretKey: string) {
    /**
     * TODO:
     * Look up document containing api key pair from database (query given below)
     * Verify secrets match
     * Throw error if key's don't match
     * (Bonus points for logging the error)
     */

    // Mongoose Query
    //  const keyDoc = await APIKey.findOne({ apiKey }, null, {
    //   select: '+apiSecretKey',
    // });
  }
}

export default expose(APIKeyService);
