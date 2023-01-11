import { Box } from "@mui/material";
import { H3 } from "components/Typography";
import React, { useEffect } from "react";
import { useState,useCallback } from "react";
import { CartItem, useAppContext } from "contexts/AppContext";
import { Productsdata } from "utils/api/axam-products";
import { useRouter } from "next/router";
import api, { ProductsResponse } from "utils/api/axam-products";
// ======================================================
type ProductDescriptionProps = {};
// ======================================================

const ProductDescription: React.FC<ProductDescriptionProps> = () => {
  //const prod = product;
  const { state,dispatch} = useAppContext();
  const cartList: CartItem[] = state.cart;
  const router = useRouter()
  const pId =parseInt(router.query.id as string, 10)
  const [product, setProduct] = useState<Productsdata[]> ();

  useEffect(() => {
    api.get_products(pId).then((data)=> setProduct(data.data)    )
  }, []);
console.log(product);
//---

  return (
    <Box>
   
      <H3 mb={2}>Specification:</H3>
      {product ?
        <Box>
          
          {product[0].short_description}
        {/* Fragrance Description: This is a delicious potion of joy built around the 
        gardenia flower blended with solar jasmine absolute, cheerful pear blossom accord, 
        and sweet brown sugar accord. It is a signature floral scent for all free-spirited women 
        full of positive energy */}
      </Box>
      : <H3>Loading...</H3>}
    </Box>
  );
};

export default ProductDescription;
