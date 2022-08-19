const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const getBrands = require("../routes/getBrands");
const getInfo = require("../routes/getPhone");

const router = Router();

router.use("/phones", getInfo);
router.use("/brands", getBrands);

module.exports = router;

