import React, { useContext } from "react";

import noImage from '../assets/no-image.jpg';
import { ProductContext } from "./ProductCard";
import { ProductImageInterface } from '../interfaces/ProductInterfaces';

export const ProductImage = ({img, className, style}: ProductImageInterface):JSX.Element =>{
    const {product} = useContext(ProductContext);

    let imgToShow: string;

    if (img) {
        imgToShow = img;
    }else if(product.img){
        imgToShow = product.img
    }else{
        imgToShow = noImage
    }
    

    return(
        <div className="lg:relative w-7/12 px-4 py-4 flex" style={style}>
            <img src= {imgToShow} alt="Product" className= {`w-full rounded-3xl ${className}`}  />
        </div>
    )
}