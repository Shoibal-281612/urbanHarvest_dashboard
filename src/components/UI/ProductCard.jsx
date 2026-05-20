import React from "react";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../Store/Slices/productSlice";
import { FaTrash } from "react-icons/fa";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    if (window.confirm(`Delete "${product.name}"?`)) {
      dispatch(deleteProduct(product.id));
    }
  };

  return (
    <div className="product-card-item">
      <img src={product.image} alt={product.name} className="product-img" />
      <div className="product-info">
        <h4 style={{ marginBottom: 6 }}>{product.name}</h4>
        <p style={{ color: "#2e7d32", fontWeight: 700, marginBottom: 12 }}>
          ${product.price.toFixed(2)}
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span
            className={`status-tag status-${product.status.replace(/\s/g, "-")}`}
          >
            {product.status}
          </span>
          <button
            onClick={handleDelete}
            style={{
              background: "none",
              border: "none",
              color: "#af4c4c",
              cursor: "pointer",
            }}
          >
            <FaTrash />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
