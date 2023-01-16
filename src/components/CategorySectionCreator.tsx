import { Box, BoxProps, Container } from "@mui/material";
import { FC, ReactNode } from "react";
import CategorySectionHeader from "./CategorySectionHeader";
import  { SectionsResponse  } from "utils/api/axam-sections";

// ==============================================================
type CategorySectionCreatorProps = {
  title?: string;
  subtitle?: string;
  icon?: ReactNode;
  seeMoreLink?: string;
  // Section_by_Id?:SectionsResponse
};
// ==============================================================

const CategorySectionCreator: FC<CategorySectionCreatorProps & BoxProps> = (
  props
) => {
  const { icon, title, subtitle,children,seeMoreLink, ...others } = props;
//  console.log("list here", Section_by_Id)
  return (
    <Box mb={7.5} {...others}>
      <Container sx={{ pb: "1rem" }}>
        {title && (
          <CategorySectionHeader
            title={title}
            subtitle={subtitle}
            seeMoreLink={seeMoreLink}
            icon={icon}
           

          />
        )}

        {children}
      </Container>
    </Box>
  );
};

export default CategorySectionCreator;
