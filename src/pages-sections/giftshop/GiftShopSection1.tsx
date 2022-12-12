import { Box, Button, Grid, styled, useTheme } from "@mui/material";
import Carousel from "components/carousel/Carousel";
import LazyImage from "components/LazyImage";
import { H1, Paragraph } from "components/Typography";
import React, { FC } from "react";


// styled components
const StyledBox = styled(Box)(({ theme }) => ({
  marginBottom: 2,
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
  height:440,
  maxWidth: 1280,
  margin: "auto",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: { flexDirection: "column-reverse" },
}));

const GridItemOne = styled(Grid)(({ theme }) => ({
  padding: 20,
  "& .titleBox": {
    marginTop: 2,
    marginBottom: 2,
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

  console.log("slidershomeList"+slidershomeList)
  return (
    <StyledBox id="carouselBox">
      <Carousel
        spacing="0px"
        totalSlides={slidershomeList.length}
        showDots={true}
        autoPlay={true}
        visibleSlides={1}
        showArrow={false}
        dotClass="carousel-dot"
        dotColor={palette.primary.main}
        interval={9000}
      >
        {slidershomeList.map((_item, ind) => (
           <LazyImage
           id={_item.id}
           priority
           width={1200}
           height={450}
           layout="responsive"
           //objectFit="contain"//
            //src="http://5.135.194.236:8181/uploads/media/2022/Capture_d%E2%80%99%C3%A9cran_2022-10-11_021812.png"
         src={_item.image}
         />                  
          // <StyledGrid container key={ind} >
           
          //   <GridItemTwo item md={6} sm={6} xs={12}>
                    

          //        {/* <LazyImage
          //        priority
          //        width={600}
          //        height={450}
          //        layout="responsive"
          //        objectFit="contain"
          //        src="http://5.135.194.236:8181/uploads/media/2022/Capture_d%E2%80%99%C3%A9cran_2022-10-11_021812.png"
          //      />            */}
          //   </GridItemTwo>
          // </StyledGrid>
        ))}
      </Carousel>
    </StyledBox>
  );
};

export default GiftShopSection1;
