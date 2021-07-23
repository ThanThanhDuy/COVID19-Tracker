import axiosClient from "./axiosClient";
const Api = {
  getCountries: () => {
    const url = "/countries";
    return axiosClient.get(url);
  },
  getCase: (country) => {
    const url = `/total/dayone/country/${country}`;
    return axiosClient.get(url);
  },
};

export default Api;
