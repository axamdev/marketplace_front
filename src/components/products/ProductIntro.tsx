/* eslint-disable react-hooks/exhaustive-deps */
import { Add, Remove } from "@mui/icons-material";
import { Box, Grid } from "@mui/material";
import BazaarAvatar from "components/BazaarAvatar";
import BazaarButton from "components/BazaarButton";
import BazaarRating from "components/BazaarRating";
import LazyImage from "components/LazyImage";
import { H1, H2, H3, H6 } from "components/Typography";
import { CartItem, useAppContext } from "contexts/AppContext";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";
import { Productsdata } from "utils/api/axam-products";
// import ImageViewer from "react-simple-image-viewer";
import { FlexBox, FlexRowCenter } from "../flex-box";

// ================================================================
type ProductIntroProps = {
  product: Productsdata;
};
// ================================================================

const ProductIntro: React.FC<ProductIntroProps> = ({ product }) => {
  const prod = product;

  const router = useRouter();
  const routerId = router.query.id as string;

  const [selectedImage, setSelectedImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [ImageList, setImageList] = useState([]);

  const { state, dispatch } = useAppContext();
  const cartList: CartItem[] = state.cart;
  const cartItem = cartList.find(
    (item) => item.id === prod.id || item.id === routerId
  );

  const handleImageClick = (ind: number) => () => {
    setSelectedImage(ind);
  };

  // const openImageViewer = useCallback((index) => {
  //   setCurrentImage(index);
  //   setIsViewerOpen(true);
  // }, []);

  // const closeImageViewer = () => {
  //   setCurrentImage(0);
  //   setIsViewerOpen(false);
  // };
var price: number =  +prod.variants[0].special_price ;
  const handleCartAmountChange = useCallback(
    (amount) => () => {
      dispatch({
        type: "CHANGE_CART_AMOUNT",
        payload: {
          price ,
          qty: amount,
          name: prod.name,
          imgUrl: prod.image,
          id: prod.id || routerId,
        },
      });
    },
    []
  );
  useEffect(() => {
    ImageList.push(prod.other_images);
    ImageList.push(prod.image) ; 
  
    
  }, []);
  return (
    <Box width="100%">
      <Grid container spacing={3} justifyContent="space-around">
        <Grid item md={6} xs={12} alignItems="center">
          <FlexBox justifyContent="center" mb={6}>
            <LazyImage
              width={300}
              alt={prod.name}
              height={300}
              loading="eager"
              objectFit="contain"
              src={ImageList[selectedImage]}
              // onClick={() => openImageViewer(imgGroup.indexOf(imgGroup[selectedImage]))}
            />
            {/* {isViewerOpen && (
              <ImageViewer
                src={imgGroup}
                onClose={closeImageViewer}
                currentIndex={currentImage}
                backgroundStyle={{
                  backgroundColor: "rgba(0,0,0,0.9)",
                  zIndex: 1501,
                }}
              />
            )} */}
          </FlexBox>

          <FlexBox overflow="auto">
            {ImageList.map((url, ind) => (
              <FlexRowCenter
                key={ind}
                width={64}
                height={64}
                minWidth={64}
                bgcolor="white"
                border="1px solid"
                borderRadius="10px"
                ml={ind === 0 ? "auto" : 0}
                style={{ cursor: "pointer" }}
                onClick={handleImageClick(ind)}
                mr={ind === ImageList.length - 1 ? "auto" : "10px"}
                borderColor={
                  selectedImage === ind ? "primary.main" : "grey.400"
                }
              >
                <BazaarAvatar src={url} variant="square" height={40} />
              </FlexRowCenter>
            ))}
          </FlexBox>
        </Grid>

        <Grid item md={6} xs={12} alignItems="center">
          <H1 mb={2}>{prod.name}</H1>

          <FlexBox alignItems="center" mb={2}>
            <Box>Category</Box>
            <H6 ml={1}>{prod.category_name}</H6>
          </FlexBox>

          <FlexBox alignItems="center" mb={2}>
            <Box lineHeight="1">Rated:</Box>
            <Box mx={1} lineHeight="1">
              <BazaarRating
                color="warn"
                fontSize="1.25rem"
                value={4}
                readOnly
              />
            </Box>
            <H6 lineHeight="1">(50)</H6>
          </FlexBox>

          <Box mb={3}>
            <H2 color="primary.main" mb={0.5} lineHeight="1">
              ${price.toFixed(2)}
            </H2>
            <Box color="inherit">Stock Available</Box>
          </Box>

          {!cartItem?.qty ? (
            <BazaarButton
              color="primary"
              variant="contained"
              onClick={handleCartAmountChange(1)}
              sx={{ mb: 4.5, px: "1.75rem", height: 40 }}
            >
              Add to Cart
            </BazaarButton>
          ) : (
            <FlexBox alignItems="center" mb={4.5}>
              <BazaarButton
                size="small"
                sx={{ p: 1 }}
                color="primary"
                variant="outlined"
                onClick={handleCartAmountChange(cartItem?.qty - 1)}
              >
                <Remove fontSize="small" />
              </BazaarButton>

              <H3 fontWeight="600" mx={2.5}>
                {cartItem?.qty.toString().padStart(2, "0")}
              </H3>

              <BazaarButton
                size="small"
                sx={{ p: 1 }}
                color="primary"
                variant="outlined"
                onClick={handleCartAmountChange(cartItem?.qty + 1)}
              >
                <Add fontSize="small" />
              </BazaarButton>
            </FlexBox>
          )}

          <FlexBox alignItems="center" mb={2}>
            <Box>Vendu par : :</Box>
            <Link href="/shops/fdfdsa">
              <a>
                <H6 ml={1}>{prod.seller_name}</H6>
              </a>
            </Link>
          </FlexBox>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductIntro;
