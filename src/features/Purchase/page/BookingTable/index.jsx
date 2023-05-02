import { images } from "constant";

import { useState, useCallback } from "react";
import { Col, Container, Row } from "reactstrap";
import { Button } from "reactstrap";

function BookingTable() {
    const [isBookingForm, setIsBookingForm] = useState(false);
    const [tables, setTables] = useState([
        {
            _id: 1,
            name: "Bàn 1",
            date: "12:00 23/03/2023",
            status: 1,
            numTime: 1,
        },
        {
            _id: 1,
            name: "Bàn 1",
            date: "12:00 23/03/2023",
            status: 1,
            numTime: 1,
        },
        {
            _id: 1,
            name: "Bàn 1",
            date: "12:00 23/03/2023",
            status: 1,
            numTime: 1,
        },
    ]);

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

    const changeBookingTable = useCallback(() => {
        setIsBookingForm((data) => !data);
    }, [isBookingForm]);

    const renderCart = () => {
        return tables.map((item) => (
            <div className="cart-page__item table-custom">
                <div className="cart-page__item__product">{item.name}</div>
                <div className="cart-page__item__price">{item.date}</div>
                <div className="cart-page__item__product">
                    {convertStatus(item.status)}
                </div>
                <div className="cart-page__item__total">
                    <div className="custom-btn">Hủy</div>
                </div>
            </div>
        ));
    };

    return (
        <Container className="cart-page ">
            <Row>
                {!isBookingForm ? (
                    <Col md="12">
                        {tables.length === 0 ? (
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
                                    {renderCart()}
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
                                />
                                <div>
                                    {" "}
                                    <b>Đặt bàn</b> (Chỉ được đặt trước tối đa 1
                                    ngày)
                                </div>
                                <input type="date" />
                                <div>
                                    {" "}
                                    <b>Số điện thoại liên lạc</b>
                                </div>
                                <input
                                    type="number"
                                    placeholder="Nhập số điện thoại liên lạc"
                                    className="custom-input-number"
                                />
                                <b>Chọn khung giờ</b>
                                <div className="booking-table-time">
                                    <div className="booking-label">
                                        Buổi trưa
                                    </div>
                                    <div className="list-time">
                                        <div className="time-item">10:00</div>
                                        <div className="time-item">11:00</div>
                                        <div className="time-item">12:00</div>
                                    </div>
                                </div>
                                <div className="booking-table-time">
                                    <div className="booking-label">
                                        Buổi chiều
                                    </div>
                                    <div className="list-time">
                                        <div className="time-item">17:00</div>
                                        <div className="time-item">18:00</div>
                                        <div className="time-item">19:00</div>
                                        <div className="time-item">20:00</div>
                                        <div className="time-item">21:00</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="booking-table-action">
                            <div className="btn-normal cusor-poitnter">
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
