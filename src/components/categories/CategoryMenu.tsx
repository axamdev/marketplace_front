/* eslint-disable react-hooks/exhaustive-deps */
import { Box, styled } from "@mui/material";
import React, { FC, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { categoriesSelector } from "redux/categoriesSlice";
import { DataCategories } from "utils/api/axam-category";
import CategoryMenuCard from "./CategoryMenuCard";
import BazaarButton from "components/BazaarButton";

// styled component
const Wrapper = styled(Box)<{ open: boolean }>(
  ({ open, theme: { direction } }) => ({
    cursor: "pointer",
    position: "relative",
    "& .dropdown-icon": {
      transition: "all 250ms ease-in-out",
      transform: `rotate(${
        open ? (direction === "rtl" ? "-90deg" : "90deg") : "0deg"
      })`,
    },
  })
);

// ===========================================================
type CategoryMenuProps = {
  open?: boolean;
  children: React.ReactElement;
  categoriesList?:DataCategories;
};
// ===========================================================
const CategoryMenuButton = styled(BazaarButton)(({ theme }) => ({
  width: "278px",
  height: "40px",
  backgroundColor: theme.palette.grey[100],
  textAlign:'left'
}));
const CategoryMenu: FC<CategoryMenuProps> = ({
  open: isOpen = false,
  children,
  categoriesList
}) => {
  const [open, setOpen] = useState(isOpen);
  const [showMenu, setShowTooltip] = useState(false);
  const popoverRef = useRef(open);
  popoverRef.current = open;

  const toggleMenu = (e: React.MouseEvent<Document, MouseEvent>) => {
    e.stopPropagation();
    if (!isOpen) setOpen((open) => !open);
  };

  const handleDocumentClick = () => {
    if (popoverRef.current && !isOpen) setOpen(false);
  };


  useEffect(() => {
    window.addEventListener("click", handleDocumentClick);

    return () => window.removeEventListener("click", handleDocumentClick);
  }, []);

//console.log("Data in category menu : "+ categoriesList)
//console.log(categoriesList);
const getCateg = useSelector(categoriesSelector)

  return (
    <Wrapper open={open}>
       <CategoryMenuButton        onMouseEnter={() => setOpen(true)}
         onMouseLeave={() => setOpen(false)}
        >
     
      {React.cloneElement(children, {
        open,
        onClick: toggleMenu,
       
        className: `${children.props.className}`,
      })}

    {!!categoriesList && <CategoryMenuCard open={open} categoriesList={categoriesList} />} 
    </CategoryMenuButton>
    </Wrapper>
  );
};

export default CategoryMenu;
