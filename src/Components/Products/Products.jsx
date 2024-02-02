import React, { useEffect, useState } from "react";
import { addCard } from "../../Feature/cardSlice";
import { useDispatch } from "react-redux";

const Products = () => {
  const [products, setProduct] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      console.log(data);
      setProduct(data);
    };
    fetchProducts();
  }, []);

  const handlre = (product) => {
    dispatch(addCard(product));
  };

  return (
    <div className="flex flex-wrap bg-[#eee] justify-center">
      {products.map((product) => {
        return (
          <div
            className="w-[240px] m-[10px] p-[20px] flex flex-wrap justify-center rounded bg-[white] box-border"
            key={product.id}
          >
            <img className="h-[80px] my-[10px] " src={product.image} alt="" />
            <h4 className="w-[100%]">{product.title}</h4>
            <h5 className="w-[100%] my-[10px]">{product.price}</h5>
            <button
              onClick={() => {
                handlre(product);
              }}
              className="bg-[blue] text-white px-[15px] py-[5px] rounded cursor-pointer"
            >
              Add Card
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
