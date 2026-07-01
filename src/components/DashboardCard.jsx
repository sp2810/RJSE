function DashboardCard({ title , value}) {
return (
    <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-lg font-semibold text-gray-600">
            {title}
        </h2>
        <p className="text-3xl font-bold mt-4">
            {value}
        </p>
    </div>
)
}

export default DashboardCard;