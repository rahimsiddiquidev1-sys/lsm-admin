import axios from "axios";
import { getErrorMessage } from "./axiosInstance";
const BASE_URL = import.meta.env.VITE_API_BASE_URL;
export const adminAxios = axios.create({ baseURL: BASE_URL });
adminAxios.interceptors.request.use((config) => { const token=localStorage.getItem("adminToken"); if(token) config.headers.Authorization=`Bearer ${token}`; return config; });
adminAxios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error?.response?.status === 401) {
      localStorage.removeItem("adminToken");
      localStorage.removeItem("adminData");
      if (window.location.pathname !== "/admin/login") {
        window.location.href = "/admin/login";
      }
    }
    return Promise.reject(error);
  }
);
export const adminLogin=(email,password)=>axios.post(`${BASE_URL}/admin/auth/login`,{email,password});
export const getAdminDashboard=()=>adminAxios.get("/admin/dashboard");
export const getAdminRevenue=()=>adminAxios.get("/admin/revenue");
export const getAdminUsers=(params={})=>adminAxios.get("/admin/users",{params});
export const getAdminUser=(id)=>adminAxios.get(`/admin/users/${id}`);
export const deleteAdminUser=(id)=>adminAxios.delete(`/admin/users/${id}`);
export const getAdminCourses=(status)=>adminAxios.get("/admin/courses",{params:status?{status}:{}});
export const approveAdminCourse=(id)=>adminAxios.put(`/admin/courses/approve/${id}`);
export const rejectAdminCourse=(id)=>adminAxios.put(`/admin/courses/reject/${id}`);
export const deleteAdminCourse=(id)=>adminAxios.delete(`/admin/courses/${id}`);
export const getAdminTransactions=(status)=>adminAxios.get("/admin/transactions",{params:status?{status}:{}});
export const getPendingTrainers=()=>adminAxios.get("/admin/trainers/pending");
export const approveTrainer=(id)=>adminAxios.put(`/admin/trainers/approve/${id}`);
export const rejectTrainer=(id)=>adminAxios.put(`/admin/trainers/reject/${id}`);
export const createTrainer=(body)=>adminAxios.post("/admin/trainers/create",body);
export { getErrorMessage };
