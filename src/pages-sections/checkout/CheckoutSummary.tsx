import { Button, Divider, TextField, Typography } from "@mui/material";
import Card1 from "components/Card1";
import { FlexBetween, FlexBox } from "components/flex-box";
import React, { FC } from "react";
import { CartItem, useAppContext } from "contexts/AppContext";

const CheckoutSummary: FC = () => {
  const { state } = useAppContext();
  const cartList: CartItem[] = state.cart;

  const getTotalPrice = () => {
    return cartList.reduce((accum, item) => accum + item.price * item.qty, 0);
     };
  return (
    <Card1>
      <FlexBetween mb={1}>
        <Typography color="grey.600">Total:</Typography>
        <FlexBox alignItems="flex-end">
          <Typography fontSize="18px" fontWeight="600" lineHeight="1">
          ${getTotalPrice().toFixed(2)}
          </Typography>
          <Typography fontWeight="600" fontSize="14px" lineHeight="1">
            00
          </Typography>
        </FlexBox>
      </FlexBetween>
      <FlexBetween mb={1}>
        <Typography color="grey.600">Expédition:</Typography>
        <FlexBox alignItems="flex-end">
          <Typography fontSize="18px" fontWeight="600" lineHeight="1">
            -
          </Typography>
        </FlexBox>
      </FlexBetween>
      <FlexBetween mb={1}>
        <Typography color="grey.600">Impôt:</Typography>
        <FlexBox alignItems="flex-end">
          <Typography fontSize="18px" fontWeight="600" lineHeight="1">
            TND0.
          </Typography>
          <Typography fontWeight="600" fontSize="14px" lineHeight="1">
            00
          </Typography>
        </FlexBox>
      </FlexBetween>
      <FlexBetween mb={2}>
        <Typography color="grey.600">Remise:</Typography>
        <FlexBox alignItems="flex-end">
          <Typography fontSize="18px" fontWeight="600" lineHeight="1">
            -
          </Typography>
        </FlexBox>
      </FlexBetween>

      <Divider sx={{ mb: "1rem" }} />

      <Typography
        fontSize="25px"
        fontWeight="600"
        lineHeight="1"
        textAlign="right"
        mb={3}
      >
         ${getTotalPrice().toFixed(2)}
      </Typography>

      <TextField
        placeholder="code promo"
        variant="outlined"
        size="small"
        fullWidth
      />
      <Button
        variant="outlined"
        color="primary"
        fullWidth
        sx={{ mt: "1rem", mb: "30px" }}
      >
        Appliquer le bon
      </Button>
    </Card1>
  );
};

export default CheckoutSummary;
