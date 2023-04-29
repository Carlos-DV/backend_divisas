import dotenv from "dotenv";
dotenv.config();

const dbSettingsChampoton = {
  user: process.env.DB_USER,
  // password: process.env.DB_PASSWORD_LOCAL,
  // server: process.env.IP_TEST,
  password: process.env.DB_PASSWORD_LOCALBYDV,
  server: process.env.IP_CHAMPOTON,
  database: process.env.DB_NAME,
    options: {
      encrypt: false,
      trustServerCertificate: true,
    }
  }

  export {
    dbSettingsChampoton
}