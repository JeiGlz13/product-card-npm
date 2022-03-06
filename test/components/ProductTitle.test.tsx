import React from 'react';
import renderer from 'react-test-renderer';
import { ProductTitle, ProductCard } from '../../src/components';
import { product1 } from '../data/product';


describe('Pruebas en el ProductTitle', () => { 
    test('debe mostrar el titulo personalizado', () => { 
        const wrapper = renderer.create(
            <ProductTitle title='Custom Product' desc='Product description' />
        )

        expect(wrapper.toJSON()).toMatchSnapshot();
     });

     test('debe mostar el componente con el title del context', () => { 
        const wrapper = renderer.create(
            <ProductCard product={product1} >
                {
                    ()=>(
                        <ProductTitle/>
                    )
                }
            </ProductCard>
        )

        expect(wrapper.toJSON()).toMatchSnapshot();
      });
 });
