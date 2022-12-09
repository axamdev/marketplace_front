import { Box, styled } from "@mui/material";
import navigations from "data/navigations";
import { FC, useEffect, useState } from "react";
import { DataCategories } from "utils/api/axam-category";
import CategoryMenuItem from "./CategoryMenuItem";
import MegaMenu1 from "./mega-menu/MegaMenu1";
import MegaMenu2 from "./mega-menu/MegaMenu2";

// styled component
const Wrapper = styled(Box)<CategoryMenuCardProps>(
  ({ theme, position, open }) => ({
    left: 0,
    zIndex: 98,
    right: "auto",
    borderRadius: 4,
    padding: "0.5rem 0px",
    transformOrigin: "top",
    boxShadow: theme.shadows[2],
    position: position || "unset",
    transition: "all 250ms ease-in-out",
    transform: open ? "scaleY(1)" : "scaleY(0)",
    backgroundColor: theme.palette.background.paper,
    top: position === "absolute" ? "calc(100% + 0.7rem)" : "0.5rem",
  })
);

// ===============================================================
type CategoryMenuCardProps = {
  open?: boolean;
  position?: "absolute" | "relative";
  categoriesList?:DataCategories;
};
// ===============================================================

const CategoryMenuCard: FC<CategoryMenuCardProps> = (props) => {
  const { open, position,categoriesList } = props;

  const megaMenu: any = { MegaMenu1, MegaMenu2 };


  // type ObjectKey = keyof typeof categoriesList;
  // const myVar = 'data' as ObjectKey;
  // console.log(categoriesList[myVar]); // 👉️ Hamza

 // console.log("hello"+ categoriesList.keys() )
    // console.log("1"+typeof categoriesList);
    // console.log("2"+categoriesList.message);

    // const [categories, setcategories] = useState([]); 
    // useEffect(() => {
  
    //   categoriesList!=undefined ?? setcategories(props.categoriesList.data);

    // });
  console.log("categories"+categoriesList.data[0].name);
    return (
    <Wrapper open={open} position={position}>
      {categoriesList.data.map((item) => {
         let MegaMenu = megaMenu['MegaMenu1'];
         
        return (
          <CategoryMenuItem
            key={item.id}
             href={"#"}
            // icon={item.icon}
            title={item.name}
            caret={!!item.children}
          >
            {/* <MegaMenu data={item.menuData || {}} /> */}
            <MegaMenu data={item.children || {}} />
          </CategoryMenuItem>
        );
      })}
    </Wrapper>
  );
};

CategoryMenuCard.defaultProps = { position: "absolute" };

export default CategoryMenuCard;
