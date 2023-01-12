import { Box, useTheme } from "@mui/material";
import Carousel from "components/carousel/Carousel";
import CategoryCard1 from "components/category-cards/CategoryCard1";
import HoverBox from "components/HoverBox";
import ProductCard15 from "components/product-cards/ProductCard15";
import { H1 } from "components/Typography";
import useWindowSize from "hooks/useWindowSize";
import Link from "next/link";
import React, { FC, useEffect, useState } from "react";
import { DataCategories } from "utils/api/axam-category";

// ===============================================
type Props = {   categoriesList?:DataCategories;};
// ===============================================

const TopCategorySection: FC<Props> = ({ categoriesList }) => {
  const theme = useTheme();
  const width = useWindowSize();
  const [visibleSlides, setVisibleSlides] = useState(6);

  useEffect(() => {
    if (width < 500) setVisibleSlides(1);
    else if (width < 650) setVisibleSlides(3);
    else if (width < 950) setVisibleSlides(6);
    else setVisibleSlides(6);
  }, [width]);

  return (
    <Box>
      <H1 my={2}>Principales catégories</H1>
      <Carousel
        totalSlides={categoriesList.data.length}
        visibleSlides={visibleSlides}
        infinite={true}
        sx={{
          "& #backArrowButton, #backForwardButton": {
            width: 35,
            height: 35,
            borderRadius: 0,
            boxShadow: theme.shadows[2],
            color: theme.palette.primary.main,
            background: theme.palette.primary[50],
            "&:hover": { background: theme.palette.primary[100] },
          },
        }}
      >
        {categoriesList.data.map((item, ind) => (
          <Link href={`/product/categories/${item.id}`} key={ind}>
            <a>
              <ProductCard15
                title={item.name}
                available=''
                imgUrl={item.image}
              />
            </a>
          </Link>
        ))}
      </Carousel>


      {/* <H1 my={2}>Principales catégories</H1>
      <Carousel
        totalSlides={categoriesList.data.length}
        visibleSlides={visibleSlides}
        infinite={true}
        sx={{
          "& #backArrowButton, #backForwardButton": {
            width: 35,
            height: 35,
            borderRadius: 0,
            boxShadow: theme.shadows[2],
            color: theme.palette.primary.main,
            background: theme.palette.primary[50],
            "&:hover": { background: theme.palette.primary[100] },
          },
        }}
      >
        {categoriesList.data.map((item, ind) => (
         
          <Link href="#" key={ind}>
            <a>
            <CategoryCard1 image={item.image}title={item.name} />

            </a>
          </Link>
        ))}
      </Carousel> */}
    </Box>
  );
};

export default TopCategorySection;
