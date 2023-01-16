
import { Apps, FilterList, ViewList } from "@mui/icons-material";
import {
  Box,
  Card,
  Container,
  Grid,
  IconButton,
  MenuItem,
  TextField,
  Theme,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { FlexBox } from "components/flex-box";
import ShopLayout1 from "components/layouts/ShopLayout1";
import Navbar from "components/navbar/Navbar";
import ProductCard1List from "components/products/ProductCard1List";
import ProductCard9List from "components/products/ProductCard9List";
import ProductFilterCard from "components/products/ProductFilterCard";
import Sidenav from "components/sidenav/Sidenav";
import { H5, H2,Paragraph } from "components/Typography";
import { useCallback } from "react";
import Router, { useRouter } from "next/router";
import api, {  ProductsResponse } from "utils/api/axam-products";
import React, { useEffect,useState } from "react";
const ProductCategoryResult = () => {
  const [view, setView] = useState("grid");
  const downMd = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));

  const toggleView = useCallback((v) => () => setView(v), []);
  const router = useRouter()
  const category_id = parseInt(router.query.id as string);
  const [ListProducts, setListProducts] = useState<ProductsResponse> ();
  useEffect(() => {
    api.get_productsByCategory(category_id).then((data)=>setListProducts(data)    )
  }, []);
   console.log(ListProducts)
   const ProductsCat=ListProducts?.data
 

  return (
    <ShopLayout1>
      <Container sx={{ mt: 4, mb: 6 }}>
        <Card
          elevation={1}
          sx={{
            mb: "55px",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            p: {
              sm: "1rem 1.25rem",
              md: "0.5rem 1.25rem",
              xs: "1.25rem 1.25rem 0.25rem",
            },
          }}>
       
          <Box>
          { ProductsCat && ProductsCat.length> 0?  <H5>{`Rechercher  ${ProductsCat[0].category_name}`}</H5>:null}      
           { ListProducts  &&  ProductsCat.length> 0?  <Paragraph color="grey.600">{`${ListProducts.total} résultats trouvés` }</Paragraph> :null}
          
          </Box>
         
          <FlexBox
            alignItems="center"
            columnGap={4}
            flexWrap="wrap"
            my="0.5rem"
          >
            <FlexBox alignItems="center" gap={1} flex="1 1 0">
              <Paragraph color="grey.600" whiteSpace="pre">
               Trier par
              </Paragraph>

              <TextField
                select
                fullWidth
                size="small"
                variant="outlined"
                placeholder="Short by"
                defaultValue={sortOptions[0].value}
                sx={{ flex: "1 1 0", minWidth: "150px" }}
              >
                {sortOptions.map((item) => (
                  <MenuItem value={item.value} key={item.value}>
                    {item.label}
                  </MenuItem>
                ))}
              </TextField>
            </FlexBox>

            <FlexBox alignItems="center" my="0.25rem">
              <Paragraph color="grey.600" mr={1}>
                {/* View: */}
                Affichage               
              </Paragraph>

              <IconButton onClick={toggleView("grid")}>
                <Apps
                  color={view === "grid" ? "primary" : "inherit"}
                  fontSize="small"
                />
              </IconButton>

              <IconButton onClick={toggleView("list")}>
                <ViewList
                  color={view === "list" ? "primary" : "inherit"}
                  fontSize="small"
                />
              </IconButton>

              {downMd && (
                <Sidenav
                  handle={
                    <IconButton>
                      <FilterList fontSize="small" />
                    </IconButton>
                  }
                >
                  <ProductFilterCard />
                </Sidenav>
              )}
            </FlexBox>
          </FlexBox>
        </Card>

        <Grid container spacing={3}>
          <Grid item md={3} sx={{ display: { md: "block", xs: "none" } }}>
            <ProductFilterCard />
          </Grid>

          <Grid item md={9} xs={12}>
          {/* {product ? <ProductCardList   product={product} />: <H2>Loading...</H2>} */}

            {ListProducts &&  view === "grid" ? <ProductCard1List  product={ProductsCat}  /> : <ProductCard9List product={ProductsCat}  />  }
          </Grid>
        </Grid>
      </Container>
    </ShopLayout1>
  );
};

const sortOptions = [
  // { label: "Relevance", value: "Relevance" },
  { label: "pertinence", value: "Relevance" },
  { label: "Date", value: "Date" },
  // { label: "Price Low to High", value: "Price Low to High" },
  { label: "Prix ​​bas à élevé", value: "Price Low to High" },

  // { label: "Price High to Low", value: "Price High to Low" },
  { label: "Prix élevé à bas", value: "Price High to Low" }

];

export default ProductCategoryResult;












