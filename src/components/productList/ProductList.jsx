import Product from '../product/Product';
import './productList.css';
import { products } from './../../data';

const ProductList = () => {

  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Create</h1>
        <p className="pl-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Nulla omnis earum ab velit? Velit, doloremque maiores culpa
          expedita similique amet asperiores cumque, harum unde nobis ducimus,
          perspiciatis at. Repellat, dolor!
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link}/>
        ))}
      </div>
    </div>
  )
}
export default ProductList; 