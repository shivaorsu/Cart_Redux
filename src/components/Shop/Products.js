import ProductItem from './ProductItem';
import classes from './Products.module.css';


const DUMMY_PRODUCT= [
  {
    id: "p1",
    price: 6,
    title: "My first Book",
    description: "First book I wrote",
  },

  {
    id: "p2",
    price: 12,
    title: "My second Book",
    description: "Second book I wrote",
  },
]


const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCT.map((product)=>(
          <ProductItem
          key={product.id}
          title={product.title}
          price={product.price}
          id={product.id}
          description={product.description}
        />
        ))}
        
      </ul>
    </section>
  );
};

export default Products;
