import { sql, getConnectionChampoton } from "../database/configDB.js"
import checkQueryTipoCambio from "./checkQueryTipoCambio.js"

const checkSucursalesById = async function(sucursalId, idSucursal, res) {
    if(sucursalId === 24){
        const pool = await getConnectionChampoton()
        checkQueryTipoCambio(idSucursal, res, pool)     
    }else {
        console.log('no se encuentra')
    }
}

export default checkSucursalesById