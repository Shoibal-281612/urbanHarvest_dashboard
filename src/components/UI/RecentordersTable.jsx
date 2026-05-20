import React from "react";
import "./Card.css";

const RecentOrdersTable = ({ orders }) => {
  const getStatusBadge = (status) => {
    const colorMap = {
      Delivered: "#2e7d32",
      Processing: "#ff9800",
      "Out for Delivery": "#2196f3",
      Pending: "#ef5350",
    };
    return {
      backgroundColor: colorMap[status] || "#9e9e9e",
      color: "white",
      padding: "4px 12px",
      borderRadius: "40px",
      fontSize: "0.7rem",
      fontWeight: 600,
    };
  };

  return (
    <div className="dashboard-card" style={{ overflowX: "auto" }}>
      <h3 style={{ marginBottom: 20, fontSize: "1.3rem" }}>📦 Recent Orders</h3>
      <table
        style={{ width: "100%", borderCollapse: "collapse", minWidth: "480px" }}
      >
        <thead>
          <tr>
            <th
              style={{
                textAlign: "left",
                padding: "12px 8px",
                borderBottom: "2px solid #eef2f0",
              }}
            >
              Order ID
            </th>
            <th
              style={{
                textAlign: "left",
                padding: "12px 8px",
                borderBottom: "2px solid #eef2f0",
              }}
            >
              Customer
            </th>
            <th
              style={{
                textAlign: "left",
                padding: "12px 8px",
                borderBottom: "2px solid #eef2f0",
              }}
            >
              Total
            </th>
            <th
              style={{
                textAlign: "left",
                padding: "12px 8px",
                borderBottom: "2px solid #eef2f0",
              }}
            >
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id} style={{ borderBottom: "1px solid #f0f2f5" }}>
              <td style={{ padding: "12px 8px", fontWeight: 500 }}>
                {order.id}
              </td>
              <td style={{ padding: "12px 8px" }}>{order.customer}</td>
              <td style={{ padding: "12px 8px", fontWeight: 600 }}>
                ${order.total.toFixed(2)}
              </td>
              <td style={{ padding: "12px 8px" }}>
                <span style={getStatusBadge(order.status)}>{order.status}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentOrdersTable;
