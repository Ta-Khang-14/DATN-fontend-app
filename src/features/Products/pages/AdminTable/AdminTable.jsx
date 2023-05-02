import { unwrapResult } from "@reduxjs/toolkit";
import { deleteMultiProduct, deleteProduct } from "app/productsSlice";
import ProductsList from "features/Products/components/ProductsList";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";

function AdminTable() {
    const products = useSelector((state) => state.products.listProduct);
    const dispatch = useDispatch();
    const location = useLocation();

    const renderListProduct = () => {};

    // Delete one product
    const handleDeleteProduct = (id) => {
        if (window.confirm("Bạn có chắc muốn xóa sản phẩm này")) {
            const fetchDeleteProduct = async () => {
                try {
                    const response = await dispatch(deleteProduct(id));
                    unwrapResult(response);
                } catch (error) {
                    throw error.message;
                }
            };

            toast.promise(fetchDeleteProduct, {
                pending: "Đang xử lý",
                success: "Xóa sản phẩm thành công",
                error: {
                    render: ({ data }) => {
                        return data.message;
                    },
                },
            });
        }
    };

    // Delete multi product
    const handleDeleteSelectedProduct = (checkList, setCheckList) => {
        if (
            window.confirm(
                "Bạn có chắn chắn muốn xóa những sản phẩm được chọn ?"
            )
        ) {
            const deleteSelectedProduct = async () => {
                try {
                    const response = await dispatch(
                        deleteMultiProduct({ productIds: [...checkList] })
                    );
                    unwrapResult(response);
                    setCheckList([]);
                } catch (error) {
                    throw error;
                }
            };

            toast.promise(deleteSelectedProduct, {
                pending: "Đang xử lý",
                success: "Xóa sản phẩm thành công",
                error: {
                    render: ({ data }) => {
                        return data.message;
                    },
                },
            });
        }
    };

    // Render main
    return (
        <div className="list-product shadow-sm">
            <div className="list-product__header">
                <h2>Tất cả bàn đặt</h2>
            </div>

            <div className={"list--no-border"}>
                <div className={"list__header"}>
                    <div className="list__name">
                        <p>Tên sản phẩm</p>
                    </div>
                    <div className="list__pictures">
                        <p>Ảnh minh họa</p>
                    </div>
                    <div className="list__cate">
                        <p>Phân loại hàng</p>
                    </div>
                    <div className="list__price">
                        <p>Giá</p>
                    </div>
                    <div className="list__origin">
                        <p>Xuất sứ</p>
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
