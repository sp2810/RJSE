import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { Children } from "react";

function AdminLayout({children}) {
    return (
        <div className="flex">
            <Sidebar/>
            <div className="flex-1 bg-gray-100 min-h-screen">
                <Header/>
                <div className="p-6">
                   {children}
                </div>
            </div>
        </div>
    );
}
export default AdminLayout;


// The children to create a reusable layout component. Common UI like Sidebar and Header is written once in AdminLayout, and different page content such as Dashboard, Orders, and Products is passed through the children prop. This avoids repeating layout code across multiple pages.