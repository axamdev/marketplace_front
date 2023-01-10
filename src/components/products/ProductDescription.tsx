import { Box } from "@mui/material";
import { H3 } from "components/Typography";
import React from "react";
import { useState,useCallback } from "react";
import { CartItem, useAppContext } from "contexts/AppContext";
import { Productsdata } from "utils/api/axam-products";
import { useRouter } from "next/router";
import api, { ProductsResponse } from "utils/api/axam-products";
// ======================================================
type ProductDescriptionProps = { product: Productsdata};
// ======================================================

const ProductDescription: React.FC<ProductDescriptionProps> = ({product}) => {
  const prod = product;

  const router = useRouter();
  const routerId = router.query.id as string;
  const { state,dispatch} = useAppContext();
  const cartList: CartItem[] = state.cart;
  //const [product, setProduct] = useState<ProductsResponse> ();
//  const cartItem = cartList.find(
//   (item) => item.id === prod.id || item.id === routerId
// );

//---

  return (
    <Box>
      <H3 mb={2}>Specification:</H3>
        <Box>
          {/* {prod.description} */}
         
        Fragrance Description: This is a delicious potion of joy built around the 
        gardenia flower blended with solar jasmine absolute, cheerful pear blossom accord, 
        and sweet brown sugar accord. It is a signature floral scent for all free-spirited women 
        full of positive energy
      </Box>
     
      
    </Box>
  );
};

export default ProductDescription;
