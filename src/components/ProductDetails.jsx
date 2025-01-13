import { useParams, Link } from "react-router";
import { useEffect, useState } from "react";

export default function ProductDetails() {
  const [product, setProduct] = useState({});
  const [products, setProducts] = useState([]);
  let { productID } = useParams();

  const getSpecificProductFromCategory = () => {
    fetch(`https://fakestoreapi.com/products/${productID}`)
      .then((res) => res.json())
      .then((product) => {
        setProduct(product);
      });
  };

  const getProductInCategory = () => {
    if (product.category) {
      fetch(`https://fakestoreapi.com/products/category/${product.category}`)
        .then((res) => res.json())
        .then((data) => setProducts(data));
    }
  };

  useEffect(() => {
    getSpecificProductFromCategory();
    getProductInCategory();
  }, [productID, product.category]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container p-3">
      <h1 className="mb-5">Product #{productID}</h1>
      <div className="details d-flex">
        <img
          src={product.image}
          alt={product.title}
          style={{ width: "300px", height: "300px", marginRight: "50px" }} 
        />
        <div>
          <h3><b>Title: </b> <span style={{ color: "#777" }}>{product.title}</span></h3>
          <h4><b>Category: </b><span style={{ color: "#777" }}>{product.category}</span></h4>
          <h4><b>Description: </b><span style={{ color: "#777" }}>{product.description}</span></h4>
          <h4><b>Price: </b><span className="bg-primary-subtle">{`${product.price}$`}</span></h4>
        </div>
      </div>

      <h2 className="mt-5 mb-3">Related Products</h2>
      <div className="d-flex flex-wrap gap-3">
        {products.map((relatedProduct) => (
            <div className="card mb-3" style={{ width: "24%" }} key={relatedProduct.id}>
              <div className="image text-center p-2">
                <img
                  src={relatedProduct.image}
                  className="card-img-top"
                  alt={relatedProduct.title}
                  style={{ height: "150px", width: "100px" }}
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">{relatedProduct.title}</h5>
                <p className="card-text">{`${relatedProduct.description.slice(0, 100)}...`}</p>
                <Link to={`/product/${relatedProduct.id}`} className="btn btn-primary"
                onClick={() => {
                  window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                  });
                }} >
                  Details
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}