import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductCard, ProductTitle, ProductImage, ProductButtons } from '../.';

const product = {
  id: '1',
  title: 'Coffee Mug',
  desc: 'Coffee is darkly colored, bitter, slightly acidic and has a stimulating effect in humans',
  //img: './coffee-mug.png'
}

const App = () => {
  return (
    <>
        <ProductCard product={product} 
            initialValues = {{
              count: 4,
              maxCount: 10
              }} >
                {
                ()=>(
                    <>
                      <div className="mt-3 md:mt-4 lg:mt-0 flex flex-col lg:flex-row justify-center ">
                        <ProductImage  />
                        <ProductTitle  />
                      </div>
                      <ProductButtons />

                    </>
                  )
                }
            </ProductCard>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
