import axios, { AxiosRequestConfig } from 'axios'
import { ApiError } from 'src/services/api-error'
import { err, ok, Result } from 'src/common/result'

export class ApiServiceBase {
  protected urlBase = '/api'
  public constructor (path: string) {
    this.urlBase += path
  }

  protected getConfig () {
    return {
      headers: {
        // Put headers required with every requests here
      },
    }
  }

  protected async get<T> (path = ''): Promise<Result<T | null, ApiError>> {
    return await this.requestResultWrapper<T>(path, (fullPath, config) => {
      return axios.get(fullPath, config)
    })
  }

  protected async post<T> (path = '', data: unknown = undefined): Promise<Result<T | null, ApiError>> {
    return await this.requestResultWrapper<T>(path, (fullPath, config) => {
      return axios.post(fullPath, data, config)
    })
  }

  protected async put<T> (path = '', data: unknown = undefined): Promise<Result<T | null, ApiError>> {
    return await this.requestResultWrapper<T>(path, (fullPath, config) => {
      return axios.put(fullPath, data, config)
    })
  }

  protected async patch<T> (path = '', data: unknown = undefined): Promise<Result<T | null, ApiError>> {
    return await this.requestResultWrapper<T>(path, (fullPath, config) => {
      return axios.patch(fullPath, data, config)
    })
  }

  protected async delete<T> (path = ''): Promise<Result<T | null, ApiError>> {
    return await this.requestResultWrapper<T>(path, (fullPath, config) => {
      return axios.delete(fullPath, config)
    })
  }

  private async requestResultWrapper<T> (subPath: string, request: (fullPath: string, config: AxiosRequestConfig | undefined) => Promise<{data: unknown} | null>): Promise<Result<T | null, ApiError>> {
    if (subPath.length > 0 && subPath[0] !== '/') subPath = `/${subPath}`
    const config = this.getConfig()
    try {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const responseData: T | null = (await request(`${this.urlBase}${subPath}`, config))?.data as T ?? null
      return ok(responseData)
    } catch (e: unknown) {
      return err(new ApiError(e))
    }
  }
}
