import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "../components/UI/ProductCard";
import Modal from "../components/UI/Modal";
import { addProduct, setSearchTerm } from "../Store/Slices/productSlice";
import { FaPlus, FaSearch } from "react-icons/fa";
import "./ProductManagement.css";

const ProductManagement = () => {
  const dispatch = useDispatch();
  const { items, searchTerm } = useSelector((state) => state.products);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    status: "Available",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?w=300&h=200&fit=crop",
  });

  const filteredProducts = items.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const handleAddProduct = () => {
    if (!newProduct.name || !newProduct.price) return;
    const productToAdd = {
      id: Date.now().toString(),
      name: newProduct.name,
      price: parseFloat(newProduct.price),
      status: newProduct.status,
      image:
        newProduct.image ||
        "https://images.unsplash.com/photo-1542838132-92c53300491e?w=300&h=200&fit=crop",
    };
    dispatch(addProduct(productToAdd));
    setNewProduct({ name: "", price: "", status: "Available", image: "" });
    setIsModalOpen(false);
  };

  return (
    <div className="products-page">
      <div className="actions-bar">
        <div style={{ position: "relative" }}>
          <FaSearch
            style={{
              position: "absolute",
              left: 18,
              top: "50%",
              transform: "translateY(-50%)",
              color: "#8faa99",
            }}
          />
          <input
            type="text"
            placeholder="Search products..."
            className="search-input"
            style={{ paddingLeft: 44 }}
            value={searchTerm}
            onChange={(e) => dispatch(setSearchTerm(e.target.value))}
          />
        </div>
        <button className="add-btn" onClick={() => setIsModalOpen(true)}>
          <FaPlus /> Add Product
        </button>
      </div>
      {filteredProducts.length === 0 ? (
        <div style={{ textAlign: "center", marginTop: 80, opacity: 0.6 }}>
          ✨ No products match your search
        </div>
      ) : (
        <div className="products-grid">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h3 style={{ marginBottom: 20 }}>🌾 New Product</h3>
        <div className="form-group">
          <label>Product Name</label>
          <input
            type="text"
            value={newProduct.name}
            onChange={(e) =>
              setNewProduct({ ...newProduct, name: e.target.value })
            }
          />
        </div>
        <div className="form-group">
          <label>Price ($)</label>
          <input
            type="number"
            step="0.01"
            value={newProduct.price}
            onChange={(e) =>
              setNewProduct({ ...newProduct, price: e.target.value })
            }
          />
        </div>
        <div className="form-group">
          <label>Status</label>
          <select
            value={newProduct.status}
            onChange={(e) =>
              setNewProduct({ ...newProduct, status: e.target.value })
            }
          >
            <option>Available</option>
            <option>Out of Stock</option>
          </select>
        </div>
        <div className="form-group">
          <label>Image URL (optional)</label>
          <input
            type="text"
            placeholder="https://..."
            value={newProduct.image}
            onChange={(e) =>
              setNewProduct({ ...newProduct, image: e.target.value })
            }
          />
        </div>
        <div className="modal-actions">
          <button
            onClick={() => setIsModalOpen(false)}
            style={{
              background: "#ddd",
              padding: "8px 22px",
              borderRadius: 60,
              border: "none",
            }}
          >
            Cancel
          </button>
          <button
            onClick={handleAddProduct}
            style={{
              background: "#2e7d32",
              padding: "8px 22px",
              borderRadius: 60,
              border: "none",
              color: "white",
            }}
          >
            Add Product
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default ProductManagement;
