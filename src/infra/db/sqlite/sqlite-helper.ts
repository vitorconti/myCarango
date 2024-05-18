import { Database } from 'sqlite3'
export class SqliteHelper {
  public db: Database;

  constructor (private readonly location: DbLocation = { path: ':memory:' }) {
    this.db = new Database(location.path)
  }

  mapObjectToArray (object: any) {
    if (object instanceof Object) {
      const array = []
      for (const [_key, value] of Object.entries(object)) {
        array.push(value)
      }
      return array
    }
    return new Error('Invalid object structure')
  }
}


type DbLocation = {
  path: string
}

