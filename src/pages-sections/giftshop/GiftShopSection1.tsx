import { Box, Button, Grid, styled, useTheme } from "@mui/material";
import Carousel from "components/carousel/Carousel";
import LazyImage from "components/LazyImage";
import { H1, Paragraph } from "components/Typography";
import React, { FC } from "react";
import {useEffect,useState} from "react";

// styled components
const StyledBox = styled(Box)(({ theme }) => ({
  marginBottom: 60,
  overflow: "hidden",
  backgroundColor: theme.palette.primary[100],
  "& .carousel-dot": {
    left: 0,
    right: 0,
    bottom: "30px",
    margin: "auto",
    position: "absolute",
  },
}));

const StyledGrid = styled(Grid)(({ theme }) => ({
  maxWidth: 1280,
  margin: "auto",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: { flexDirection: "column-reverse" },
}));

const GridItemOne = styled(Grid)(({ theme }) => ({
  padding: 20,
  "& .titleBox": {
    marginTop: 10,
    marginBottom: 30,
    "& h1": { fontSize: 45, lineHeight: 1.3 },
  },
  [theme.breakpoints.down("md")]: {
    "& .titleBox": { "& h1": { fontSize: 30 } },
  },
  [theme.breakpoints.down("sm")]: {
    textAlign: "center",
    "& .titleBox": { textAlign: "center", "& h1": { fontSize: 25 } },
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  color: "#fff",
  fontWeight: 400,
  borderRadius: 0,
  fontSize: "16px",
  background: theme.palette.primary.main,
  "&:hover": { background: theme.palette.primary[400] },
}));

const GridItemTwo = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: { display: "none" },
}));
//----------------------------------------
type GiftShopSection1Props = {
  slidershomeList?:any[];
};

//---------------------------------------

const GiftShopSection1: FC <GiftShopSection1Props> = ({slidershomeList})=>{
  const { palette } = useTheme();
  let images: Array<string> = ['/assets/images/Furniture Shop/Furniture Shop Header.jpg', '/assets/images/Gift Shop/Header.png', '/assets/images/banners/banner-15.jpg'];
  let [imgs,setImgs]=useState<any>([])

  return (
    <StyledBox id="carouselBox">
      <Carousel
        spacing="0px"
        totalSlides={3}
        showDots={true}
        autoPlay={false}
        visibleSlides={1}
        showArrow={false}
        dotClass="carousel-dot"
        dotColor={palette.primary.main}
      >
        {[...new Array(3)].map((_item, ind) => (
          <StyledGrid container key={ind}>
            <GridItemOne item md={6} sm={6} xs={12}>
              <Box py={6}>
                <Paragraph color="primary.main">AXAM Marketplace</Paragraph>
                <Box className="titleBox">
                  <H1>Decorative products</H1>
                  <H1>your Home and all you need</H1>
                </Box>

                {/* <StyledButton
                  variant="contained"
                  sx={{ px: "30px", py: "8px" }}
                >
                  Shop Now
                </StyledButton> */}
              </Box>
            </GridItemOne>

            <GridItemTwo item md={6} sm={6} xs={12}>
              {slidershomeList.map((slid,key)=>{
                 <LazyImage
                 priority
                 width={600}
                 height={450}
                 layout="responsive"
                 objectFit="contain"
                 src={slid.image}
               />              
               })}
               {console.log(slidershomeList)}

                 {/*<LazyImage
                 priority
                 width={600}
                 height={450}
                 layout="responsive"
                 objectFit="contain"
                 src={images[ind]}
               />*/}           
            </GridItemTwo>
          </StyledGrid>
        ))}
      </Carousel>
    </StyledBox>
  );
};

export default GiftShopSection1;
