import { useEffect, useState } from 'react';
import './App.css';
import DefaultItem from './components/lists/lists';
import { useQuery } from '@tanstack/react-query';

function App() {
  const [showProducts, setShowProducts] = useState(false);
  const fetchProducts = async () =>{
    const response = await fetch('products.json');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  }
  const { isloading, error, data} = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
    refetchOnWindowFocus: false,
    enabled: showProducts,
  });

    const handleShowProducts = () => {
      setShowProducts((prev) => !prev);

    }
    

      return (
        <>
          <h1>All Products</h1>
  <button className='togglebtn' onClick={handleShowProducts}>{showProducts ? 'Hide Products' : 'Show Products'} 
</button>
          {!showProducts && <h2 className='mssg'>No Products here</h2>}
         {isloading && <h2 className='mssg'>Loading Products...</h2>}
         {error && <h2 className='mssg'>Error fetching products</h2>}
      {showProducts && data && Array.isArray(data) ? (
        <div className='productsDiv'>
          {data.map((item) => (
            <DefaultItem key={item.id} item={item} />
          ))}
        </div>
      ) : (
        data && <h2>Unexpected data format</h2>
      )}

        </>

      );
    }

    export default App;
