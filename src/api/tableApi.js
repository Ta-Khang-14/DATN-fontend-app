import axiosClient from "./axiosClient";

const baseUrl = "/table";

const tableApi = {
    bookingTable: (data) => {
        return axiosClient.post(baseUrl, data);
    },
    getTables: () => {
        return axiosClient.get(baseUrl);
    },

    updateTable: (data) => {
        return axiosClient.post(baseUrl + "/edit", data);
    },
};

export default tableApi;
