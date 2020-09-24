export class ProxyRequest {
  constructor(
    private method: string,
    private url: string,        
    private requestBody: any,
    private headers: Map<string, string>
  ) { }
}
