import { useTheme } from "@mui/material";
import Carousel from "components/carousel/Carousel";
import CategorySectionCreator from "components/CategorySectionCreator";
import ProductCard16 from "components/product-cards/ProductCard16";
import useWindowSize from "hooks/useWindowSize";
import React, { FC, useEffect, useState } from "react";
import { DataSections } from "utils/api/axam-sections";

// =========================================================
type Props = { 
  
  productsData: any[] 
  dataSections:DataSections
};
// =========================================================

const GiftShopPopularItems: FC<Props> = ({ productsData,dataSections }) => {
  const width = useWindowSize();
  const { palette, shadows } = useTheme();
  const [visibleSlides, setVisibleSlides] = useState(4);

  useEffect(() => {
    if (width < 500) setVisibleSlides(1);
    else if (width < 650) setVisibleSlides(2);
    else if (width < 950) setVisibleSlides(4);
    else setVisibleSlides(4);
  }, [width]);

  return (
    <CategorySectionCreator title={dataSections.title} subtitle={dataSections.short_description} seeMoreLink="#">
      <Carousel
        infinite={true}
        visibleSlides={visibleSlides}
        totalSlides={dataSections.product_details.length}
        sx={{
          "& .carousel__slider": { paddingBottom: "15px" },
          "& #backArrowButton, #backForwardButton": {
            width: 35,
            height: 35,
            borderRadius: 0,
            boxShadow: shadows[2],
            color: palette.primary.main,
            background: palette.primary[50],
            "&:hover": { background: palette.primary[100] },
          },
        }}
      >
        {dataSections.product_details.map((item, ind) => (
          <ProductCard16
            key={ind}
            id={item.id}
            title={item.name}
            price={item.min_max_price.min_price}
            off={item.min_max_price.discount_in_percentage}
            rating={Number(item.rating)}
            imgUrl={item.image}
            category_name={item.category_name}
            short_description={item.short_description}
          />
        ))}
      </Carousel>
    </CategorySectionCreator>
  );
};

export default GiftShopPopularItems;
