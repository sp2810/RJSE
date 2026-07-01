import AdminLayout from "../../layouts/AdminLayout";
import DashboardCard from "../../components/DashboardCard";

function Dashboard() {
    const cards = [
        { title: "Total Users", value: "1200" },
        { title: "Total Orders", value: "450" },
        { title: "Revenue", value: "₹50,000" },
        { title: "Products", value: "80" },
    ];
    return (
       <AdminLayout>
        <h1 className="text-3xl font-bold">
            Dashboard</h1>
            <div className="grid grid-cols-4 gap-6">
                {cards.map((card , index) => (
                    <DashboardCard 
                    key={index}
                    title={card.title}
                    value={card.value}/>
                ))}
            </div>
       </AdminLayout>
    )
}

export default Dashboard;