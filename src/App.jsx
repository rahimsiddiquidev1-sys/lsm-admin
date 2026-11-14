import { Navigate, Route, Routes } from 'react-router-dom';
import { AdminAuthProvider } from './context/AdminAuthContext';
import AdminProtectedRoute from './components/admin/AdminProtectedRoute';
import AdminLayout from './components/admin/AdminLayout';
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminUsers from './pages/admin/AdminUsers';
import AdminTrainers from './pages/admin/AdminTrainers';
import AdminCourses from './pages/admin/AdminCourses';
import AdminTransactions from './pages/admin/AdminTransactions';
import AdminRevenue from './pages/admin/AdminRevenue';
export default function App(){return <AdminAuthProvider><Routes><Route path="/admin/login" element={<AdminLogin/>}/><Route path="/admin" element={<AdminProtectedRoute><AdminLayout/></AdminProtectedRoute>}><Route index element={<Navigate to="dashboard" replace/>}/><Route path="dashboard" element={<AdminDashboard/>}/><Route path="users" element={<AdminUsers/>}/><Route path="trainers" element={<AdminTrainers/>}/><Route path="courses" element={<AdminCourses/>}/><Route path="transactions" element={<AdminTransactions/>}/><Route path="revenue" element={<AdminRevenue/>}/></Route><Route path="*" element={<Navigate to="/admin/login" replace/>}/></Routes></AdminAuthProvider>}
