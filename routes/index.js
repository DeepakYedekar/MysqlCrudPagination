const {create,find,update,updateEmployeeContacts,addContacts,Delete} = require("../controller/index");
const router = require("express").Router();

router.post("/Employee", create);

router.get("/Employee", find);

router.post("/Employee/addContacts/:id", addContacts);

router.get("/Employee/updateContacts/:id", updateEmployeeContacts);

router.patch("/Employee/:id", update);

router.delete("/Employee/:id", Delete);

module.exports = {
  router
};
