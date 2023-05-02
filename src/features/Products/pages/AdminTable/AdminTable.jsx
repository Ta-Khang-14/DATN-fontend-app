import { unwrapResult } from "@reduxjs/toolkit";
import { deleteMultiProduct, deleteProduct } from "app/productsSlice";
import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { images } from "constant";
import { Button } from "reactstrap";

function AdminTable() {
    const [tables, isSetTables] = useState([
        {
            _id: 1,
            name: "Bàn số 1",
            userName: "Khang",
            typeTime: 1,
            timeBook: "12/02/2023",
            status: 1,
        },
        {
            _id: 1,
            name: "Bàn số 2",
            userName: "Khang 1",
            typeTime: 1,
            timeBook: "12/02/2023",
            status: 2,
        },
        {
            _id: 1,
            name: "Bàn số 2",
            userName: "Khang 2",
            typeTime: 1,
            timeBook: "12/02/2023",
            status: 0,
        },
    ]);

    const convertStatus = (status) => {
        switch (status) {
            case 0:
                return <span>Chưa xác nhận</span>;
            case 1:
                return <span className="green">Đã xác nhận</span>;
            case 2:
                return <span className="red">Đã hủy</span>;
        }
    };

    const renderListAction = (item) => {
        switch (item.status) {
            case 0:
                return (
                    <Button className="shadow-none list-product__action__add list-product__action__export">
                        Xác nhận
                    </Button>
                );
            case 1:
                return (
                    <Button className="shadow-none list-product__action__add">
                        Hủy
                    </Button>
                );
        }
    };

    const renderListProduct = () => {
        return !tables || tables.length === 0 ? (
            <div className="list__body--empty">
                <img src={images.LIST_EMPTY} alt="ảnh" />
                <p>Không có bàn nào được đặt</p>
            </div>
        ) : (
            tables.map((item) => (
                <div className="list__item">
                    <div className="list__name list__name--body">
                        {item.name}
                    </div>
                    <div className="list-table-custom">{item.timeBook}</div>
                    <div className="list__cate list__cate--body">
                        {item.userName}
                    </div>
                    <div className="list__price list__price--body">
                        {convertStatus(item.status)}
                    </div>
                    <div className="list__action list__action--body">
                        {renderListAction(item)}
                    </div>
                </div>
            ))
        );
    };

    // Delete one product
    // const handleDeleteProduct = (id) => {
    //     if (window.confirm("Bạn có chắc muốn xóa sản phẩm này")) {
    //         const fetchDeleteProduct = async () => {
    //             try {
    //                 const response = await dispatch(deleteProduct(id));
    //                 unwrapResult(response);
    //             } catch (error) {
    //                 throw error.message;
    //             }
    //         };

    //         toast.promise(fetchDeleteProduct, {
    //             pending: "Đang xử lý",
    //             success: "Xóa sản phẩm thành công",
    //             error: {
    //                 render: ({ data }) => {
    //                     return data.message;
    //                 },
    //             },
    //         });
    //     }
    // };

    // Delete multi product
    // const handleDeleteSelectedProduct = (checkList, setCheckList) => {
    //     if (
    //         window.confirm(
    //             "Bạn có chắn chắn muốn xóa những sản phẩm được chọn ?"
    //         )
    //     ) {
    //         const deleteSelectedProduct = async () => {
    //             try {
    //                 const response = await dispatch(
    //                     deleteMultiProduct({ productIds: [...checkList] })
    //                 );
    //                 unwrapResult(response);
    //                 setCheckList([]);
    //             } catch (error) {
    //                 throw error;
    //             }
    //         };

    //         toast.promise(deleteSelectedProduct, {
    //             pending: "Đang xử lý",
    //             success: "Xóa sản phẩm thành công",
    //             error: {
    //                 render: ({ data }) => {
    //                     return data.message;
    //                 },
    //             },
    //         });
    //     }
    // };

    // Render main
    return (
        <div className="list-product shadow-sm">
            <div className="list-product__header">
                <h2>Tất cả bàn đặt</h2>
            </div>

            <div className={"list--no-border"}>
                <div className={"list__header"}>
                    <div className="list__name">
                        <p>Tên bàn</p>
                    </div>
                    <div className="list__pictures">
                        <p>Thời gian</p>
                    </div>
                    <div className="list__cate">
                        <p>Người đặt</p>
                    </div>
                    <div className="list__price">
                        <p>Trạng thái</p>
                    </div>
                    <div className="list__action">
                        <p>Hành động</p>
                    </div>
                </div>
                <div className="list__body">{renderListProduct()}</div>
            </div>
        </div>
    );
}

export default AdminTable;
