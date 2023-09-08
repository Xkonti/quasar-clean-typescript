import { Result } from 'neverthrow'
import { ApiError, ApiServiceBase } from 'axios-service-base-ts'
import { Counter } from 'src/models/counter'

export class ExampleService extends ApiServiceBase {
  constructor () {
    // Prepend all API requests with `api/v1`
    super('api/v1')
  }

  public async getCounter (): Promise<Result<Counter, ApiError>> {
    return await this.get('/counter')
  }

  public async postCounter (counter: Counter): Promise<Result<null, ApiError>> {
    return await this.post('/course', counter)
  }
}

export const exampleApiService = new ExampleService()
