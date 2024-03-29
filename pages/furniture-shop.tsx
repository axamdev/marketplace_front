import { Box, Container, Stack, styled } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ShopLayout1 from "components/layouts/ShopLayout1";
import MobileNavigationBar2 from "components/mobile-navigation/MobileNavigationBar2";
import PageFooter from "components/page-footer/PageFooter";
import SideNavbar from "components/page-sidenav/SideNavbar";
import ProductFilterCard from "components/products/ProductFilterCard";
import SEO from "components/SEO";
import Setting from "components/Setting";
import { NextPage } from "next";
import FurnitureShopAllProducts from "pages-sections/furnitureshop/FurnitureShopAllProducts";
import FurnitureShopSection1 from "pages-sections/furnitureshop/FurnitureShopSection1";
import FurnitureShopSection2 from "pages-sections/furnitureshop/FurnitureShopSection2";
import TopProductsSection from "pages-sections/furnitureshop/TopProductsSection";
import TopSellingProducts from "pages-sections/furnitureshop/TopSellingProducts";
import { useEffect, useRef, useState } from "react";
import api from "utils/api/furniture-shop";
import api2 from "utils/api/gift-shop";
import { layoutConstant } from "utils/constants";
import GiftShopSection1 from "pages-sections/giftshop/GiftShopSection1";
import GiftShopServices from "pages-sections/giftshop/GiftShopServices";
import GiftShopSection3 from "pages-sections/giftshop/GiftShopSection3";
import TopCategorySection from "pages-sections/giftshop/TopCategorySection";
import GiftShopPopularItems from "pages-sections/giftshop/GiftShopPopularItems";
import GiftShopTopSales from "pages-sections/giftshop/GiftShopTopSales";
import GiftShopAllProducts from "pages-sections/giftshop/GiftShopAllProducts";


const StyledContainer = styled(Container)(({ theme }) => ({
  gap: "1.75rem",
  display: "flex",
  padding: "0 !important",
  ".sidenav": {
    top: 0,
    bottom: 0,
    position: "relative",
    transition: "all 350ms ease-in-out",
    width: layoutConstant.grocerySidenavWidth,
    minWidth: layoutConstant.grocerySidenavWidth,
    // height: `calc(100vh - ${layoutConstant.headerHeight}px)`,
    "& .MuiPaper-root": { borderRadius: 0 },
    [theme.breakpoints.down("md")]: { display: "none" },
  },
  ".pageContent": {
    left: "unset",
    position: "relative",
    width: `calc(100% - ${layoutConstant.grocerySidenavWidth}px)`,
    [theme.breakpoints.down("md")]: { width: "100%", marginLeft: 0 },
  },
}));

// ======================================================================
type FurnitureShopProps = {
  topNewProducts: any[];
  furnitureProducts: any[];
  topSellingProducts: any[];
  furnitureShopNavList: any[]; 
   giftShopNavList: any[];
  popularProducts: any[];
  giftShopProducts: any[];
  topSailedProducts: any[];
  giftShopServicesList: any[];
  giftShopTopCategories: any[];
};

// ======================================================================

const FurnitureShop: NextPage<FurnitureShopProps> = (props) => {
  const pageContentRef = useRef<HTMLElement>();
  const [sidebarHeight, setSidebarHeight] = useState(0);
  const theme = useTheme();

  useEffect(() => setSidebarHeight(pageContentRef.current.offsetHeight), []);

  return (
    <ShopLayout1 showTopbar={false}>
      <SEO title="Furniture shop template" />

      {/* HERO SECTION */}
      {/* <FurnitureShopSection1 /> */}
      <GiftShopSection1 />
      <Container>
        <StyledContainer>
          {/* LEFT SIDEBAR */}
          <Box className="sidenav">
            {/* <SideNavbar
              lineStyle="dash"
              sidebarStyle="style2"
              navList={props.furnitureShopNavList}
              sidebarHeight={sidebarHeight || "85vh"}
            /> */}
             <ProductFilterCard />
          </Box>

          <Box className="pageContent" ref={pageContentRef}>
            {/* OFFER BANNERS */}
            <FurnitureShopSection2 />
            <GiftShopSection3 />

<Box my={10} className="categories">
  <TopCategorySection categoryList={props.giftShopTopCategories} />
</Box>
            <Box className="pageContent" ref={pageContentRef}>
          {/* <GiftShopServices serviceData={props.giftShopServicesList} /> */}
    
        </Box>
          </Box>
        </StyledContainer>

        <Stack spacing={6} my={6}>
          <TopProductsSection productsData={props.topNewProducts} />
          <TopSellingProducts productsData={props.topSellingProducts} />
          <FurnitureShopAllProducts productsData={props.furnitureProducts} />
          <GiftShopPopularItems productsData={props.popularProducts} />
      <GiftShopTopSales  productsData={props.topSailedProducts} />
      <GiftShopAllProducts productsData={props.giftShopProducts} />
        </Stack>
      </Container>


      {/* REMOVE THIS SETTING COMPONENT */}
      <Setting />

      <MobileNavigationBar2>
        <SideNavbar
          navList={props.furnitureShopNavList}
          lineStyle="dash"
          sidebarStyle="style2"
        />
      </MobileNavigationBar2>
    </ShopLayout1>
  );
};

export async function getStaticProps() {
  const topNewProducts = await api.getTopNewProducts();
  const furnitureProducts = await api.getFurnitureProducts();
  const topSellingProducts = await api.getTopSellingProducts();
  const furnitureShopNavList = await api.getFurnitureShopNavList();
 const popularProducts = await api2.getPopularProducts();
  const giftShopProducts = await api2.getGiftShopProducts();
  const giftShopNavList = await api2.getGiftShopNavigation();
  const topSailedProducts = await api2.getTopSailedProducts();
  const giftShopServicesList = await api2.getGiftShopServiceList();
  const giftShopTopCategories = await api2.getGiftShopTopCategories();
  return {
    props: {
      topNewProducts,
      furnitureProducts,
      topSellingProducts,
      furnitureShopNavList,
      giftShopNavList,
      popularProducts,
      giftShopProducts,
      topSailedProducts,
      giftShopServicesList,
      giftShopTopCategories
    },
  };
}

export default FurnitureShop;
