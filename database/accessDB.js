import dotenv from "dotenv";
dotenv.config();

const createDbSettings = (ipBranch) => {
  return {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD_LOCALBYDV,
    server: ipBranch,
    database: process.env.DB_NAME,
    options: {
      encrypt: false,
      trustServerCertificate: true,
    }
  }
}

const dbSettingsChampoton = createDbSettings(process.env.IP_CHAMPOTON);
const dbSettingsTrueba = createDbSettings(process.env.IP_TRUEBA);
const dbSettings50Sur = createDbSettings(process.env.IP_SUR);
const dbSettingsCanek = createDbSettings(process.env.IP_CANEK);
const dbSettingsProgreso = createDbSettings(process.env.IP_PROGRESO);
const dbSettingsHuayakan  = createDbSettings(process.env.IP_HUAYAKAN);
const dbSettingsTizimin = createDbSettings(process.env.IP_TIZIMIN);
const dbSettingsLakin = createDbSettings(process.env.IP_LAKIN);
const dbSettingsGobernadores = createDbSettings(process.env.IP_GOBERNADORES);
const dbSettingsPtoMorelos  = createDbSettings(process.env.IP_PTOMORELOS);
const dbSettingsPeriferico = createDbSettings(process.env.IP_PERIFERICO);
const dbSettingsValladolid = createDbSettings(process.env.IP_VALLADOLID);
const dbSettingsFederal = createDbSettings(process.env.IP_FEDERAL);
const dbSettingsAleman = createDbSettings(process.env.IP_ALEMAN);
const dbSettingsPortillo = createDbSettings(process.env.IP_PORTILLO);
const dbSettingsCozumel = createDbSettings(process.env.IP_COZUMEL);
const dbSettingsTulum = createDbSettings(process.env.IP_TULUM);
const dbSettingsRanchoViejo = createDbSettings(process.env.IP_RANCHOVIEJO);
const dbSettingsNichupte = createDbSettings(process.env.IP_NICHUPTE);
const dbSettingsConstituyentes = createDbSettings(process.env.IP_CONSTITUYENTES);
const dbSettingsTalleres = createDbSettings(process.env.IP_TALLERES);


  export {
    dbSettingsChampoton,
    dbSettingsTrueba,
    dbSettings50Sur,
    dbSettingsCanek,
    dbSettingsProgreso,
    dbSettingsHuayakan,
    dbSettingsTizimin,
    dbSettingsLakin,
    dbSettingsGobernadores,
    dbSettingsPtoMorelos,
    dbSettingsPeriferico,
    dbSettingsValladolid,
    dbSettingsFederal,
    dbSettingsAleman,
    dbSettingsPortillo,
    dbSettingsCozumel,
    dbSettingsTulum,
    dbSettingsRanchoViejo,
    dbSettingsNichupte,
    dbSettingsConstituyentes,
    dbSettingsTalleres,
}