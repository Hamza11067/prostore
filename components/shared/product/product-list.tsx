import ProductCard from "./product-card";

const ProductList = ({ data, title, limit }: { data: any; title?: string; limit?: number }) => {
  return (
    <div className="my-10">
      {title && <h2 className="h2-bold pb-4">{title}</h2>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.length > 0 ? (
          data.slice(0, limit).map((product: any) => (
            <ProductCard key={product.slug} product={product} />
          ))
        ) : (
          <p>No products available.</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
