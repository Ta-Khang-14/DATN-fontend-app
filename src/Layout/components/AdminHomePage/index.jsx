import { fetchAccounts } from "app/accountSlice";
import { fetchOrders } from "app/purchaseSlide";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from "recharts";

import { Col, Row } from "reactstrap";

function AdminHomePage() {
    const dispatch = useDispatch();
    const { pagination } = useSelector((state) => state.products);
    const categories = useSelector((state) => state.categories);
    const posts = useSelector((state) => state.posts.listPosts);
    const accounts = useSelector((state) => state.accounts);
    const orders = useSelector((state) => state.purchase.orders);
    const [dataChart1, setDataChart1] = useState([]);
    const [dataChart2, setDataChart2] = useState([]);

    useEffect(async () => {
        await dispatch(fetchOrders());
        await dispatch(fetchAccounts());
        handleDataMonth();
        handleDataProduct();
    }, [dispatch]);

    // Handle data
    const handleDataMonth = () => {
        let currentMonth = new Date().getMonth() + 1;
        let chart1 = [];
        for (let i = currentMonth; i > 0; i--) {
            if (currentMonth - i > 4) {
                break;
            }
            let sumMoney = 0;

            orders.forEach((item) => {
                if (new Date(item.updatedAt).getMonth() + 1 == i) {
                    sumMoney += item.sumMoney;
                }
            });

            chart1.push({
                name: `Tháng ${i}`,
                sumMoney: sumMoney,
            });
        }
        setDataChart1(chart1);
    };

    const handleDataProduct = () => {
        let currentMonth = new Date().getMonth() + 1;
        let chartData = [];
        console.log(orders);
        orders.forEach((item) => {
            if (item.products && item.products.length > 0) {
                item.products.forEach((product, i) => {
                    let index = chartData.findIndex(
                        (e) => e._id == product._id
                    );
                    if (index != -1) {
                        chartData[index].sum += item.quantity[i];
                    } else {
                        chartData.push({
                            _id: product._id,
                            sum: item.quantity[i],
                            name: product.title,
                        });
                    }
                });
            }
        });

        chartData.sort((a, b) => b.sum - a.sum).length = 4;
        setDataChart2(chartData);
    };

    return (
        <div className="admin__home">
            <h2 className="admin__home__heading">
                Số liệu về trang web của bạn
            </h2>

            <div className="admin__home__info">
                <Link to="/admin/orders" className="admin__home__item">
                    <p className="admin__home__item__number">{orders.length}</p>
                    <p className="admin__home__item__text">Số đơn hàng</p>
                </Link>
                <Link to="/admin/tables" className="admin__home__item">
                    <p className="admin__home__item__number">16</p>
                    <p className="admin__home__item__text">Số bàn</p>
                </Link>
                <Link to="/admin/products" className="admin__home__item">
                    <p className="admin__home__item__number">
                        {pagination.total}
                    </p>
                    <p className="admin__home__item__text">Sản phẩm</p>
                </Link>
                <Link to="/admin/categories" className="admin__home__item">
                    <p className="admin__home__item__number">
                        {categories.length}
                    </p>
                    <p className="admin__home__item__text">Danh mục</p>
                </Link>
                <Link to="/admin/posts" className="admin__home__item">
                    <p className="admin__home__item__number">{posts.length}</p>
                    <p className="admin__home__item__text">Bài viết</p>
                </Link>
                <Link to="/admin/accounts" className="admin__home__item">
                    <p className="admin__home__item__number">
                        {accounts.length}
                    </p>
                    <p className="admin__home__item__text">Tài khoản</p>
                </Link>
            </div>

            <div className="divider"></div>

            <div className="admin__home__chart">
                <Row>
                    <Col md="12" sm="12" lg="6">
                        <div className="admin__home__heading">
                            Doanh thu theo tháng
                        </div>
                        <div className="chart__main">
                            <LineChart
                                width={500}
                                height={300}
                                data={dataChart1}
                            >
                                <Line
                                    type="monotone"
                                    dataKey="sumMoney"
                                    stroke="#8884d8"
                                    name="Tổng tiền"
                                />
                                <CartesianGrid stroke="#ccc" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                            </LineChart>
                        </div>
                    </Col>
                    <Col md="12" sm="12" lg="6">
                        <div className="admin__home__heading">
                            Sản phẩm bán chạy nhất
                        </div>
                        <div className="chart__main">
                            <LineChart
                                width={500}
                                height={300}
                                data={dataChart2}
                            >
                                <Line
                                    type="monotone"
                                    dataKey="sum"
                                    stroke="#8884d8"
                                    name="Số lượng"
                                />
                                <CartesianGrid stroke="#ccc" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                            </LineChart>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default AdminHomePage;
