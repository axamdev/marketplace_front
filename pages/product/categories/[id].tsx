
import { Apps, FilterList, ViewList } from "@mui/icons-material";
import {
  Box,
  Card,
  Container,
  Grid,
  IconButton,
  MenuItem,
  Select,
  SelectChangeEvent,
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
import { useSelector } from "react-redux";
import { getProducts, getProductsSliceSelector } from "redux/productSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "redux/store";
const ProductCategoryResult = () => {
  const [view, setView] = useState("grid");
  const [tri,setTri] =useState("");
  const downMd = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));

  const toggleView = useCallback((v) => () => setView(v), []);
  const router = useRouter()

  const category_id = parseInt(router.query.id as string);
  // const [ListProducts, setListProducts] = useState<ProductsResponse> ();
  const dispatch = useDispatch<AppDispatch>();
  const {data,total}= useSelector(getProductsSliceSelector)

  const handleChangeSelect =(event:SelectChangeEvent)=>{
    const value = event.target.value as string;
    setTri(value);
var sort ;
var order ;

  if( value == 'p.date_added_ASC'){
    sort = 'p.date_added'
    order= 'ASC'
  }
  if( value == 'p.date_added_DESC'){
    sort = 'p.date_added'
    order= 'DESC'
  }
  if( value == 'pv.price_ASC'){
    sort = 'pv.price'
    order= 'ASC'
  }
  if( value == 'pv.price_DESC'){
    sort = 'pv.price'
    order= 'DESC'
  }
    // dispatch new data with new params 
    dispatch(getProducts({category_id:category_id.toString(),sort:sort,order:order}))
  }


  useEffect(() => {
    // api.get_productsByCategory(category_id).then((data)=>setListProducts(data)    )
   dispatch(getProducts({category_id:category_id.toString()}))
    // setListProducts(data) 
  }, [category_id]);
  // console.log("data is here",ListProducts)
  console.log(category_id)



    //const ProductsCat=ListProducts?.data
 

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
          { data && data?.length> 0?  <H5>{`Rechercher  ${data[0].category_name}`}</H5>:null}      
           { data  &&  data?.length> 0?  <Paragraph color="grey.600">{`${total} résultats trouvés` }</Paragraph> :null}
          
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

              <Select
                
                fullWidth
                size="small"
                
                label="trié par "
                onChange={handleChangeSelect}
                value={tri}
                sx={{ flex: "1 1 0", minWidth: "150px" }}
              >
                {sortOptions.map((item) => (
                  <MenuItem  value={item.value} key={item.value}>
                    {item.label}
                  </MenuItem>
                ))}
              </Select>
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
                  <ProductFilterCard category_id={category_id} />
                </Sidenav>
              )}
            </FlexBox>
          </FlexBox>
        </Card>

        <Grid container spacing={3}>
          <Grid item md={3} sx={{ display: { md: "block", xs: "none" } }}>
            <ProductFilterCard category_id={category_id}/>
          </Grid>

       {
        data && <Grid item md={9} xs={12}>
          {/* {product ? <ProductCardList   product={product} />: <H2>Loading...</H2>} */}

            {data &&  view === "grid" ? <ProductCard1List  product={data}  /> : <ProductCard9List product={data}  />  }
          </Grid>
       }  
        </Grid>
      </Container>
    </ShopLayout1>
  );
};

const sortOptions = [
  // { label: "Relevance", value: "Relevance" },
  { label: "les plus anciens", value: "p.date_added_ASC" },
  { label: "les plus récentes", value: "p.date_added_DESC" },
  // { label: "Price Low to High", value: "Price Low to High" },
  { label: "Prix ​​bas à élevé", value: "pv.price_ASC" },

  // { label: "Price High to Low", value: "Price High to Low" },
  { label: "Prix élevé à bas", value: "pv.price_DESC" }

];

export default ProductCategoryResult;












