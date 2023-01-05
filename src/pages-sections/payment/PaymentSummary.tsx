import { Divider } from "@mui/material";
import Card1 from "components/Card1";
import { FlexBetween } from "components/flex-box";
import { Paragraph } from "components/Typography";
import React from "react";
import { CartItem, useAppContext } from "contexts/AppContext";


const PaymentSummary = () => {

  const { state } = useAppContext();
const cartList: CartItem[] = state.cart;

  const getTotalPrice = () => {
    return cartList.reduce((accum, item) => accum + item.price * item.qty, 0);
     };
  return (
    <Card1>
      <FlexBetween mb={1}>
        <Paragraph color="grey.600">Total:</Paragraph>
        <Paragraph fontSize={18} fontWeight={600} lineHeight={1}>
        TND{getTotalPrice().toFixed(2)}
        </Paragraph>
      </FlexBetween>

      <FlexBetween mb={1}>
        <Paragraph color="grey.600">Expédition:</Paragraph>
        <Paragraph fontSize={18} fontWeight={600} lineHeight={1}>
          -
        </Paragraph>
      </FlexBetween>

      <FlexBetween mb={1}>
        <Paragraph color="grey.600">Impôt:</Paragraph>
        <Paragraph fontSize={18} fontWeight={600} lineHeight={1}>
          TND 40
        </Paragraph>
      </FlexBetween>

      <FlexBetween mb={2}>
        <Paragraph color="grey.600">Remise:</Paragraph>
        <Paragraph fontSize={18} fontWeight={600} lineHeight={1}>
          -
        </Paragraph>
      </FlexBetween>

      <Divider sx={{ mb: 2 }} />

      <Paragraph
        fontSize={25}
        fontWeight={600}
        lineHeight={1}
        textAlign="right"
      >
         TND{getTotalPrice().toFixed(2)}
      </Paragraph>
    </Card1>
  );
};

export default PaymentSummary;
