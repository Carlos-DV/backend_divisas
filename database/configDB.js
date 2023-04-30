import sql from 'mssql'
import { dbSettings50Sur, dbSettingsAleman, dbSettingsCanek, dbSettingsChampoton, dbSettingsConstituyentes, dbSettingsCozumel, dbSettingsFederal, dbSettingsGobernadores, dbSettingsHuayakan, dbSettingsLakin, dbSettingsNichupte, dbSettingsPeriferico, dbSettingsPortillo, dbSettingsProgreso, dbSettingsPtoMorelos, dbSettingsRanchoViejo, dbSettingsTalleres, dbSettingsTizimin, dbSettingsTrueba, dbSettingsTulum, dbSettingsValladolid } from './accessDB.js';

export async function getConnection(dbSettings) {
  const pool = new sql.ConnectionPool(dbSettings);
  try {
    await pool.connect();
    return pool;
  } catch (error) {
    // console.log(`Error: ${error} --config`);
    return { error: 'No se pudo establecer conexión con la base de datos' };
  }
}

export async function getConnectionChampoton() {
  return getConnection(dbSettingsChampoton);
}
export async function getConnectionTrueba() {
  return getConnection(dbSettingsTrueba);
}
export async function getConnection50Sur() {
  return getConnection(dbSettings50Sur)
}
export async function getConnectionCanek() {
  return getConnection(dbSettingsCanek)
}
export async function getConnectionProgreso() {
  return getConnection(dbSettingsProgreso)
}
export async function getConnectionHuayakan() {
  return getConnection(dbSettingsHuayakan)
}
export async function getConnectionTizimin() {
  return getConnection(dbSettingsTizimin)
}
export async function getConnectionLakin() {
  return getConnection(dbSettingsLakin)
}
export async function getConnectionGobernadores() {
  return getConnection(dbSettingsGobernadores)
}
export async function getConnectionPtoMorelos() {
  return getConnection(dbSettingsPtoMorelos)
}
export async function getConnectionPeriferico() {
  return getConnection(dbSettingsPeriferico)
}
export async function getConnectionValladolid() {
  return getConnection(dbSettingsValladolid)
}
export async function getConnectionFederal() {
  return getConnection(dbSettingsFederal)
}
export async function getConnectionAleman() {
  return getConnection(dbSettingsAleman)
}
export async function getConnectionPortillo() {
  return getConnection(dbSettingsPortillo)
}
export async function getConnectionCozumel() {
  return getConnection(dbSettingsCozumel)
}
export async function getConnectionTulum() {
  return getConnection(dbSettingsTulum)
}
export async function getConnectionRanchoViejo() {
  return getConnection(dbSettingsRanchoViejo)
}
export async function getConnectionNichupte() {
  return getConnection(dbSettingsNichupte)
}
export async function getConnectionConstituyentes() {
  return getConnection(dbSettingsConstituyentes)
}
export async function getConnectionTalleres() {
  return getConnection(dbSettingsTalleres)
}


export {
  sql
}