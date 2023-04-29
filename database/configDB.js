import sql from 'mssql'
import { dbSettingsChampoton } from './accessDB.js';

export async function getConnectionChampoton() {
  const pool = new sql.ConnectionPool(dbSettingsChampoton);
  try {
    await pool.connect();
    return pool
  } catch (error) {
    console.log(`Error: ${error} <-- 024`)
  }
}

export {
  sql
}