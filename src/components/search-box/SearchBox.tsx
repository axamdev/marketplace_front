/* eslint-disable react-hooks/exhaustive-deps */
import KeyboardArrowDownOutlined from "@mui/icons-material/KeyboardArrowDownOutlined";
import SearchOutlined from "@mui/icons-material/SearchOutlined";
import { Box, Card, MenuItem, TextField } from "@mui/material";
import TouchRipple from "@mui/material/ButtonBase";
import { styled } from "@mui/material/styles";
import { debounce } from "@mui/material/utils";
import BazaarMenu from "components/BazaarMenu";
import { FlexBox } from "components/flex-box";
import Link from "next/link";
import { FC, useCallback, useEffect, useRef, useState } from "react";
import { DataCategories } from "utils/api/axam-category";

// styled components
// also used in the GrocerySearchBox component
export const SearchOutlinedIcon = styled(SearchOutlined)(({ theme }) => ({
  color: theme.palette.grey[600],
  marginRight: 6,
}));

// also used in the GrocerySearchBox component
export const SearchResultCard = styled(Card)(() => ({
  zIndex: 99,
  top: "100%",
  width: "100%",
  position: "absolute",
  paddingTop: "0.5rem",
  paddingBottom: "0.5rem",
}));

const DropDownHandler = styled(FlexBox)(({ theme }) => ({
  whiteSpace: "pre",
  borderTopRightRadius: 300,
  borderBottomRightRadius: 300,
  borderLeft: `1px solid ${theme.palette.text.disabled}`,
  [theme.breakpoints.down("xs")]: { display: "none" },
}));
//j'ai ajouter SearchBoxProps pour passer categoriesList comme props
type SearchBoxProps = {
  categoriesList?: DataCategories;
};
//j'ai ajouter props
const SearchBox: FC<SearchBoxProps> = (props) => {
  const {categoriesList } = props;
//console.log(categoriesList);
  const [category, setCategory] = useState("All Categories");

  const [resultList, setResultList] = useState<string[]>([]);
  const parentRef = useRef();
///***** */
  const handleCategoryChange = (cat: any) => () =>
  
  setCategory(cat);
//******* **/
  const search = debounce((e) => {
    const value = e.target?.value;

    if (!value) setResultList([]);
    else setResultList(dummySearchResult);
  }, 200);

  const hanldeSearch = useCallback((event) => {
    event.persist();
    search(event);
  }, []);

  const handleDocumentClick = () => setResultList([]);

  useEffect(() => {
    window.addEventListener("click", handleDocumentClick);
    return () => window.removeEventListener("click", handleDocumentClick);
  }, []);

  const categoryDropdown = (
    <BazaarMenu
      direction="left"
      sx={{ zIndex: 1502 }}
      handler={
        <DropDownHandler
          px={3}
          gap={0.5}
          height="100%"
          color="grey.700"
          bgcolor="grey.100"
          alignItems="center"
          component={TouchRipple}
        >
          {category}
          <KeyboardArrowDownOutlined fontSize="small" color="inherit" />
        </DropDownHandler>
      }
    >
      
      {categoriesList.data.map((item) => (
        <MenuItem key={item} onClick={handleCategoryChange(item.name)}>
          {/* item.name pour afficher le nom de categorie */}
          {item.name}
        </MenuItem>
      ))}
    </BazaarMenu>
  );
//j'ai importée categoriesList pour map sur les categories
  return (
    <Box
      position="relative"
      flex="1 1 0"
      maxWidth="670px"
      mx="auto"
      {...{ ref: parentRef }}
    >
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Searching for..."
        onChange={hanldeSearch}
        InputProps={{
          sx: {
            height: 44,
            paddingRight: 0,
            borderRadius: 300,
            color: "grey.700",
            overflow: "hidden",
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "primary.main",
            },
          },
          endAdornment: categoryDropdown,
          startAdornment: <SearchOutlinedIcon fontSize="small" />,
        }}
      />

      {!!resultList.length && (
        <SearchResultCard elevation={2}>
          {resultList.map((item) => (
            <Link href={`/product/search/${item}`} key={item} passHref>
              <MenuItem key={item}>{item}</MenuItem>
            </Link>
          ))}
        </SearchResultCard>
      )}
    </Box>
  );
};

// const categories = [
//   "All Categories",
//   "Car",
//   "Clothes",
//   "Electronics",
//   "Laptop",
//   "Desktop",
//   "Camera",
//   "Toys",
// ];

const dummySearchResult = [
  "Macbook Air 13",
  "Asus K555LA",
  "Acer Aspire X453",
  "iPad Mini 3",
];

export default SearchBox;
