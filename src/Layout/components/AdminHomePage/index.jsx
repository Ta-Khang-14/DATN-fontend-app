import { fetchAccounts } from "app/accountSlice";
import { fetchOrders } from "app/purchaseSlide";
import React, { useEffect } from "react";
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

    useEffect(() => {
        dispatch(fetchOrders());
        dispatch(fetchAccounts());
    }, [dispatch]);

    const data = [
        { name: "Tháng 1", uv: 4000, pv: 2400, amt: 2400 },
        { name: "Tháng 2", uv: 3000, pv: 1398, amt: 2210 },
        { name: "Tháng 3", uv: 2000, pv: 9800, amt: 2290 },
        { name: "Tháng 4", uv: 2780, pv: 3908, amt: 2000 },
        { name: "Tháng 5", uv: 1890, pv: 4800, amt: 2181 },
        { name: "Tháng 6", uv: 2390, pv: 3800, amt: 2500 },
        { name: "Tháng 7", uv: 3490, pv: 4300, amt: 2100 },
    ];

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
                            <LineChart width={500} height={300} data={data}>
                                <Line
                                    type="monotone"
                                    dataKey="pv"
                                    stroke="#8884d8"
                                    name="Sản phẩm 1"
                                />
                                <Line
                                    type="monotone"
                                    dataKey="amt"
                                    stroke="#198754"
                                    name="Sản phẩm 2"
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
                            Tình trạng đơn hàng theo tháng
                        </div>
                        <div className="chart__main">
                            <LineChart width={500} height={300} data={data}>
                                <Line
                                    type="monotone"
                                    dataKey="pv"
                                    stroke="#8884d8"
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
                <Row>
                    <Col md="12" sm="12" lg="6">
                        <div className="admin__home__heading">
                            Sản phẩm bán chạy theo tháng
                        </div>
                        <div className="chart__main">
                            <LineChart width={500} height={300} data={data}>
                                <Line
                                    type="monotone"
                                    dataKey="pv"
                                    stroke="#8884d8"
                                    name="Sản phẩm 1"
                                />
                                <Line
                                    type="monotone"
                                    dataKey="amt"
                                    stroke="#198754"
                                    name="Sản phẩm 2"
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
                            Tình trạng đặt bàn theo tháng
                        </div>
                        <div className="chart__main">
                            <LineChart width={500} height={300} data={data}>
                                <Line
                                    type="monotone"
                                    dataKey="pv"
                                    stroke="#8884d8"
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
