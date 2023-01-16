import { Grid, Pagination } from "@mui/material";
import { FlexBetween } from "components/flex-box";
import ProductCard1 from "components/product-cards/ProductCard1";
import { Span } from "components/Typography";
import productDatabase from "data/product-database";
import { Productsdata, ProductsResponse } from "utils/api/axam-products";
import React, { Fragment, useEffect, useState,useCallback } from "react";
import { useRouter } from "next/router";
import { CartItem, useAppContext } from "contexts/AppContext";

// ========================================================
type ProductCard1ListProps = {
  product: Productsdata[];

  
};
// ========================================================

const ProductCard1List: React.FC<ProductCard1ListProps> = ({product}) => {
  
  const prod = product;
  const router = useRouter();
  const routerId = router.query.id as string;
  const { state, dispatch } = useAppContext();
  const cartList: CartItem[] = state.cart;
  

  console.log("show prod");
  console.log(prod);

  return (
    <Fragment>
      {prod &&
      <Grid container spacing={3} >
        {prod.map((item, ind) => (
          <Grid item lg={4} sm={6} xs={12} key={ind}>
            <ProductCard1 
             key={ind}
             id={item.id}
             title={item.name}
             price={item.min_max_price.min_price}
             off={item.min_max_price.discount_in_percentage}
             rating={Number(item.rating)}
             imgUrl={item.image}
             category_name={item.category_name}
             short_description={item.short_description} />
          </Grid>
        ))}
      </Grid>
}
      <FlexBetween flexWrap="wrap" mt={4}>
        <Span color="grey.600">Montrant 1-9 de 1.3k Produits</Span>
        <Pagination count={10} variant="outlined" color="primary" />
      </FlexBetween>
    </Fragment>
  );
};

export default ProductCard1List;