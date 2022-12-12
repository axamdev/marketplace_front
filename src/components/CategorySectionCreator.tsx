import { Box, BoxProps, Container } from "@mui/material";
import { FC, ReactNode } from "react";
import CategorySectionHeader from "./CategorySectionHeader";

// ==============================================================
type CategorySectionCreatorProps = {
  title?: string;
  subtitle?: string;
  icon?: ReactNode;
  seeMoreLink?: string;
};
// ==============================================================

const CategorySectionCreator: FC<CategorySectionCreatorProps & BoxProps> = (
  props
) => {
  const { icon, title, subtitle,children, seeMoreLink, ...others } = props;

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
