import {createContext,useContext,useMemo,useState} from "react";
const C=createContext(null);
export function AdminAuthProvider({children}){const[admin,setAdmin]=useState(()=>{try{return JSON.parse(localStorage.getItem("adminData"))||null}catch{return null}});const loginAdmin=data=>{localStorage.setItem("adminToken",data.token);const safe={...data,token:undefined,password:undefined};localStorage.setItem("adminData",JSON.stringify(safe));setAdmin(safe)};const logoutAdmin=()=>{localStorage.removeItem("adminToken");localStorage.removeItem("adminData");setAdmin(null)};return <C.Provider value={useMemo(()=>({admin,loginAdmin,logoutAdmin}),[admin])}>{children}</C.Provider>}
export const useAdminAuth=()=>useContext(C);
