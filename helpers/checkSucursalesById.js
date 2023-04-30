import { sql, getConnectionChampoton, getConnectionTrueba, getConnectionTalleres, getConnectionConstituyentes, getConnectionNichupte, getConnectionRanchoViejo, getConnectionTulum, getConnectionCozumel, getConnectionPortillo, getConnectionAleman, getConnectionFederal, getConnectionValladolid, getConnectionPeriferico, getConnectionPtoMorelos, getConnectionGobernadores, getConnectionLakin, getConnectionTizimin, getConnectionHuayakan, getConnectionProgreso, getConnectionCanek, getConnection50Sur } from "../database/configDB.js"
import checkQueryTipoCambio from "./checkQueryTipoCambio.js"


const connectionMap = {
    1: getConnectionTalleres,
    2: getConnectionConstituyentes,
    3: getConnectionNichupte,
    4: getConnectionRanchoViejo,
    5: getConnectionTulum,
    6: getConnectionCozumel,
    7: getConnectionPortillo,
    9: getConnectionAleman,
    10: getConnectionFederal,
    11: getConnectionValladolid,
    12: getConnectionPeriferico,
    13: getConnectionPtoMorelos,
    14: getConnectionGobernadores,
    15: getConnectionLakin,
    16: getConnectionTizimin,
    17: getConnectionHuayakan,
    18: getConnectionProgreso,
    19: getConnectionCanek,
    20: getConnection50Sur,
    23: getConnectionTrueba,
    24: getConnectionChampoton,
  };

  
const checkSucursalesById = async function(sucursalId, idSucursal, res) {
    const getConnection = connectionMap[sucursalId];
    if(getConnection){
        const pool = await getConnection()
        checkQueryTipoCambio(idSucursal, res, pool)     
    }else {
        console.log('no se encuentra el id de la sucursal')
    }
}

export default checkSucursalesById