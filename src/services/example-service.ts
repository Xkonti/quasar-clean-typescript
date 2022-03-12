import { Result } from 'src/common/result'
import { ApiError } from 'src/services/api-error'
import { ApiServiceBase } from 'src/services/api-service-base'
import { Counter } from 'src/models/counter'

export class ExampleService extends ApiServiceBase {
  constructor () {
    super('')
  }

  public async getCounter (): Promise<Result<Counter | null, ApiError>> {
    return await this.get('/counter')
  }

  public async postCounter (counter: Counter): Promise<Result<null, ApiError>> {
    return await this.post('/course', counter)
  }
}

export const exampleApiService = new ExampleService()
