import { Add, Close, Remove } from "@mui/icons-material";
import {
  Box,
  Dialog,
  DialogContent,
  Divider,
  Grid,
  IconButton,
  styled,
} from "@mui/material";
import BazaarButton from "components/BazaarButton";
import BazaarImage from "components/BazaarImage";
import BazaarRating from "components/BazaarRating";
import Carousel from "components/carousel/Carousel";
import { FlexBox } from "components/flex-box";
import { H1, H2, H3, H6, Paragraph } from "components/Typography";
import { useAppContext } from "contexts/AppContext";
import { FC, useCallback } from "react";

const ContentWrapper = styled(Box)(({ theme }) => ({
  "& .carousel:hover": {
    cursor: "pointer",
    "& .carousel__back-button": { opacity: 1, left: 10 },
    "& .carousel__next-button": { opacity: 1, right: 10 },
  },
  "& .carousel__next-button, & .carousel__back-button": {
    opacity: 0,
    boxShadow: "none",
    transition: "all 0.3s",
    background: "transparent",
    color: theme.palette.primary.main,
    ":disabled": { color: theme.palette.grey[500] },
    ":hover": {
      color: theme.palette.primary.main,
      backgroundColor: "transparent",
    },
  },
  "& .carousel__back-button": { left: 0 },
  "& .carousel__next-button": { right: 0 },
}));

// =====================================================
type ProductViewDialogProps = {
  product: any;
  openDialog: boolean;
  handleCloseDialog: () => void;
};
// =====================================================

const ProductViewDialog: FC<ProductViewDialogProps> = (props) => {
  const { product, openDialog, handleCloseDialog } = props;

  const { state, dispatch } = useAppContext();
  const cartItem = state.cart.find((item) => item.id === product.id);

  const handleCartAmountChange = useCallback(
    (amount) => () => {
      dispatch({
        type: "CHANGE_CART_AMOUNT",
        payload: {
          ...product,
          qty: amount,
          name: product.title,
          imgUrl: product.imgGroup[0],
        },
      });
    },
    [dispatch, product]
  );

  return (
    <Dialog
      open={openDialog}
      maxWidth={false}
      onClose={handleCloseDialog}
      sx={{ zIndex: 1501 }}
    >
      <DialogContent sx={{ maxWidth: 900, width: "100%" }}>
        <ContentWrapper>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <Carousel totalSlides={product.imgGroup.length} visibleSlides={1}>
                {product.imgGroup.map((item: string, index: number) => (
                  <BazaarImage
                    key={index}
                    src={item}
                    sx={{
                      mx: "auto",
                      width: "100%",
                      objectFit: "contain",
                      height: { sm: 400, xs: 250 },
                    }}
                  />
                ))}
              </Carousel>
            </Grid>

            <Grid item md={6} xs={12} alignSelf="center">
              <H2>{product.title}</H2>

              <Paragraph py={1} color="grey.500" fontWeight={600} fontSize={13}>
                CATEGORIE: {product.category_name}
              </Paragraph>

              <H1 color="primary.main">TND {product.price.toFixed(2)}</H1>

              <FlexBox alignItems="center" gap={1}>
                <BazaarRating
                  color="warn"
                  fontSize="1.25rem"
                  value={4}
                  readOnly
                />
                <H6 lineHeight="1"></H6>
              </FlexBox>

              <Paragraph my={2}>
              {product.short_description}
              </Paragraph>

              <Divider sx={{ mb: 2 }} />

              {!cartItem?.qty ? (
                <BazaarButton
                  size="large"
                  color="primary"
                  variant="contained"
                  onClick={handleCartAmountChange(1)}
                  sx={{ height: 45 }}
                >
                  Ajouter au panier 
                </BazaarButton>
              ) : (
                <FlexBox alignItems="center">
                  <BazaarButton
                    size="small"
                    color="primary"
                    variant="outlined"
                    sx={{ p: ".6rem", height: 45 }}
                    onClick={handleCartAmountChange(cartItem?.qty - 1)}
                  >
                    <Remove fontSize="small" />
                  </BazaarButton>

                  <H3 fontWeight="600" mx={2.5}>
                    {cartItem?.qty.toString().padStart(2, "0")}
                  </H3>

                  <BazaarButton
                    size="small"
                    color="primary"
                    variant="outlined"
                    sx={{ p: ".6rem", height: 45 }}
                    onClick={handleCartAmountChange(cartItem?.qty + 1)}
                  >
                    <Add fontSize="small" />
                  </BazaarButton>
                </FlexBox>
              )}
            </Grid>
          </Grid>
        </ContentWrapper>

        <IconButton
          sx={{ position: "absolute", top: 3, right: 3 }}
          onClick={handleCloseDialog}
        >
          <Close fontSize="small" color="secondary" />
        </IconButton>
      </DialogContent>
    </Dialog>
  );
};

export default ProductViewDialog;
