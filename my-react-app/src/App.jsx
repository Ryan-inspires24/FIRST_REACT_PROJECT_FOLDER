import { useEffect, useState } from 'react';
import './App.css';
import DefaultItem from './components/lists/lists';
import { useQuery } from '@tanstack/react-query';

function App() {
  const [showProducts, setShowProducts] = useState(false);
  const { isloading, error, data} = useQuery({
    queryKey: ['products'],
    queryFn: () => {
      return fetch('http://localhost:5000/api/products')

        .then((res) => res.json());  
    },
    enabled: showProducts,
  });

    const handleShowProducts = () => {
      setShowProducts(true);
    }

      return (
        <>
          <h1>All Products</h1>
<button onClick={handleShowProducts}>Show All Products</button>
         {isloading && <h2>Loading Products...</h2>}
         {error && <h2>Error fetching products</h2>}
      {data && Array.isArray(data) ? (
        <div>
          {data.map((item) => (
            <DefaultItem key={item.id} item={item} />
          ))}
        </div>
      ) : (
        data && <h2>Unexpected data format</h2>
      )}
                {data && !Array.isArray(data) && <h2>Unexpected data format</h2>}

        </>

      );
    }

    export default App;
