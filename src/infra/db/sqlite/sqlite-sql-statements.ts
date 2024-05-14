export const MyCarangoSqliteStatements = {
  CREATE_STATEMENTS: {
    CREATE_VEHICLE_TABLE: `
      CREATE TABLE IF NOT EXISTS vehicles (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        brand TEXT,
        year TEXT
      );
      `
  },
  INSERT_STATEMENTS: {
    INSERT_VEHICLE_TABLE: `
        INSERT INTO vehicles (name, brand, year) VALUES (?, ?, ?);
    `
  },
  SELECT_STATEMENTS: {
    SELECT_ALL_VEHICLE_TABLE: `
        SELECT * FROM vehicles;
     `
  }
}
