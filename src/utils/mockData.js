export const initialProducts = [
  {
    id: "p1",
    name: "Farm Fresh Mixed Vegetables",
    price: 24.99,
    status: "Available",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?w=300&h=200&fit=crop",
    category: "Vegetables",
  },
  {
    id: "p2",
    name: "Organic Avocado Bundle",
    price: 35.5,
    status: "Available",
    image:
      "https://images.unsplash.com/photo-1518820190681-ecf155a95e2d?w=300&h=200&fit=crop",
    category: "Fruits",
  },
  {
    id: "p3",
    name: "Free Range Eggs (12pcs)",
    price: 8.99,
    status: "Out of Stock",
    image:
      "https://images.unsplash.com/photo-1569288057151-c0a7b8b09836?w=300&h=200&fit=crop",
    category: "Dairy",
  },
  {
    id: "p4",
    name: "Artisan Sourdough Bread",
    price: 6.49,
    status: "Available",
    image:
      "https://images.unsplash.com/photo-1585478259715-5a78812f4d3f?w=300&h=200&fit=crop",
    category: "Bakery",
  },
  {
    id: "p5",
    name: "Cold Pressed Almond Milk",
    price: 12.99,
    status: "Available",
    image:
      "https://images.unsplash.com/photo-1600783247757-eb5a8a059b53?w=300&h=200&fit=crop",
    category: "Beverages",
  },
];

export const dashboardStats = {
  totalOrders: 1247,
  revenue: 84590,
  activeUsers: 328,
  pendingDeliveries: 43,
};

export const recentOrders = [
  {
    id: "ORD-1001",
    customer: "Emily Clarke",
    total: 48.99,
    status: "Delivered",
    date: "2025-05-18",
  },
  {
    id: "ORD-1002",
    customer: "James Wilson",
    total: 32.5,
    status: "Processing",
    date: "2025-05-19",
  },
  {
    id: "ORD-1003",
    customer: "Sophia Martinez",
    total: 95.2,
    status: "Out for Delivery",
    date: "2025-05-19",
  },
  {
    id: "ORD-1004",
    customer: "Liam Johnson",
    total: 27.8,
    status: "Delivered",
    date: "2025-05-17",
  },
  {
    id: "ORD-1005",
    customer: "Olivia Brown",
    total: 63.4,
    status: "Pending",
    date: "2025-05-20",
  },
];
