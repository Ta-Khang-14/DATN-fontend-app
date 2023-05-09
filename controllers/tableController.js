const asyncHandle = require("../middleware/asynHandle");
const Table = require("../models/Table");
const Product = require("../models/TableUser");
const ErrorResponse = require("../helpers/ErrorResponse");
const sendResponse = require("../helpers/sendResponse");
const TableUser = require("../models/TableUser");

const BookingTable = asyncHandle(async (req, res, next) => {
    const userId = req.userId;
    const { timeType, date, name, phone } = req.body;
    if (!timeType || !date || !name || !phone) {
        return next(new ErrorResponse("Thiếu thông tin", 400));
    }

    if (!userId) {
        return next(new ErrorResponse("Không tìm thấy user", 401));
    }
    const tableUsers = await TableUser.find();
    const tables = await Table.find();
    let tableID = "";
    if (tableUsers && tableUsers.length > 0) {
        for (let i = 0; i < tables.length; i++) {
            let table = tableUsers.filter(
                (e) =>
                    e.tableID + "" == tables[i]._id + "" &&
                    e.timeType == timeType &&
                    new Date(date).getDate() == new Date(e.date).getDate()
            );

            if (!table || table.length == 0) {
                tableID = tables[i]._id;
                break;
            }
        }

        if (!tableID) {
            return next(new ErrorResponse("Đã hết bàn muốn đặt", 400));
        }
    } else {
        tableID = tables[0]._id;
    }

    let tableNew = new TableUser({
        timeType,
        date,
        name,
        phone,
        tableID,
        userID: userId,
        status: 0,
    });

    await tableNew.save();
    // await TableUser.deleteMany();
    sendResponse(res, "Thành công", {
        tableUsers,
        tables,
    });
});

const GetTableUser = asyncHandle(async (req, res, next) => {
    const userId = req.userId;

    if (!userId) {
        return next(new ErrorResponse("Không tìm thấy user", 401));
    }

    const tableUsers = await TableUser.find({ userID: userId }).populate(
        "tableID"
    );

    sendResponse(res, "Thành công", {
        tableUsers,
    });
});

const ChangeStatus = asyncHandle(async (req, res, next) => {
    const userId = req.userId;
    const { status, id } = req.body;

    if (!userId) {
        return next(new ErrorResponse("Không tìm thấy user", 401));
    }
    const tableUsers = await TableUser.updateOne(
        { _id: id },
        { status: status }
    );

    if (tableUsers && tableUsers.modifiedCount === 0) {
        return next(new ErrorResponse("Hủy đặt bàn thất bại", 400));
    }

    sendResponse(res, "Thành công");
});

module.exports = { BookingTable, GetTableUser, ChangeStatus };
