import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "https://festive-northcutt.147-93-19-140.plesk.page" : "https://festive-northcutt.147-93-19-140.plesk.page",
  withCredentials: true,
});
