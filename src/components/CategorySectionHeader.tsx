import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import { Box } from "@mui/system";
import useSettings from "hooks/useSettings";
import Link from "next/link";
import React, { ReactNode } from "react";
import { FlexBetween, FlexBox } from "./flex-box";
import { H1, H2, H5, Paragraph } from "./Typography";

// ===================================================
type CategorySectionHeaderProps = {
  title?: string;
  subtitle?: string;
  icon?: ReactNode;
  seeMoreLink?: string;
};
// ===================================================

const CategorySectionHeader: React.FC<CategorySectionHeaderProps> = (props) => {
  const { title, subtitle,seeMoreLink, icon } = props;

  const { settings } = useSettings();

  return (
    <FlexBetween mb={3}>
      <FlexBox alignItems="center" gap={1}>
        {icon && <FlexBox alignItems="center">{icon}</FlexBox>}
        <Box my={2}>
        <H1 mb="4px">{title}</H1>
        <Paragraph color="grey.600">
          {subtitle}
        </Paragraph>
      </Box>
      </FlexBox>

      {seeMoreLink && (
        <Link href={seeMoreLink}>
          <a>
            <FlexBox alignItems="center" color="grey.600">
              View all
              {settings.direction === "ltr" ? (
                <ArrowRight fontSize="small" color="inherit" />
              ) : (
                <ArrowLeft fontSize="small" color="inherit" />
              )}
            </FlexBox>
          </a>
        </Link>
      )}
    </FlexBetween>
  );
};

export default CategorySectionHeader;
