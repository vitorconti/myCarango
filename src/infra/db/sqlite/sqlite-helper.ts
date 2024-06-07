import { MyCarangoSqliteStatements } from '@/infra/db/sqlite/sqlite-sql-statements';
import path from 'path';
import { Database } from 'sqlite3'


export class SqliteHelper {
  public db: Database;

  constructor (private readonly location: DbLocation = { path: ':memory:' }) {
    if (this.location.path != ':memory:') {
      this.location.path = path.resolve(__dirname, this.location.path)
    }
    this.db = new Database(this.location.path)
    this.db.exec(MyCarangoSqliteStatements.CREATE_STATEMENTS.CREATE_VEHICLE_TABLE)
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

