const express = require("express");
const router = express.Router();
const {
    BookingTable,
    GetTableUser,
    ChangeStatus,
} = require("../controllers/tableController");
const { verifyAcessToken } = require("../middleware/verifyToken");

router.post("/edit", verifyAcessToken, ChangeStatus);
router.post("/", verifyAcessToken, BookingTable);
router.get("/", verifyAcessToken, GetTableUser);

module.exports = router;
