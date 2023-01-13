import { Pagination } from "@mui/material";
import { FlexBetween } from "components/flex-box";
import ProductCard9 from "components/product-cards/ProductCard9";
import productDatabase from "data/product-database";
import React from "react";
import { Span } from "../Typography";
import { useRouter } from "next/router";
import { Productsdata, ProductsResponse } from "utils/api/axam-products";
import { CartItem, useAppContext } from "contexts/AppContext";

// ==========================================================
type ProductCard9ListProps = {
  product: Productsdata[];
};
// ==========================================================

const ProductCard9List: React.FC<ProductCard9ListProps> = ({product}) => {
  const prod = product;
  const router = useRouter();
  const routerId = router.query.id as string;
  const { state, dispatch } = useAppContext();
  const cartList: CartItem[] = state.cart;
  
  console.log("show autre prod");
  console.log(prod);
  return (
    <div>
       {prod &&<>{prod.slice(0, 10).map((item, ind) => (
        <ProductCard9
        id={item.id}
        title={item.name}
        price={item.min_max_price.min_price}
        off={item.min_max_price.discount_in_percentage}
        rating={Number(item.rating)}
        imgUrl={item.image}
        category_name={item.category_name}
        short_description={item.short_description}/>
      ))}</>}

      <FlexBetween flexWrap="wrap" mt={4}>
        <Span color="grey.600">Montrant 1-9 de 1.3k Produits</Span>
        <Pagination count={10} variant="outlined" color="primary" />
      </FlexBetween>
    </div>
  );
};

export default ProductCard9List;
