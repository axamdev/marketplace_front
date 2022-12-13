import { Favorite, KeyboardArrowDown, PersonOutline } from "@mui/icons-material";
import { Badge, Box, Dialog, Drawer, styled } from "@mui/material";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import clsx from "clsx";
import BazaarButton from "components/BazaarButton";
import Image from "components/BazaarImage";
import CategoryMenu from "components/categories/CategoryMenu";
import { FlexBox } from "components/flex-box";
import Category from "components/icons/Category";
import ShoppingBagOutlined from "components/icons/ShoppingBagOutlined";
import MiniCart from "components/mini-cart/MiniCart";
import MobileMenu from "components/navbar/MobileMenu";
import GrocerySearchBox from "components/search-box/GrocerySearchBox";
import { useAppContext } from "contexts/AppContext";
import Link from "next/link";
import Login from "pages-sections/sessions/Login";
import { FC, useState } from "react";
import { DataCategories } from "utils/api/axam-category";
import { layoutConstant } from "utils/constants";
import SearchBox from "../search-box/SearchBox";


// styled component
export const HeaderWrapper = styled(Box)(({ theme }) => ({
  zIndex: 3,
  position: "relative",
  height: layoutConstant.headerHeight,
  transition: "height 250ms ease-in-out",
  background: theme.palette.background.paper,
  [theme.breakpoints.down("sm")]: {
    height: layoutConstant.mobileHeaderHeight,
  },
}));

// ==============================================================
type HeaderProps = {
  isFixed?: boolean;
  className?: string;
  searchBoxType?: "type1" | "type2";
  categoriesList?:DataCategories;
};
// ==============================================================

const Header: FC<HeaderProps> = ({
  isFixed,
  className,
  searchBoxType = "type1",
  categoriesList
}) => {
  const theme = useTheme();
  const { state } = useAppContext();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [sidenavOpen, setSidenavOpen] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const downMd = useMediaQuery(theme.breakpoints.down(1150));

  const toggleDialog = () => setDialogOpen(!dialogOpen);
  const toggleSidenav = () => setSidenavOpen(!sidenavOpen);
  console.log("categoriesList"+categoriesList) 
   //console.log(categoriesList) 


  return (
    <HeaderWrapper className={clsx(className)}>
      <Container
        sx={{
          gap: 2,
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <FlexBox
          mr={2}
          minWidth="170px"
          alignItems="center"
          sx={{ display: { xs: "none", md: "flex" } }}
        >
          <Link href="/">
            <a>
              <Image height={44} src="/assets/images/axamlogo.png" alt="logo" />
            </a>
          </Link>

          {isFixed && (
            <CategoryMenu categoriesList={categoriesList}>
              <FlexBox color="grey.600" alignItems="center" ml={2}>
                <BazaarButton color="inherit">
                  <Category fontSize="small" color="inherit" />
                  <KeyboardArrowDown fontSize="small" color="inherit" />
                </BazaarButton>
              </FlexBox>
            </CategoryMenu>
          )}
        </FlexBox>

        <FlexBox justifyContent="center" flex="1 1 0">
          {searchBoxType === "type1" && <SearchBox categoriesList={categoriesList}/>}
          {searchBoxType === "type2" && <GrocerySearchBox />}
        </FlexBox>

        <FlexBox
          alignItems="center"
          sx={{ display: { xs: "none", md: "flex" } }}
        >
     
          <Box
            mr={2.5}
            component={IconButton}
            p={1.25}
            bgcolor="grey.200"
            onClick={toggleDialog}
          >
            <PersonOutline />
          </Box>
         <Link href="/wish-list">
         <Box
            component={IconButton}
            p={1.25}
            bgcolor="grey.200"
            // onClick={toggleDialog}
>
              <Favorite /> 
          </Box></Link>
          <Badge badgeContent={state.cart.length} color="primary">
            <Box
                        ml={2.5}

              p={1.25}
              bgcolor="grey.200"
              component={IconButton}
              onClick={toggleSidenav}
            >
              <ShoppingBagOutlined />
            </Box>
          </Badge>
        </FlexBox>

        <Dialog
          open={dialogOpen}
          fullWidth={isMobile}
          scroll="body"
          onClose={toggleDialog}
        >
          <Login />
        </Dialog>

        <Drawer open={sidenavOpen} anchor="right" onClose={toggleSidenav}>
          <MiniCart />
        </Drawer>

        {downMd && <MobileMenu />}
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
