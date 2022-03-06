# jg-product-card

Este es un paquete de prueba de despliegue en npm
consta de un card de productos con titulo, descripcion, imagen y contador de productos agregados

### Jeisson Gonzalez

##Ejemplo 

```
import {ProductCard, ProductImage, ProductTitle, ProductButtons} from 'jg-product-card'
```


```
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
```