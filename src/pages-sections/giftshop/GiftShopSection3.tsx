import { Box, Button, Card, Grid, styled, useTheme } from "@mui/material";
import LazyImage from "components/LazyImage";
import { H3, H6, Paragraph } from "components/Typography";
import Link from "next/link";
import React, { FC } from "react";
import { DataOffers } from "utils/api/axam-offers";

const boxStyle = {
  height: 230,
  display: "flex",
  alignItems: "center",
  boxShadow: "none",
  borderRadius: 0,
};

const LeftContentBox = styled(Card)(({ theme }) => ({
  ...boxStyle,
  background: theme.palette.primary[100],
  // backgroundImage: "url('/assets/images/Gift Shop/Offer Card.png')",
  // backgroundRepeat: "no-repeat",
  // backgroundSize: "contain",
  // backgroundPosition: "right bottom",
  "& .content": { width: "100%" },
}));

const RightContentBox = styled(Card)(({ theme }) => ({
  ...boxStyle,
  background: theme.palette.primary[100],
  // backgroundImage: "url('/assets/images/Gift Shop/Offer 1.png')",
  // backgroundRepeat: "no-repeat",
  // backgroundSize: "contain",
  // backgroundPosition: "bottom",
  display: "block",
}));

const RightContent = styled(Box)(() => ({
  paddingLeft: 20,
  "& p": { fontSize: 13, lineHeight: 1.4 },
}));

const LeftContent = styled(Box)(() => ({}));

const StyledButton = styled(Button)(() => ({
  fontWeight: 600,
  fontSize: "12px",
  marginTop: "5px",
  padding: "4px 12px",
  textDecoration: "underline",
}));
type GiftShopSection3Props = {
  offersList?:DataOffers[];
};
const GiftShopSection3: FC<GiftShopSection3Props> = ({
  offersList,
 
}) => {
  const { breakpoints } = useTheme();
console.log(offersList[1].image)
  return (
    <Grid container spacing={3}>
      <Grid item  sx={{
          pt: "44px !important",
          [breakpoints.down("sm")]: { pl: "0 !important" },
        }} sm={7} md={8}>
        <Link href="/sale-page-1">
          <a>
          <LazyImage
           id={offersList[1].id}
           priority
            width={1200} 
            height={450}
          // layout='fill'
          layout="responsive"
         src={offersList[1].image}
         />
            {/* <LeftContentBox>
              <RightContent px="20px">
              {/* <LazyImage
           id={offersList[2].id}
           priority
          //  width={1200} 
          //  height={450}
          layout='fill'
          objectFit="contain"
         src={offersList[1].image}
         />  */}
                {/* <H6>Holiday’s Offer!</H6>
                <H3>Sale 50% Off</H3>
                <Paragraph sx={{ mt: 1 }}>Use Code : Holi50</Paragraph>

                <Box>
                  <StyledButton>Shop Now</StyledButton>
                </Box> */}
              {/* </RightContent>
              <LeftContent />
            </LeftContentBox>  */}
          </a>
        </Link>
      </Grid>
      <Grid
        item
        xs={12}
        sm={5}
        md={4}
        sx={{
          pt: "94px !important",
          [breakpoints.down("sm")]: { pl: "0 !important" },
        }}
      >
        <Link href="/sale-page-1">
          <a>

          <LazyImage
           id={offersList[0].id}
           priority
            width={1200} 
            height={450}
          // layout='fill'
          layout="responsive"
         src={offersList[0].image}
         />
            {/* <RightContentBox sx={{ p: "10px" }}> */}
            {/* <LazyImage
           id={offersList[1].id}
           priority
          //  width={1200}
          //  height={450}
           layout="fill"
           objectFit="contain"

         src={offersList[1].image}
         />  */}
              {/* <Box textAlign="center">
                <H6>Shop Online Gift Under</H6>
                <H3>TND 20.00</H3>
                <StyledButton>Shop Now</StyledButton>
              </Box>
              <Box className="content" /> */}
            {/* </RightContentBox>    */}
          </a>
     
        </Link>
    
      </Grid>
    </Grid>
  );
};

export default GiftShopSection3;
