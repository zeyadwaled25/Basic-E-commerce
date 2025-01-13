import { useState, useEffect } from "react";
import { Link } from "react-router";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const getProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }
  const getCategories = () => {
    fetch('https://fakestoreapi.com/products/categories')
      .then((res) =>res.json())
      .then((data) => setCategories(data))
  }
  const getProductInCategory = (category) => {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then((res) =>res.json())
      .then((data) => setProducts(data))
  }

  useEffect(() => {
    getProducts()
    getCategories()
  }, []);

  return (
    <>
      <div className="container mb-5">
        <div className="buttons text-center p-5">
          {categories.map((category) => {
            return (
              <button key={category} className="btn btn-info me-2" onClick={() => {getProductInCategory(category)}}>{category}</button>
            )
          })}
          <button className="btn btn-info me-2" onClick={getProducts}>ALL</button>
        </div>
        <div className="row cards gap-3">
        {products.map((product) => {
          return (
            <div className="card" style={{ width: "24%" }} key={product.id}>
              <div className="image text-center p-2">
                <img src={product.image} className="card-img-top" alt={product.title} 
                  style={{height:'150px', width:'100px'}}  
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{`${product.description.slice(0, 100)}...`}</p>
                <Link to={`/product/${product.id}`} className="btn btn-primary">
                  Details
                </Link>
              </div>
            </div>
            )
          })}
        </div>
      </div>
    </>
  );
}
