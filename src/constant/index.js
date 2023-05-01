import banner1 from "assets/img/hero-1.jpg";
import banner2 from "assets/img/hero-2.jpg";
import banner3 from "assets/img/hero-3.jpg";
import bgFooter from "assets/img/footer.png";
import bgSearchBtn from "assets/img/bg_search.png";
import emptyCart from "assets/img/emptyCart.png";
import logo from "assets/img/logo.png";
import logoBlack from "assets/img/logo_footer.png";
import sliderImg from "assets/img/hero-4.jpg";
import listEmpty from "assets/img/list-empty.png";
import logo_c from "assets/img/logo_footer.png";
import logo_white from "assets/img/logo-white.png";

export const images = {
    LOGO: logo,
    LOGO_B: logoBlack,
    LOGO_C: logo_c,
    LOGO_WHITE: logo_white,
    BG_SEARCH: bgSearchBtn,
    BG_FOOTER: bgFooter,
    SLIDER_IMG: sliderImg,
    EMPTYCART: emptyCart,
    LIST_EMPTY: listEmpty,
};

export const bannerImg = [banner1, banner2, banner3];

export const breadcrumbNames = {
    register: "Đăng ký tài khoản",
    login: "Đăng nhập tài khoản",
    user: "Trang khách hàng",
    admin: "Trang quản trị",
    profile: "Hồ sơ",
    password: "Đổi mật khẩu",
    address: "Địa chỉ",
    products: "Sản phẩm",
    add: "Thêm mới",
    edit: "Chỉnh sửa",
    cart: "Giỏ hàng",
    orders: "Đơn mua",
    categories: "Danh mục",
    posts: "Bài viết",
    search: "Tìm kiếm",
    category: "Danh mục",
};

export const formValidateData = {
    minName: 2,
    minPassword: 6,
    phoneRegex: /^[0-9]{9,}$/,
};

export const itemTitle = {
    name: "Tên danh mục",
    title: "Tiêu đề",
    pictures: "Ảnh minh họa",
    price: "Giá sản phẩm",
    quantity: "Số lượng có",
    country: "Xuất xứ",
    unit: "Đơn vị tính",
    category: "Phân loại",
    description: "Mô tả",
    discount: "Giảm giá",
    createdAt: "Ngày tạo",
    updatedAt: "Ngày cập nhật",
    sellNumber: "Số lượng bán",
};

export const listTitle = [
    "name",
    "title",
    "pictures",
    "price",
    "country",
    "category",
];

export const addressField = {
    name: "Họ và tên",
    phone: "Số điện thoại",
    company: "Công ty",
    city: "Tỉnh/Thành phố",
    district: "Quận/Huyện",
    village: "Phường/Xã",
};

export const limitPerPage = [
    { value: 5, label: "5" },
    { value: 10, label: "10" },
    { value: 20, label: "20" },
    { value: 50, label: "50" },
    { value: 100, label: "100" },
];

export const orderStatus = {
    "Chờ xác nhận": "waiting",
    "Chờ lấy hàng": "goods",
    "Đã thanh toán": "done",
};
