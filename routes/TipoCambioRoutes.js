import express from "express";
import { getTipoCambioDate, updateTipoCambioByDate} from "../controllers/TipoCambioController.js";

const router = express.Router();

router.route('/:idSucursal').get(getTipoCambioDate).put(updateTipoCambioByDate)


export default router