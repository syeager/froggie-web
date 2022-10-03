export abstract class ApiRequest<TResult, TClient> {
  protected abstract executeInternal(client: TClient): Promise<TResult>;

  public async execute(client: TClient): Promise<TResult> {
    const result = await this.executeInternal(client);
    const castResult = result as TResult;
    return castResult;
  }

  public getTypeName(): string {
    const x = this.constructor.toString().match(/\w+/g);
    if (x) {
      return x[1];
    }
    return "";
  }
}
