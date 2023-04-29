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


  export {
    dbSettingsChampoton
}