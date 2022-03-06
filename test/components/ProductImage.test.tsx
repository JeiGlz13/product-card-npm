import * as React from 'react';
import renderer from 'react-test-renderer';
import { ProductImage, ProductCard } from '../../src/components';
import { product2 } from '../data/product';

describe('Pruebas en ProductImage', () => { 
    test('Debe mostar el ProductImage correctamente', () => { 
        const wrapper = renderer.create(
            <ProductImage img='https://MyImage.jpg' />
        )

        expect(wrapper.toJSON()).toMatchSnapshot();
     });

     test('debe mostar el componente con el image del context', () => { 
        const wrapper = renderer.create(
            <ProductCard product={product2} >
                {
                    ()=>(
                        <ProductImage/>
                    )
                }
            </ProductCard>
        )

        expect(wrapper.toJSON()).toMatchSnapshot();
      });
 })