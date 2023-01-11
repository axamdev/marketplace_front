import { Add, Favorite, Remove, RemoveRedEye } from "@mui/icons-material";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import { Box, Button, Chip, IconButton, styled } from "@mui/material";
import BazaarCard from "components/BazaarCard";
import BazaarRating from "components/BazaarRating";
import LazyImage from "components/LazyImage";
import ProductViewDialog from "components/products/ProductViewDialog";
import { H3, Span } from "components/Typography";
import { CartItem, useAppContext } from "contexts/AppContext";
import Link from "next/link";
import { CSSProperties, FC, Fragment, useCallback, useState } from "react";
import { FlexBox } from "../flex-box";
import {MinMaxPrice} from "utils/api/axam-products"

const StyledBazaarCard = styled(BazaarCard)(() => ({
  height: "100%",
  margin: "auto",
  display: "flex",
  overflow: "hidden",
  borderRadius: "8px",
  position: "relative",
  flexDirection: "column",
  justifyContent: "space-between",
  transition: "all 250ms ease-in-out",
  ":hover": { "& .hover-box": { opacity: 1 } },
}));

const ImageWrapper = styled(Box)(({ theme }) => ({
  textAlign: "center",
  position: "relative",
  display: "inline-block",
  [theme.breakpoints.down("sm")]: { display: "block" },
}));

const StyledChip = styled(Chip)(() => ({
  zIndex: 1,
  top: "10px",
  left: "10px",
  paddingLeft: 3,
  paddingRight: 3,
  fontWeight: 600,
  fontSize: "10px",
  position: "absolute",
}));

const HoverIconWrapper = styled(Box)(({ theme }) => ({
  zIndex: 2,
  top: "7px",
  opacity: 0,
  right: "15px",
  display: "flex",
  cursor: "pointer",
  position: "absolute",
  flexDirection: "column",
  transition: "all 0.3s ease-in-out",
}));

const ContentWrapper = styled(Box)(() => ({
  padding: "1rem",
  "& .title, & .categories": {
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  },
}));

// ========================================================
type ProductCard1Props = {
  off?: number;
  //title: string;
  name:string;
 // price: number;
  //imgUrl: string;
  image:string;
 // rating?: number;
  discount?: number;
  className?: string;
  id: string ;
  rating: string;
  hideRating?: boolean;
  hoverEffect?: boolean;
  style?: CSSProperties;
  showProductSize?: boolean;
  min_max_price: MinMaxPrice;
};
// ========================================================

const ProductCard1: FC<ProductCard1Props> = ({
  id,
  //title,
  name,
  image,
 // price,
 // imgUrl,
 // rating = 5,
  hideRating,
  hoverEffect,
  rating,
  discount = 5,
  showProductSize,
  min_max_price
}) => {
  const { state, dispatch } = useAppContext();
  const [openModal, setOpenModal] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleIsFavorite = () => setIsFavorite((fav) => !fav);
  const toggleDialog = useCallback(() => setOpenModal((open) => !open), []);

  const cartItem: CartItem | undefined = state.cart.find(
    (item) => item.id === id
  );

  const handleCartAmountChange = useCallback(
    (product) => () =>
      dispatch({ type: "CHANGE_CART_AMOUNT", payload: product }),
    []
  );

  return (
    <StyledBazaarCard hoverEffect={hoverEffect}>
      <ImageWrapper>
        {/* {!!discount && (
          <StyledChip color="primary" size="small" label={`${discount}% off`} />
        )} */}

        <HoverIconWrapper className="hover-box">
          <IconButton onClick={toggleDialog}>
            <RemoveRedEye color="disabled" fontSize="small" />
          </IconButton>

          <IconButton onClick={toggleIsFavorite}>
            {isFavorite ? (
              <Favorite color="primary" fontSize="small" />
            ) : (
              <FavoriteBorder fontSize="small" color="disabled" />
            )}
          </IconButton>
        </HoverIconWrapper>

        <Link href={`/product/${id}`}>
          <a>
            <LazyImage
              src={image}
              width={0}
              height={0}
              layout="responsive"
              alt={name}
            />
          </a>
        </Link>
      </ImageWrapper>

      <ProductViewDialog
        openDialog={openModal}
        handleCloseDialog={toggleDialog}
        product={{ name, id, imgGroup: [image, image] }}
      />

      <ContentWrapper>
        <FlexBox>
          <Box flex="1 1 0" minWidth="0px" mr={1}>
            <Link href={`/product/${id}`}>
              <a>
                <H3
                  mb={1}
                  title={name}
                  fontSize="14px"
                  fontWeight="600"
                  className="title"
                  color="text.secondary"
                >
                  {name}
                </H3>
              </a>
            </Link>

            {!hideRating && (
              <BazaarRating value={parseInt(rating) || 0} color="warn" readOnly />
            )}

            {showProductSize && (
              <Span color="grey.600" mb={1} display="block">
                300ml
              </Span>
            )}

            <FlexBox alignItems="center" gap={1} mt={0.5}>
              <Box fontWeight="600" color="primary.main">
                ${(min_max_price.max_price - (min_max_price.max_price * discount) / 100).toFixed(2)}
              </Box>

              {!!discount && (
                <Box color="grey.600" fontWeight="600">
                  <del>{min_max_price.max_price?.toFixed(2)}</del>
                </Box>
              )}
            </FlexBox>
          </Box>

          <FlexBox
            width="30px"
            alignItems="center"
            className="add-cart"
            flexDirection="column-reverse"
            justifyContent={!!cartItem?.qty ? "space-between" : "flex-start"}
          >
            <Button
              color="primary"
              variant="outlined"
              sx={{ padding: "3px" }}
              onClick={handleCartAmountChange({
                id,
               // price,
                image,
                name: name,
                qty: (cartItem?.qty || 0) + 1,
              })}
            >
              <Add fontSize="small" />
            </Button>

            {!!cartItem?.qty && (
              <Fragment>
                <Box color="text.primary" fontWeight="600">
                  {cartItem?.qty}
                </Box>

                <Button
                  color="primary"
                  variant="outlined"
                  sx={{ padding: "3px" }}
                  onClick={handleCartAmountChange({
                    id,
                    // price,
                    image,
                    name:name,
                    qty: (cartItem?.qty || 0) - 1,
                  })}
                >
                  <Remove fontSize="small" />
                </Button>
              </Fragment>
            )}
          </FlexBox>
        </FlexBox>
      </ContentWrapper>
    </StyledBazaarCard>
  );
};

export default ProductCard1;



