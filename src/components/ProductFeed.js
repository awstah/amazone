import Product from "./Product";

function ProductFeed({ products }) {
  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52">
      {products.slice(0, 4).map((product) => (
        <Product key={product.id} {...product} />
      ))}

      <img
        src="https://links.papareact.com/dyz"
        alt=""
        className="md:col-span-full"
      />

      <div className="md:col-span-2 ">
        {products.slice(4, 5).map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
      {products.slice(6, products.length).map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  );
}

export default ProductFeed;
