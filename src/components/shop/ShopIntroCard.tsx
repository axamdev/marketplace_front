import { Call, Place } from "@mui/icons-material";
import { Avatar, Box, Button, Card, Rating } from "@mui/material";
//import Router,{ useRouter } from "@nx/next-router";
import Router, { useRouter } from "next/router";
import { FlexBetween, FlexBox } from "components/flex-box";
import FacebookFilled from "components/icons/FacebookFilled";
import InstagramFilled from "components/icons/InstagramFilled";
import TwitterFilled from "components/icons/TwitterFilled";
import YoutubeFilled from "components/icons/YoutubeFilled";
import { H3, Small, Span } from "components/Typography";
import React, { useEffect,useState } from "react";
import api, { Productsdata, ProductsResponse } from "utils/api/axam-products";

// =======================================================
type ShopIntroCardProps = {
  products?: Productsdata[];

};
// =======================================================

const ShopIntroCard: React.FC<ShopIntroCardProps> = ({products}) => {
  // const prod=products
  // console.log(prod);
  const router = useRouter();
  //const { query, isReady } = useRouter();
  // useEffect(() => {
  //   if (router.isReady) {
  //     // Code using query
  //     console.log(router.query);
  //    }
  // }, [router.isReady]);
  const seller_id = parseInt(router.query.id as string);
  const [product, setProduct] = useState<Productsdata[]> ();
  useEffect(() => {
    api.get_products_by_seller_id(seller_id).then((data)=> setProduct(data.data)    )
  }, []);
  //console.log(product);
  console.log(product);


  return (
    
    <Card sx={{ mb: 4, pb: 2.5 }}>
     
      <Box
        height="202px"
        sx={{
          background: "url(/assets/images/banners/shop-cover.png) center/cover",
        }}
      />
         {product ?
      <FlexBox mt={-8} px={3.75} flexWrap="wrap">
      
        <Avatar
        // key={ind}
          //src="http://5.135.194.236:8181/uploads/seller/ag84-fatalessahloul.jpg"
           src={product[0].seller_profile}
          sx={{
            mr: "37px",
            width: "120px",
            height: "120px",
            border: "4px solid",
            borderColor: "grey.100",
          }}
        />
       
        <Box
          sx={{
            flex: "1 1 0",
            minWidth: "250px",
            "@media only screen and (max-width: 500px)": { marginLeft: 0 },
          }}
        >
          <FlexBetween flexWrap="wrap" mt={0.375} mb={3}>
            <Box
              my={1}
              p="4px 16px"
              borderRadius="4px"
              display="inline-block"
              bgcolor="secondary.main"
            >
              <H3 fontWeight="600" color="grey.100">
                {product[0].store_name} 
              </H3>
            </Box>

            <FlexBox my={1} gap={1.5}>
              {socialLinks.map((item, ind) => (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  key={ind}
                >
                  <item.icon sx={{ fontSize: 27 }} />
                </a>
              ))}
            </FlexBox>
          </FlexBetween>
          
          <FlexBetween flexWrap="wrap">
            <Box>
              <FlexBox alignItems="center" gap={1} mb={2}>
                <Rating color="warn" size="small" value={5} readOnly />
                <Small color="grey.600" display="block">
                  (45)
                </Small>
              </FlexBox>

              <FlexBox color="grey.600" gap={1} mb={1} maxWidth={270}>
                <Place fontSize="small" sx={{ fontSize: 18, mt: "3px" }} />
                <Span color="grey.600">
                  845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark
                </Span>
              </FlexBox>

              <FlexBox color="grey.600" gap={1} mb={1}>
                <Call fontSize="small" sx={{ fontSize: 18, mt: "2px" }} />
                <Span color="grey.600">(613) 343-9004</Span>
              </FlexBox>
            </Box>

            <a href="mailto:scarletbeauty@xmail.com">
              <Button variant="outlined" color="primary" sx={{ my: 1.5 }}>
                Contact Vendor
              </Button>
            </a>
          </FlexBetween>
        </Box>
       
      </FlexBox>
         : <H3>Loading...</H3>}
         </Card>
         
  );
};

const socialLinks = [
  { icon: FacebookFilled, url: "https://facebook.com" },
  { icon: TwitterFilled, url: "https://twitter.com" },
  { icon: YoutubeFilled, url: "https://youtube.com" },
  { icon: InstagramFilled, url: "https://instagram.com" },
];

export default ShopIntroCard;
