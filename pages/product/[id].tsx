import { Update } from "@mui/icons-material";
import { Box, Container, styled, Tab, Tabs } from "@mui/material";
import ShopLayout1 from "components/layouts/ShopLayout1";
import Navbar from "components/navbar/Navbar";
import AvailableShops from "components/products/AvailableShops";
import FrequentlyBought from "components/products/FrequentlyBought";
import ProductDescription from "components/products/ProductDescription";
import ProductIntro from "components/products/ProductIntro";
import ProductReview from "components/products/ProductReview";
import RelatedProducts from "components/products/RelatedProducts";
import { H2 } from "components/Typography";
import bazaarReactDatabase from "data/bazaar-react-database";
import { id } from "date-fns/locale";
import { FC, useEffect, useState } from "react";
import api, { ProductsResponse } from "utils/api/axam-products";

import {
  getFrequentlyBought,
  getRelatedProducts,
} from "utils/api/related-products";

const StyledTabs = styled(Tabs)(({ theme }) => ({
  minHeight: 0,
  marginTop: 80,
  marginBottom: 24,
  borderBottom: `1px solid ${theme.palette.text.disabled}`,
  "& .inner-tab": {
    minHeight: 40,
    fontWeight: 600,
    textTransform: "capitalize",
  },
}));

// ===============================================================
type ProductDetailsProps = {
  frequentlyBought?: any[];
  relatedProducts?: any[];
};
// ===============================================================

const ProductDetails: FC<ProductDetailsProps> = (props) => {
  // const { frequentlyBought, relatedProducts } = props;

  // const [product, setProduct] = useState(bazaarReactDatabase[0]);
  const [product, setProduct] = useState<ProductsResponse> ();
  const [selectedOption, setSelectedOption] = useState(0);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [frequentlyBought, setFrequentlyBought] = useState([]);
  // let idP: number = id.code 
  /**
   * Note:
   * ==============================================================
   * 1. We used client side rendering with dummy fake data for related products and frequently product
   * 2. Product details data is static data, we didn't call any rest api
   * 3. If you fetch data from server we recommended you to call getStaticProps function in below.
   *    The code is commented if want to call it just uncomment code and put the server url
   */
  useEffect(() => {
    getRelatedProducts().then((data) => setRelatedProducts(data));
    getFrequentlyBought().then((data) => setFrequentlyBought(data));
    api.get_products(6).then((data)=> setProduct(data)    )
  }, []);

  const handleOptionClick = (_, value: number) => setSelectedOption(value);
  console.log("before getting id ") ;
    console.log(id) ;
      console.log("after getting id ") ;
  return (

    <ShopLayout1>
      <Container sx={{ my: 4 }}>
        {product ? <ProductIntro product={product.data[0]} /> : <H2>Loading...</H2>} 
        
        
        {product ? <H2>{product.data[0].name}</H2> : <H2>Loading...</H2>}
        {/* <StyledTabs
          textColor="primary"
          value={selectedOption}
          indicatorColor="primary"
          onChange={handleOptionClick}
        >
          <Tab className="inner-tab" label="Description" />
          <Tab className="inner-tab" label="Review (3)" />
        </StyledTabs>

        <Box mb={6}>
          {selectedOption === 0 && <ProductDescription />}
          {selectedOption === 1 && <ProductReview />}
        </Box>

        {frequentlyBought && (
          <FrequentlyBought productsData={frequentlyBought} />
        )}

        <AvailableShops />

        {relatedProducts && <RelatedProducts productsData={relatedProducts} />} */}


      </Container>
    </ShopLayout1>
  );
};

// export const getStaticPaths: GetStaticPaths = async () => {
//   const paths = bazaarReactDatabase.slice(0, 2).map((pro) => ({ params: { id: pro.id } }));

//   return {
//     paths: [], //indicates that no page needs be created at build time
//     fallback: "blocking", //indicates the type of fallback
//   };
// };

// export async function getStaticProps() {
//   const frequentlyBought = await getFrequentlyBought();
//   const relatedProducts = await getRelatedProducts();

//   return {
//     props: { frequentlyBought, relatedProducts },
//   };
// }

export default ProductDetails;
