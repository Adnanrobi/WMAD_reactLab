import React, { useState } from 'react';
import './App.css';
import avater1 from './images/robot-ai-svgrepo-com.svg';
import avater2 from './images/robot-svgrepo-com (1).svg';
import avater3 from './images/robot-svgrepo-com (2).svg';
import avater4 from './images/robot-svgrepo-com.svg';
import image1 from './images/image1.png';
import image2 from './images/image2.png';
import image3 from './images/image3.png';
import image4 from './images/image4.png';
import Product from './Product';

function App() {
  let products = [
    {
      id: 1,
      title: 'Yellow Pail',
      description: 'On-demand sand castle construction expertise.',
      upvote: 63,
      submittedby: avater1,
      image: image1,
    },
    {
      id: 2,
      title: 'Supermajority: The Fantasy Congress League',
      description:
        'Earn points when your favorite politicians pass legislation.',
      upvote: 54,
      submittedby: avater2,
      image: image2,
    },
    {
      id: 3,
      title: 'Tinfolid: Tailored tinfoil hats',
      description: 'We already have your measurements and shipping address.',
      upvote: 30,
      submittedby: avater3,
      image: image3,
    },
    {
      id: 4,
      title: 'Haught or Naught',
      description: 'High-minded or absent-minded? You decide.',
      upvote: 61,
      submittedby: avater4,
      image: image4,
    },
  ];

  const [sortedProducts, setSortedProducts] = useState(
    products.sort((a, b) => {
      return b.upvote - a.upvote;
    })
  );

  const [renderProductsList, setRenderList] = useState(null);

  const getRenderList = () => {
    let renderProducts = sortedProducts.map((product) => (
      <Product
        key={product.id}
        id={product.id}
        title={product.title}
        description={product.description}
        upvote={product.upvote}
        submittedby={product.submittedby}
        image={product.image}
        sortAfterClick={sortAfterClick}
      />
    ));
    setRenderList(renderProducts);
  };

  const sortAfterClick = (pid) => {
    sortedProducts.map((product) => {
      if (product.id === pid) {
        product.upvote = product.upvote + 1;
      }
    });
    setSortedProducts(
      sortedProducts.sort((a, b) => {
        return b.upvote - a.upvote;
      })
    );
    getRenderList();
  };

  return (
    <div className='App'>
      <div className='app__header'><b>Popular Products</b></div>
      {renderProductsList
        ? renderProductsList
        : sortedProducts.map((product) => (
            <Product
              key={product.id}
              id={product.id}
              title={product.title}
              description={product.description}
              upvote={product.upvote}
              submittedby={product.submittedby}
              image={product.image}
              sortAfterClick={sortAfterClick}
            />
          ))}
    </div>
  );
}

export default App;
