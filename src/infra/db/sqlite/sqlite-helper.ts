import { Database } from 'sqlite3'
import { MyCarangoSqliteStatements } from '@/infra/db/sqlite/sqlite-sql-statements'
import { promisify } from 'util';

export class SqliteHelper {
  public db: Database;

  constructor (private readonly location: DbLocation = { path: ':memory:' }) {
    this.openDbConnection()
    this.createTableIfNotExists('CREATE_VEHICLE_TABLE')
  }

  mapObjectToArray (object: any) {
    if (object instanceof Object) {
      const array = []
      for (const [_key, value] of Object.entries(object)) {
        array.push(value)
      }
      return array
    }
    return new Error()
  }

  openDbConnection () {
    this.db = new Database(this.location.path, (err) => {
      if (err) {
        throw err
      }
    });

  }
  createTableIfNotExists (sqlStatement: keyof typeof MyCarangoSqliteStatements.CREATE_STATEMENTS) {
    const statement: keyof typeof MyCarangoSqliteStatements.CREATE_STATEMENTS = sqlStatement;
    this.db.exec(MyCarangoSqliteStatements.CREATE_STATEMENTS[statement], (err) => {
      if (err) {
        throw err;
      }
    });

  }

  insertInto (sqlStatement: keyof typeof MyCarangoSqliteStatements.INSERT_STATEMENTS, values: any) {
    const statement: keyof typeof MyCarangoSqliteStatements.INSERT_STATEMENTS = sqlStatement;
    this.db.run(MyCarangoSqliteStatements.INSERT_STATEMENTS[statement], this.mapObjectToArray(values), (err) => {
      if (err) {
        throw err
      }
    });
  }

  async fetchAll (sqlStatement: keyof typeof MyCarangoSqliteStatements.SELECT_STATEMENTS) {
    const statement: keyof typeof MyCarangoSqliteStatements.SELECT_STATEMENTS = sqlStatement;
    return new Promise((resolve, reject) => {
      this.db.all(MyCarangoSqliteStatements.SELECT_STATEMENTS[statement], (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  }
  closeDbConnection () {
    this.db.close((err) => {
      if (err) {
        throw err
      }
    });
  }
}


type DbLocation = {
  path: string
}

