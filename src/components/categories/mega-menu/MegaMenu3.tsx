import { Box, Grid } from "@mui/material";
import BazaarCard from "components/BazaarCard";
import Image from "components/BazaarImage";
import { FlexBox } from "components/flex-box";
import LazyImage from "components/LazyImage";
import NavLink from "components/nav-link/NavLink";
import { H3, Small } from "components/Typography";
import Link from "next/link";
import React, { FC } from "react";
import StyledMegaMenu from "./StyledMegaMenu";
import { ChildCategory, DataCategories } from "utils/api/axam-category";

// component props with nested interface
interface Image {
  banner: string;
  href: string;
}

// interface SubCategory {
//   title: string;
//   href: string;
// }

interface Category {
  title: string;
  href?: string;
  categories: ChildCategory[];
}

interface MegaMenu {
  categories: ChildCategory[];
  rightImage?: Image;
}

interface MegaMenuProps {
  data: MegaMenu;
  minWidth?: string;
}

const MegaMenu3: FC<MegaMenuProps> = ({
  data: { categories, rightImage },
  minWidth,
}) => {
  console.log('child category '+categories)
  return categories ? (
    <StyledMegaMenu>
      <BazaarCard sx={{ ml: "1rem", minWidth }} elevation={2}>
        <FlexBox px={2.5} py={1.75}>
          <Box flex="1 1 0">
            <Grid container spacing={4}>
              {categories?.map((item, ind) => (
                <Grid item md={3} key={ind}>
                  {!!item.banner ? (
                    <NavLink className="title-link" href={'#'}>
                      {item.name}
                    </NavLink>
                  ) : (
                    <Box className="title-link">{item.name}</Box>
                  )}
                  {item.children?.map(({id, ...item}) => (
                    <NavLink className="child-link" href={'#'} key={id}>
                      {item.name}
                    </NavLink>
                  ))}
                </Grid>
              ))}
            </Grid>
          </Box>

          {rightImage && (
            <Link href={rightImage.href}>
              <a>
                <Box position="relative" width="153px" height="100%">
                  <LazyImage
                    src={rightImage.banner}
                    layout="fill"
                    objectFit="contain"
                  />
                </Box>
              </a>
            </Link>
          )}
        </FlexBox>

        <Link href="/sale-page-2">
          <a>
            <Grid
              className="h-full"
              container
              spacing={0}
              wrap="wrap-reverse"
              alignItems="center"
            >
              <Grid item sm={6} xs={12}>
                <Box px={2.5}>
                  <H3 mb={1}>Big Sale Upto 60% Off</H3>

                  <Box color="grey.600" mb={1}>
                    Handcrafted from genuine Italian Leather
                  </Box>

                  <Small
                    fontWeight="700"
                    borderBottom="2px solid"
                    borderColor="primary.main"
                  >
                    SHOP NOW
                  </Small>
                </Box>
              </Grid>
              <Grid item sm={6} xs={12}>
                <FlexBox
                  flexDirection="column"
                  justifyContent="flex-end"
                  height="160px"
                  position="relative"
                >
                  <LazyImage
                    layout="fill"
                    objectFit="cover"
                    src="/assets/images/models/model-1.png"
                    alt="model"
                  />
                </FlexBox>
              </Grid>
            </Grid>
          </a>
        </Link>
      </BazaarCard>
    </StyledMegaMenu>
  ) : null;
};

MegaMenu3.defaultProps = {
  minWidth: "760px",
};

export default MegaMenu3;
