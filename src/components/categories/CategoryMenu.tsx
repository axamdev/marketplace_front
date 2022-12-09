/* eslint-disable react-hooks/exhaustive-deps */
import { Box, styled } from "@mui/material";
import React, { FC, useEffect, useRef, useState } from "react";
import { DataCategories } from "utils/api/axam-category";
import CategoryMenuCard from "./CategoryMenuCard";

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

const CategoryMenu: FC<CategoryMenuProps> = ({
  open: isOpen = false,
  children,
  categoriesList
}) => {
  const [open, setOpen] = useState(isOpen);
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

console.log("Data in category menu : "+ categoriesList)
console.log(categoriesList);


  return (
    <Wrapper open={open}>
      {React.cloneElement(children, {
        open,
        onClick: toggleMenu,
        className: `${children.props.className}`,
      })}

    {!!categoriesList && <CategoryMenuCard open={open} categoriesList={categoriesList} />}
    </Wrapper>
  );
};

export default CategoryMenu;
