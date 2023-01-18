import {
  Box,
  Card,
  Checkbox,
  Divider,
  FormControlLabel,
  Rating,
  TextField,
} from "@mui/material";
import Accordion from "components/accordion/Accordion";
import AccordionHeader from "components/accordion/AccordionHeader";
import BazaarButton from "components/BazaarButton";
import { FlexBetween, FlexBox } from "components/flex-box";
import { H5, H6, Paragraph, Span } from "components/Typography";
import { useSelector } from "react-redux";
import { Button } from "react-scroll";
import React, { useEffect,useState } from "react";
import { getProducts, getProductsSliceSelector } from "redux/productSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "redux/store";

const ProductFilterCard = (props) => {
  const dispatch = useDispatch<AppDispatch>();
  const {min_price,max_price}= useSelector(getProductsSliceSelector)
  const[minvalue,setminValue]=useState<number>()
  const[maxvalue,setmaxValue]=useState<number>()
  const handleClick=()=>{
    console.log("filter",minvalue,maxvalue)
    dispatch(getProducts({category_id:props.category_id.toString(),min_price:minvalue.toString(),max_price:maxvalue.toString()}))
  }
  return (
    <Card sx={{ p: "18px 27px", overflow: "auto" }} elevation={1}>
      {/* <H6 mb={1.25}>Filtre</H6> */}

      {/* {categroyList.map((item) =>
        item.subCategories ? (
          <Accordion key={item.title} expanded>
            <AccordionHeader px={0} py={0.75} color="grey.600">
              <Span sx={{ cursor: "pointer", mr: "9px" }}>{item.title}</Span>
            </AccordionHeader>

            {item.subCategories.map((name) => (
              <Paragraph
                pl="22px"
                py={0.75}
                key={name}
                fontSize="14px"
                color="grey.600"
                sx={{ cursor: "pointer" }}
              >
                {name}
              </Paragraph>
            ))}
          </Accordion>
        ) : (
          <Paragraph
            py={0.75}
            fontSize="14px"
            color="grey.600"
            key={item.title}
            className="cursor-pointer"
          >
            {item.title}
          </Paragraph>
        )
      )} */}

      <Divider sx={{ mt: 2, mb: 3 }} />

      <H6 mb={2}>Échelle des prix</H6>
      <FlexBetween>
        <TextField 
        inputProps ={{inputProps: {max:parseInt(max_price) , min: parseInt(min_price)}}} 
         value={minvalue} 
        onChange={(e) => {
          var value = parseInt(e.target.value, 10);

          if (value > parseInt(max_price)) value = parseInt(max_price);
          if (value < parseInt(min_price)) value =parseInt(min_price) ;

          setminValue(value);
        }}
        label={parseInt(min_price)}
        type="number" 
        size="small" fullWidth />
        <H5 color="grey.600" px={1}>
          -
        </H5>
        <TextField  inputProps ={{inputProps: {max:parseInt(max_price) , min: parseInt(min_price)}}} 
        value={maxvalue} 
        onChange={(e) => {
          var value = parseInt(e.target.value, 10);

          if (value >= parseInt(max_price)) value = parseInt(max_price);
          if (value <= parseInt(min_price)) value =parseInt(min_price) ;

          setmaxValue(value);
        }}
        label={parseInt(max_price)}
         type="number" size="small" fullWidth />
      </FlexBetween>
      <Divider sx={{ my: 3 }} />
      <FlexBetween>  <H5 color="grey.600" px={1}>
          -
        </H5> <BazaarButton onClick={handleClick}>Filter</BazaarButton>  <H5 color="grey.600" px={1}>
          -
        </H5></FlexBetween>
      
      <Divider sx={{ my: 3 }} />

      <H6 mb={2}>Marques</H6>
      {brandList.map((item) => (
        <FormControlLabel
          key={item}
          sx={{ display: "flex" }}
          label={<Span color="inherit">{item}</Span>}
          control={<Checkbox size="small" color="secondary" />}
        />
      ))}

      <Divider sx={{ my: 3 }} />
      <H6 mb={2}>Type de stock</H6>
      {otherOptions.map((item) => (
        <FormControlLabel
          key={item}
          sx={{ display: "flex" }}
          label={<Span color="inherit">{item}</Span>}
          control={<Checkbox size="small" color="secondary" />}
        />
      ))}

      <Divider sx={{ my: 3 }} />

      <H6 mb={2}>évaluation</H6>
      {[5, 4, 3, 2, 1].map((item) => (
        <FormControlLabel
          control={<Checkbox size="small" color="secondary" />}
          label={<Rating size="small" value={item} color="warn" readOnly />}
          sx={{ display: "flex" }}
          key={item}
        />
      ))}

      <Divider sx={{ my: 3 }} />

      <H6 mb={2}>Couleurs</H6>
      <FlexBox mb={2} flexWrap="wrap" gap={1}>
        {colorList.map((item) => (
          <Box
            flexShrink={0}
            sx={{
              width: 25,
              height: 25,
              bgcolor: item,
              cursor: "pointer",
              borderRadius: "50%",
            }}
            key={item}
          />
        ))}
      </FlexBox>
    </Card>
  );
};

const categroyList = [
  {
    title: "Taille",
    subCategories: ["Grand", "Moyen", "Petit"],
  },
  { title: "700 pouce" },
  { title: "Canapé a 2 place" },
  { title: "Tissu Cuir" },
];

const brandList = ["Maccs", "Karts", "Baars", "Bukks", "Luasis"];
const otherOptions = ["En Vente", "En stock", "Présenté"];
const colorList = [
  "#1C1C1C",
  "#FF7A7A",
  "#FFC672",
  "#84FFB5",
  "#70F6FF",
  "#6B7AFF",
];

export default ProductFilterCard;
