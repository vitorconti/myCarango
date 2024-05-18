import { Database } from 'sqlite3';
import { SqliteHelper } from '@/infra/db/sqlite/sqlite-helper'
describe('SqliteHelper', () => {
  describe('constructor', () => {
    test('should create an instance of Database with in-memory location if no location is provided', () => {
      const sqliteHelper = new SqliteHelper();
      expect(sqliteHelper.db).toBeInstanceOf(Database);
    });

    test('should create an instance of Database with the provided location', () => {
      const location = { path: 'test.db' };
      const sqliteHelper = new SqliteHelper(location);
      expect(sqliteHelper.db).toBeInstanceOf(Database);
    });
  });

  describe('mapObjectToArray', () => {
    test('should return an array of object values when passed an object', () => {
      const object = { id: 1, name: 'John', age: 30 };
      const sqliteHelper = new SqliteHelper();
      const result = sqliteHelper.mapObjectToArray(object);
      expect(result).toEqual([1, 'John', 30]);
    });

    test('should return an empty array when passed an empty object', () => {
      const object = {};
      const sqliteHelper = new SqliteHelper();
      const result = sqliteHelper.mapObjectToArray(object);
      expect(result).toEqual([]);
    });

    test('should return an error when passed a non-object value', () => {
      const value = 'test';
      const sqliteHelper = new SqliteHelper();
      const result = sqliteHelper.mapObjectToArray(value) as Error;
      expect(result).toBeInstanceOf(Error);
      expect(result.message).toBe('Invalid object structure');
    });
  });
});
