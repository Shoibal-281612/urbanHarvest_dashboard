import React from "react";
import Card from "../components/UI/Card";
import RecentOrdersTable from "../components/UI/RecentordersTable";
import { dashboardStats, recentOrders } from "../utils/mockData";
import { FaBoxOpen, FaDollarSign, FaUsers, FaTruck } from "react-icons/fa";
import "./Dashboard.css";

const Dashboard = () => {
  const statsMapping = [
    {
      title: "Total Orders",
      value: dashboardStats.totalOrders,
      icon: <FaBoxOpen />,
      color: "#2e7d32",
    },
    {
      title: "Revenue",
      value: `$${dashboardStats.revenue.toLocaleString()}`,
      icon: <FaDollarSign />,
      color: "#ffb74d",
    },
    {
      title: "Active Users",
      value: dashboardStats.activeUsers,
      icon: <FaUsers />,
      color: "#1976d2",
    },
    {
      title: "Pending Deliveries",
      value: dashboardStats.pendingDeliveries,
      icon: <FaTruck />,
      color: "#e65100",
    },
  ];

  return (
    <div className="dashboard-main">
      <h2 style={{ marginBottom: 24, fontWeight: 600 }}>
        📊 Dashboard Overview
      </h2>
      <div className="cards-grid">
        {statsMapping.map((stat, idx) => (
          <Card key={idx}>
            <div className="stat-card">
              <div>
                <p
                  style={{
                    color: "#5c6f66",
                    fontSize: "0.85rem",
                    fontWeight: 500,
                  }}
                >
                  {stat.title}
                </p>
                <h2
                  style={{ fontSize: "1.9rem", fontWeight: 700, marginTop: 8 }}
                >
                  {stat.value}
                </h2>
              </div>
              <div className="stat-icon" style={{ color: stat.color }}>
                {stat.icon}
              </div>
            </div>
          </Card>
        ))}
      </div>
      <RecentOrdersTable orders={recentOrders} />
    </div>
  );
};

export default Dashboard;
