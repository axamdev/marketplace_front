import { Grid, Pagination } from "@mui/material";
import { FlexBetween } from "components/flex-box";
import ProductCard1 from "components/product-cards/ProductCard1";
import { Span } from "components/Typography";
import productDatabase from "data/product-database";
import  { Fragment } from "react";
import api, {  ProductsCategoryResponse,Productsdata } from "utils/api/axam-products";
import React, { useEffect,useState } from "react";
import Router, { useRouter } from "next/router";

// ========================================================
type ProductCard1ListProps = {};
// ========================================================

const ProductCard1List: React.FC<ProductCard1ListProps> = () => {
  const [Catproducts, setCatProduct] = useState<Productsdata[]> ();
 const router = useRouter()
  const category_id = parseInt(router.query.id as string);
  useEffect(() => {
    api.get_productsByCategory(category_id).then((data)=>setCatProduct(data.data)    )
  }, []);
  //console.log(product);
  console.log(Catproducts)
  return (
    <Fragment>
      <Grid container spacing={3}>
        {/* {productDatabase.slice(95, 104).map((item, ind) => (
          <Grid item lg={4} sm={6} xs={12} key={ind}>
            <ProductCard1 {...item} />
          </Grid>
        ))} */}
        {
          Catproducts?.slice(0,9).map((item, ind) => (
            <Grid item lg={4} sm={6} xs={12} key={ind}>
               <ProductCard1 {...item} />
            </Grid>
          ))
        }
      </Grid>

      <FlexBetween flexWrap="wrap" mt={4}>
        <Span color="grey.600">Showing 1-9 of 1.3k Products</Span>
        <Pagination count={10} variant="outlined" color="primary" />
      </FlexBetween>
    </Fragment>
  );
};

export default ProductCard1List;
