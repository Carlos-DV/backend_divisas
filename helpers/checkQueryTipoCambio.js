
import { sql } from "../database/configDB.js"
// import { currentFecha, formatDateOk, formatearFecha, obtenerFechaFinDeMes, obtenerFechaInicioDeMes, lastFecha } from "./helpers.js";
import { queryDB } from "./queriesDB.js";

const checkQueryTipoCambio = async function(idSucursal, res, pool) { 

    console.log(pool)

    const formatSucursalDate = idSucursal.split('-')
    const date_begin = formatSucursalDate[1]
    const date_finish = formatSucursalDate[2]

    try {
        const resQuery = await pool
                            .request()
                            .input('date_begin', sql.VarChar, date_begin)
                            .input('date_finish', sql.VarChar, date_finish)
                            .query(queryDB.getTipoCambioBySucursal)
                            if(resQuery.recordset[0]) {
                                res.json(resQuery.recordset)
                            }else {
                                res.json(
                                    {msg: "Aun no creado el siguiente periodo."}
                                )
                            }
    } catch (error) {
        res.json({error: "Error en la conexion con la base de datos, contacte a Sistemas"})
    }
    
}


export default checkQueryTipoCambio

