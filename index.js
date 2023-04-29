import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import TipoCambioRoutes from './routes/TipoCambioRoutes.js'

const app = express();
app.use(express.json());
dotenv.config();
const domainsAllows = [process.env.FRONTEND_URL];

const corsOptions = {
    origin: function(origin, callback) {
        // if(domainsAllows.indexOf(origin) !== -1 || !origin) {
        if(domainsAllows.indexOf(origin) !== -1 || !origin) {
            // el origen del request esta permitido
            callback(null, true);
        }else {
            callback(new Error('Dont Allow'));
        }
    }
}
app.use(cors(corsOptions));
app.use('/api/dates',  TipoCambioRoutes);


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server Running in Port ${PORT}`);
})
