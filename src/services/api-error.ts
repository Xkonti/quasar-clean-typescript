export class ApiError {
  responseStatus: number
  errorMessage: string

  public constructor (error: unknown) {
    const e = error as { response: { status: number }, message: string } | null
    this.responseStatus = e?.response?.status ?? 0
    this.errorMessage = e?.message ?? 'Client error'
  }
}
