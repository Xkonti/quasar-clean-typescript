import { Result } from 'src/common/result'
import { ApiError } from 'src/services/api-error'
import { ApiServiceBase } from 'src/services/api-service-base'
import { Counter } from 'src/models/counter'

export class ExampleService extends ApiServiceBase {
  constructor () {
    // Append `/v1` to all requests in addition to the default `/api` baseUrl
    // resulting in `/api/v1` in front of every api request path
    super('/v1')
  }

  public async getCounter (): Promise<Result<Counter | null, ApiError>> {
    return await this.get('/counter')
  }

  public async postCounter (counter: Counter): Promise<Result<null, ApiError>> {
    return await this.post('/course', counter)
  }
}

export const exampleApiService = new ExampleService()
