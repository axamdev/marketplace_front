import BazaarCard from "components/BazaarCard";
import React, { FC } from "react";
import CategoryMenuItem from "../CategoryMenuItem";
import MegaMenu3 from "./MegaMenu3";
import StyledMegaMenu from "./StyledMegaMenu";
import { ChildCategory, DataCategories } from "utils/api/axam-category";
///helloooozqjleegsfMAEQL<HKFDN
// component interface
export interface MegaMenu2Props {
  data: {
    icon: string;
    href: string;
    title: string;
    categories: ChildCategory[];
  };
}

const MegaMenu2: FC<MegaMenu2Props> = ({
  data: { categories}}) => {
  return (
    <StyledMegaMenu>
      <BazaarCard elevation={2} sx={{ ml: "1rem", py: "0.5rem" }}>
        {categories?.map(({id, ...item}) => (
          <CategoryMenuItem
            title={item.name}
            href={'#'}
            icon={item.icon}
            caret={!!item.children}
            key={id}
          >
            {/* {item.children && ( */}
               {/* <MegaMenu3 minWidth="560px" data={item.children} />
               <MegaMenu3 minWidth="560px" data={item.children} /> */}
            {/* )} */}
          </CategoryMenuItem>
        ))}
      </BazaarCard>
    </StyledMegaMenu>
  );
};

export default MegaMenu2;
