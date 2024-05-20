export interface Controller<REQ, RES> {
  handle: (request: REQ) => Promise<RES>
}