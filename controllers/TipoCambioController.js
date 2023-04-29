import checkSucursalesById from "../helpers/checkSucursalesById.js";
import checkUpdateSucursalById from "../helpers/checkUpdateSucursalById.js";


const getTipoCambioDate =  async (req, res) => {
    // const products = ['3-20230401-20230430']
    const { idSucursal } = req.params;
    const cutIdSucursal = idSucursal.split('-')
    const sucursalId = parseInt(cutIdSucursal[0])
    console.log(sucursalId)
    // res.json(products) 
    checkSucursalesById(sucursalId, idSucursal, res);
}

const updateTipoCambioByDate = async (req, res) => {
    const { idSucursal } = req.params;
    const cutIdSucursal = idSucursal.split('-')
    const sucursalId = parseInt(cutIdSucursal[0])
    console.log(sucursalId)
    checkUpdateSucursalById(sucursalId, idSucursal, req, res);
}

export {
    getTipoCambioDate,
    updateTipoCambioByDate,
}