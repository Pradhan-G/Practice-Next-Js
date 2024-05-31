import Link from "next/link";

const ProductsNumber = (x) => {
  console.log(x.params);
  return (
    <div>
      <h1 className="text-[50px]">
        This is the localhost:3000/products/{x.params.productNumber} route and
        its a <span className="text-blue-600">dynamic route</span>
      </h1>
    </div>
  );
};

export default ProductsNumber;
