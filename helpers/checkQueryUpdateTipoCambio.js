import { sql } from "../database/configDB.js"
// import { currentFecha, formatDateOk, formatearFecha, obtenerFechaFinDeMes, obtenerFechaInicioDeMes, lastFecha } from "./helpers.js";
import { queryDB } from "./queriesDB.js";

const checkQueryUpdateTipoCambio = async function(idSucursal, req, res, pool) {

    const {currentCoin, generateId} = req.body
    const x = idSucursal.split('-')
    const y = x[1]
    const dateCurrency = y

    try {

        const resQuery = await pool
                                .request()
                                .input('currentCoin', sql.Float, parseFloat(currentCoin))
                                .input('dateCurrency', sql.VarChar, dateCurrency)
                                .query(queryDB.updateTipoCambioBySucursal)


        const searchCurrent = await pool
                                .request()
                                .input('dateCurrency', sql.VarChar, dateCurrency)
                                .query(queryDB.getCurrent)
                                res.json(searchCurrent.recordset[0])
    } catch (error) {
        console.log(`Erorr: ${error}`)
    } finally {
        pool?.close();
    }

} 

export default checkQueryUpdateTipoCambio