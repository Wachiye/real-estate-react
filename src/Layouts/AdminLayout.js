import React from "react";
import AdminHeader from "../components/Header/AdminHeader";
import AdminNav from "../components/Nav/AdminNav";
import AdminFooter from "../components/Footer/AdminFooter";

const AdminLayout = ({ children }) => {
    return (
        <div className="wrapper">
            <AdminHeader />
            <AdminNav />
            <main className="main-content">
                {children}
            </main>
            <AdminFooter />
        </div>
    );
};

export default AdminLayout;