import React from "react";
import "./ValueCard.css";

export default function ValueCard({ title, description, subtitle, image }) {
    return (
        <div className="value-card">
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p className="value-subtitle">{subtitle}</p>
            <div className="values-separator "></div>
            <p>{description}</p>
        </div>
    )
}