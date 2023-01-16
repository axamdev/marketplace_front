import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import { Box } from "@mui/system";
import useSettings from "hooks/useSettings";
import Link from "next/link";
import  { ReactNode } from "react";
import { FlexBetween, FlexBox } from "./flex-box";
import { H1, H2, H5, Paragraph } from "./Typography";
import Router, { useRouter } from "next/router";
import api, { SectionsResponse  } from "utils/api/axam-sections";
import React, { useEffect,useState } from "react";

// ===================================================
type CategorySectionHeaderProps = {
  title?: string;
  subtitle?: string;
  icon?: ReactNode;
  seeMoreLink?: string;
  // Section_by_Id?:SectionsResponse
 
};
// type Props={
//   Section_by_Id?:SectionsResponse
// }

// ===================================================

const CategorySectionHeader: React.FC<CategorySectionHeaderProps > = (props) => {
   const { title, subtitle,seeMoreLink, icon} = props;
  const { settings } = useSettings();
  // console.log("Sections here",Section_by_Id)
//  const router = useRouter()
//  const section_id = parseInt(router.query.id as string);
//  const [ProductSections, setProductSections] = useState<SectionsResponse> ();
//  useEffect(() => {
//     api.getSections_by_Id(section_id).then((data)=>setProductSections(data))
//  }, []);
//  console.log("succes here",ProductSections)

//  console.log("idSections here",ProductSections.data[0].id)
//  const sectionId=Section_by_Id.data[0]
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
        //  <Link href={seeMoreLink}> 
         
            // <Link href={`product/sections/${ProductSections.data[0].id}`} > 
          //  <Link href="product/sections/17">  
          <Link href={`product/sections/${seeMoreLink}`} > 
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
