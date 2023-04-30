import sql from 'mssql'
import { dbSettingsChampoton, dbSettingsTrueba } from './accessDB.js';

export async function getConnection(dbSettings) {
  const pool = new sql.ConnectionPool(dbSettings);
  try {
    await pool.connect();
    return pool;
  } catch (error) {
    console.log(`Error: ${error} --config`);
    return { error: 'No se pudo establecer conexión con la base de datos' };
  }
}

export async function getConnectionChampoton() {
  return getConnection(dbSettingsChampoton);
}

export async function getConnectionTrueba() {
  return getConnection(dbSettingsTrueba);
}


export {
  sql
}