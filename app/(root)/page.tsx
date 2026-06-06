import SampleData from "@/db/sample-data"
import ProductList from "@/components/shared/product/product-list"

const Home = async () => {
  return ( 
    <div>
      <h1>Home Page</h1>
      <ProductList data={SampleData.products} title="Featured Products" />
    </div>
   );
}
 
export default Home;