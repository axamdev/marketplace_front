/* eslint-disable react-hooks/exhaustive-deps */
import { Box, debounce, MenuItem, TextField } from "@mui/material";
import BazaarButton from "components/BazaarButton";
import Link from "next/link";
import { FC, useCallback, useEffect, useRef, useState } from "react";
import { SearchOutlinedIcon, SearchResultCard } from "./SearchBox";
import api, {  ProductsResponse } from "utils/api/axam-products";
import { AppDispatch } from "redux/store";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getProducts, getProductsSliceSelector } from "redux/productSlice";
import { useRouter } from "next/router";

const GrocerySearchBox: FC = () => {
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  const [resultList, setResultList] = useState<string[]>([]);
  const parentRef = useRef();
 
  const Search = debounce((e) => {
    const value = e.target?.value;

    if (!value) setResultList([]);
    else setResultList(dummySearchResult);
  }, 200);
  //-------------
  // const dispatch = useDispatch<AppDispatch>();
 
  // const router = useRouter()
  // const category_id = parseInt(router.query.id as string);
  const hanldeSearch = useCallback((event) => {
    event.persist();
    Search(event);
    // dispatch(getProducts({category_id:category_id.toString(),search:inputText,tags:inputText}))
  }, []);

  const handleDocumentClick = () => setResultList([]);

  useEffect(() => {
    window.addEventListener("click", handleDocumentClick);
    return () => {
      window.removeEventListener("click", handleDocumentClick);
    };
  }, []);

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
        // onChange={inputHandler}
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
          endAdornment: (
            <BazaarButton
              color="primary"
              disableElevation
              variant="contained"
              sx={{
                px: "3rem",
                height: "100%",
                borderRadius: "0 300px 300px 0",
              }}
            >
              Rechercher
            </BazaarButton>
          ),
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

// const dummySearchResult = [
//   "Macbook Air 13",
//   "Asus K555LA",
//   "Acer Aspire X453",
//   "iPad Mini 3",
// ];

export default GrocerySearchBox;
