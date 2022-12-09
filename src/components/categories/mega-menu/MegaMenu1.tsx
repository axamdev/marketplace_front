import { Box, Card, Grid } from "@mui/material";
import { FlexBox } from "components/flex-box";
import LazyImage from "components/LazyImage";
import NavLink from "components/nav-link/NavLink";
import Link from "next/link";
import { FC } from "react";
import { ChildCategory, DataCategories } from "utils/api/axam-category";
import StyledMegaMenu from "./StyledMegaMenu";

// =========================================================

type Image = { banner: string; href: string };
// type SubCategory = { title: string; href: string };

/* type Category = {
  title: string;
  href?: string;
  subCategories: SubCategory[];
}; */

type MegaMenu = {
  categories: ChildCategory[];
  rightImage?: Image;
  bottomImage?: Image;
};

type MegaMenuProps = {
  data: MegaMenu;
  minWidth?: string;
};
// =========================================================

const MegaMenu1: FC<MegaMenuProps> = ({
  data: { categories = [], rightImage, bottomImage },
  minWidth,
}) => {

  
  return categories ? (
    <StyledMegaMenu>
      <Card elevation={2} sx={{ ml: "1rem", minWidth }}>
        <FlexBox px={2.5} py={1.75} alignItems="unset">
          <Box flex="1 1 0">
            <Grid container spacing={4}>
              {categories.map(({id, ...item}) => (
                <Grid item md={3} key={id}>
                  {item.banner ? (
                    <NavLink className="title-link" href={"#"}>
                      {item.name}
                    </NavLink>
                  ) : (
                    <Box className="title-link">{item.name}</Box>
                  )}
                  {item.children.map(({id, ...item}) => (
                    <NavLink className="child-link" href={"#"} key={id}>
                      {item.name}
                    </NavLink>
                  ))}
                </Grid>
              ))}
            </Grid>
          </Box>

          {rightImage && (
            <Box mt={1.5}>
              <Link href={rightImage.href}>
                <a>
                  <LazyImage
                    src={rightImage.banner}
                    objectFit="contain"
                    width={137}
                    height={318}
                  />
                </a>
              </Link>
            </Box>
          )}
        </FlexBox>

        {bottomImage && (
          <Link href={bottomImage.href}>
            <a>
              <Box position="relative" height="250px" width="318px" maxWidth="100vh">
                <LazyImage
                  src={bottomImage.banner}
                  layout="fill"
                  objectFit="cover"
                  
                />
              </Box>
            </a>
          </Link>
        )}
      </Card>
    </StyledMegaMenu>
  ) : null;
};

MegaMenu1.defaultProps = {
  minWidth: "760px",
};

export default MegaMenu1;
