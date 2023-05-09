import tableApi from "api/tableApi";
import { images } from "constant";

import { useState, useCallback, useEffect } from "react";
import { Col, Container, Row } from "reactstrap";
import { toast } from "react-toastify";

function BookingTable() {
    const [isBookingForm, setIsBookingForm] = useState(false);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [date, setDate] = useState("");
    const [timeType, setTimeType] = useState("");

    const [tables, setTables] = useState([]);

    useEffect(async () => {
        let data = (await tableApi.getTables()).data;
        setTables(data.tableUsers);
    }, []);

    const bindingName = (event) => {
        if (!event.target.value) {
            toast.warning("Tên không được bỏ trống");
            setName("");
            return;
        }
        setName(event.target.value);
    };

    const bindingDate = (event) => {
        if (!event.target.value) {
            toast.warning("Ngày đặt không được bỏ trống");
            setDate("");
            return;
        }

        if (
            new Date().getDate() > new Date(event.target.value).getDate() ||
            new Date().getDate() < new Date(event.target.value).getDate() - 1
        ) {
            toast.warning("Ngày đặt là ngày hôm nay hoặc ngày mai");
            setDate("");
            return;
        }
        setDate(event.target.value);
    };

    const bindingSĐT = (event) => {
        if (!event.target.value) {
            toast.warning("Số điện thoại không được bỏ trống");
            setPhone("");
            return;
        }
        setPhone(event.target.value);
    };

    const bindingTimeType = (data) => {
        setTimeType(data);
    };

    const bookingTable = async () => {
        if (!name || !phone || !date || !timeType) {
            toast.warning("Dữ liệu không được bỏ trống");
            return;
        }
        let data = {
            name,
            phone,
            date,
            timeType,
        };
        let res = await tableApi.bookingTable(data);
        console.log(res);
        if (res.success) {
            toast.success("Đặt bàn thành công");
        } else {
            toast.warning(res.message);
        }
    };
    const convertStatus = (status) => {
        switch (status) {
            case 0:
                return "Chưa xác nhận";
            case 1:
                return "Đã xác nhận";
            case 2:
                return "Đã bị hủy";
        }
    };

    const convertTimeType = (type) => {
        switch (type) {
            case 1:
                return "10:00";
            case 2:
                return "11:00";
            case 3:
                return "12:00";
            case 4:
                return "17:00";
            case 5:
                return "18:00";
            case 6:
                return "19:00";
            case 7:
                return "20:00";
        }
    };

    const changeBookingTable = useCallback(() => {
        setIsBookingForm((data) => !data);
    }, [isBookingForm]);

    // const renderCart = () => {
    //     if (tables) {
    //         console.log(tables);
    //         return tables.map((item) => (
    //             <div className="cart-page__item table-custom">
    //                 <div className="cart-page__item__product">{item.name}</div>
    //                 <div className="cart-page__item__price">{item.date}</div>
    //                 <div className="cart-page__item__product">
    //                     {convertStatus(item.status)}
    //                 </div>
    //                 <div className="cart-page__item__total">
    //                     <div className="custom-btn">Hủy</div>
    //                 </div>
    //             </div>
    //         ));
    //     } else {
    //         return "";
    //     }
    // };
    const changeStatusTable = async (data) => {
        let res = await tableApi.updateTable(data);
        if (res && res.success) {
            toast.success("Hủy đặt bàn thành công");
            let dataTable = (await tableApi.getTables()).data;
            setTables(dataTable.tableUsers);
        } else {
            toast.warn("Hủy đặt bàn thất bại");
        }
    };

    return (
        <Container className="cart-page ">
            <Row>
                {!isBookingForm ? (
                    <Col md="12">
                        {!tables || tables.length === 0 ? (
                            <div className="cart-page--empty">
                                <img src={images.EMPTYCART} alt="empty" />
                                <p>Bạn chưa đặt bàn nào</p>
                                <button
                                    className="btn-normal cusor-poitnter"
                                    onClick={changeBookingTable}
                                >
                                    Đặt bàn
                                </button>
                            </div>
                        ) : (
                            <>
                                <div className="cart-page__item cart-page--margin bg-white table-custom">
                                    <div className="cart-page__item__product">
                                        Tên bàn
                                    </div>
                                    <div className="cart-page__item__price">
                                        Thời gian đặt
                                    </div>
                                    <div className="cart-page__item__product">
                                        Tình trạng
                                    </div>
                                    <div className="cart-page__item__action">
                                        Thao tác
                                    </div>
                                </div>
                                <div className="cart-page__list bg-white">
                                    {tables.map((item) => (
                                        <div className="cart-page__item table-custom">
                                            <div className="cart-page__item__product">
                                                {item.tableID.name}
                                            </div>
                                            <div className="cart-page__item__price">
                                                {convertTimeType(
                                                    item.timeType
                                                ) +
                                                    " - " +
                                                    item.date}
                                            </div>
                                            <div className="cart-page__item__product">
                                                {convertStatus(item.status)}
                                            </div>
                                            <div className="cart-page__item__total">
                                                {item.status != 2 ? (
                                                    <div
                                                        className="custom-btn"
                                                        onClick={() =>
                                                            changeStatusTable({
                                                                id: item._id,
                                                                status: 2,
                                                            })
                                                        }
                                                    >
                                                        Hủy
                                                    </div>
                                                ) : (
                                                    ""
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="cart-page__item cart-page--margin bg-white ">
                                    <div className="cart-page__item__summary">
                                        <div className="flex-grow-1">
                                            <button
                                                className={`buy-btn shadow-none`}
                                                onClick={changeBookingTable}
                                            >
                                                Đặt bàn
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                    </Col>
                ) : (
                    <Col>
                        <div className="booking-table-wrapper">
                            <div className="booking-table">
                                <div>
                                    {" "}
                                    <b>Họ và tên</b>
                                </div>
                                <input
                                    type="text"
                                    placeholder="Nhập họ tên người đặt"
                                    onChange={bindingName}
                                />
                                <div>
                                    {" "}
                                    <b>Đặt bàn</b> (Chỉ được đặt trước tối đa 1
                                    ngày)
                                </div>
                                <input type="date" onChange={bindingDate} />
                                <div>
                                    {" "}
                                    <b>Số điện thoại liên lạc</b>
                                </div>
                                <input
                                    type="number"
                                    placeholder="Nhập số điện thoại liên lạc"
                                    className="custom-input-number"
                                    onChange={bindingSĐT}
                                />
                                <b>Chọn khung giờ</b>
                                <div className="booking-table-time">
                                    <div className="booking-label">
                                        Buổi trưa
                                    </div>
                                    <div className="list-time">
                                        <div
                                            className={
                                                timeType == 1
                                                    ? "time-item-active"
                                                    : "time-item"
                                            }
                                            onClick={() => bindingTimeType(1)}
                                        >
                                            10:00
                                        </div>
                                        <div
                                            className={
                                                timeType == 2
                                                    ? "time-item-active"
                                                    : "time-item"
                                            }
                                            onClick={() => bindingTimeType(2)}
                                        >
                                            11:00
                                        </div>
                                        <div
                                            className={
                                                timeType == 3
                                                    ? "time-item-active"
                                                    : "time-item"
                                            }
                                            onClick={() => bindingTimeType(3)}
                                        >
                                            12:00
                                        </div>
                                    </div>
                                </div>
                                <div className="booking-table-time">
                                    <div className="booking-label">
                                        Buổi chiều
                                    </div>
                                    <div className="list-time">
                                        <div
                                            className={
                                                timeType == 4
                                                    ? "time-item-active"
                                                    : "time-item"
                                            }
                                            onClick={() => bindingTimeType(4)}
                                        >
                                            17:00
                                        </div>
                                        <div
                                            className={
                                                timeType == 5
                                                    ? "time-item-active"
                                                    : "time-item"
                                            }
                                            onClick={() => bindingTimeType(5)}
                                        >
                                            18:00
                                        </div>
                                        <div
                                            className={
                                                timeType == 6
                                                    ? "time-item-active"
                                                    : "time-item"
                                            }
                                            onClick={() => bindingTimeType(6)}
                                        >
                                            19:00
                                        </div>
                                        <div
                                            className={
                                                timeType == 7
                                                    ? "time-item-active"
                                                    : "time-item"
                                            }
                                            onClick={() => bindingTimeType(7)}
                                        >
                                            20:00
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="booking-table-action">
                            <div
                                className="btn-normal cusor-poitnter"
                                onClick={bookingTable}
                            >
                                Tiến hành đặt bàn
                            </div>
                            <div
                                className="btn-normal btn-custom cusor-poitnter"
                                onClick={changeBookingTable}
                            >
                                Hủy
                            </div>
                        </div>
                    </Col>
                )}
            </Row>
        </Container>
    );
}

export default BookingTable;
