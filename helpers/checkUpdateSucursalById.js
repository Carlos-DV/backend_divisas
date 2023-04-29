import { getConnectionChampoton, sql, } from "../database/configDB.js"
import checkQueryUpdateTipoCambio from "./checkQueryUpdateTipoCambio.js"


const checkUpdateSucursalById = async function(sucursalId, idSucursal, req, res) {
    // console.log(sucursalId)
    // return
    if(sucursalId === 24){
        const pool = await getConnectionChampoton()
        checkQueryUpdateTipoCambio(idSucursal, req, res, pool)
    }else {
        console.log('no se encuentra PUT')
    }
}

export default checkUpdateSucursalById
