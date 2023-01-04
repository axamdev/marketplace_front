import { Box, Button, Divider, Grid, Radio, TextField } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Card1 from "components/Card1";
import { FlexBox } from "components/flex-box";
import { Paragraph } from "components/Typography";
import { CartItem, useAppContext } from "contexts/AppContext";
import { ordersSelector, postClientOrder } from "features/orders/ordersSlice";
import { Formik } from "formik";
import useWindowSize from "hooks/useWindowSize";
import Link from "next/link";
import { useRouter } from "next/router";
import { userAgent } from "next/server";
import React, { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import { authSelector } from "redux/authSlice";
import { useAppDispatch } from "redux/store";
import * as yup from "yup";
import ProductCard17 from "components/product-cards/ProductCard17";
import ProductCard7 from "components/product-cards/ProductCard7";
import { userSelector } from "features/user/userSlice";
//import Cart from "../../../pages/cart";
import LoadingButton from '@mui/lab/LoadingButton';
import { adressSelector } from "redux/adressSlice";
import { selectedAdrIdSelector } from "redux/sellectedAddress";


const PaymentForm = (props) => {
  const [isloading, setIsLoading] = useState(false);
   const handleClick =() =>{
    
   }
  const [paymentMethod, setPaymentMethod] = useState("credit-card");
  const {note,setNote} =props
  const dispatch= useAppDispatch();
  const {adresses,getAdr} = useSelector(adressSelector)
  const {selectedAdrId} = useSelector(selectedAdrIdSelector) ;
  const { error, msg} = useSelector(ordersSelector)
  const orders = useSelector(ordersSelector)
  const width = useWindowSize();
  const router = useRouter();
  const isMobile = width < 769;
  const { state } = useAppContext();
  const cartList: CartItem[] = state.cart;
  const {user,loading}=useSelector(authSelector);
 




  const getTotalPrice = () => {
    return cartList.reduce((accum, item) => accum + item.price * item.qty, 0);
  };

  let getProductVariantId = function (cartList: CartItem[]): string {
    let product_variant_id :string = "";
    for (let i = 0; i < cartList.length; i++) {
      if(i != cartList.length-1){
      product_variant_id+= cartList[i].id+"," ;
    }
    else{
      product_variant_id+= cartList[i].qty;
    }
     }
    return product_variant_id ;
  };

  let getProductQuantity = function (cartList: CartItem[]): string {
    let product_quantity :string = "";
    for (let i = 0;  i < cartList.length; i++ ) {
     if(i != cartList.length-1){
      product_quantity+= cartList[i].qty+"," ;
     }else{
      product_quantity+= cartList[i].qty;
     }
      
    }
  
    return product_quantity ;
  };

  const handleFormSubmit = async (values: any) => {

    setIsLoading(true);
    console.log("start loading ") ;
   await  dispatch(postClientOrder({user_id:user.id,mobile:user.mobile,product_variant_id: getProductVariantId(cartList), final_total:getTotalPrice(),total:getTotalPrice(),quantity:getProductQuantity(cartList),delivery_charge:'7.0',tax_amount:'0',tax_percentage:'0',payment_method:'COD'
   ,address_id:selectedAdrId,delivery_date:'10/12/2023',is_wallet_used:'0',
    delivery_time:'Today - Evening (4:00pm to 7:00pm)',active_status:'awaiting',order_note:''}))
    console.log("stop loading ") ;
    setIsLoading(false);
    if (loading==true){
      router.push("/orders");
    }
    
  };
//   dispatch(postClientOrder({user_id: '15',mobile:'55778899',product_variant_id: '72,73,70',quantity:'1,2,1',
//   total: '1550.00',delivery_charge:'7.0',tax_amount:'0',tax_percentage: '0',final_total: '1557.00',
//   payment_method:'COD',address_id:'2',delivery_date:'10/12/2023',is_wallet_used:'0',delivery_time:'Today - Evening (4:00pm to 7:00pm)',
//   order_note:'Salut , je veux savoir si vous ',active_status:'awaiting'}))
//   router.push("/payment");
// };
  
  const handlePaymentMethodChange = ({ target: { name } }: any) => {
    setPaymentMethod(name);
  };

  return (
    <Fragment >
      <Card1 sx={{ mb: 4 }}>
      <FormControlLabel
          name="cod"
          onChange={handlePaymentMethodChange}
          label={<Paragraph fontWeight={600}>Payement à la livraison </Paragraph>}
          control={
            <Radio
              checked={paymentMethod === "cod"}
              color="primary"
              size="small"
            />
          }
        />
        <Divider sx={{ mb: 3, mx: -4 }} />
        <FormControlLabel
         // disabled={true}
          sx={{ mb: 3 }}
          name="credit-card"
          onChange={handlePaymentMethodChange}
          label={<Paragraph fontWeight={600}>Payment sécurisé </Paragraph>}
          control={
            <Radio
              checked={paymentMethod === "credit-card"}
              color="primary"
              size="small"
            />
          }
        />

        <Divider sx={{ mb: 3, mx: -4 }} />

        {paymentMethod === "credit-card" && (
          <Formik
            onSubmit={handleFormSubmit}
            initialValues={initialValues}
            validationSchema={checkoutSchema}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
            }) => (
              <form onSubmit={handleSubmit}>
                <Box mb={3}>
                  <Grid container spacing={3}>
                    <Grid item sm={6} xs={12}>
                      <TextField
                        fullWidth
                        name="card_no"
                        label="Card Number"
                        onBlur={handleBlur}
                        value={values.card_no}
                        onChange={handleChange}
                        helperText={touched.card_no && errors.card_no}
                      />
                    </Grid>
                    <Grid item sm={6} xs={12}>
                      <TextField
                        fullWidth
                        name="exp_date"
                        label="Exp Date"
                        placeholder="MM/YY"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.exp_date}
                        helperText={touched.exp_date && errors.exp_date}
                      />
                    </Grid>
                    <Grid item sm={6} xs={12}>
                      <TextField
                        fullWidth
                        name="name"
                        onBlur={handleBlur}
                        value={values.name}
                        label="Name on Card"
                        onChange={handleChange}
                        helperText={touched.name && errors.name}
                      />
                    </Grid>
                    <Grid item sm={6} xs={12}>
                      <TextField
                        fullWidth
                        name="name"
                        onBlur={handleBlur}
                        value={values.name}
                        label="Name on Card"
                        onChange={handleChange}
                        helperText={touched.name && errors.name}
                      />
                    </Grid>
                  </Grid>
                </Box> 

                 <Button variant="outlined" color="primary" sx={{ mb: 4 }}>
                  Submit
                </Button> 

                 <Divider sx={{ mb: 3, mx: -4 }} /> 
              </form>
            )}
          </Formik>
        )}

        <FormControlLabel
          disabled={true}
          name="paypal"
          sx={{ mb: 3 }}
          onChange={handlePaymentMethodChange}
          label={<Paragraph fontWeight={600}>Payement avec virement bancaire ou chèque</Paragraph>}
          control={
            <Radio
              checked={paymentMethod === "paypal"}
              color="primary"
              size="small"
            />
          }
        />

        <Divider sx={{ mb: 3, mx: -4 }} />

        {paymentMethod === "paypal" && (
          <Fragment>
            <FlexBox alignItems="flex-end" mb={4}>
              <TextField
                fullWidth
                name="email"
                type="email"
                label="Paypal Email"
                sx={{ mr: isMobile ? "1rem" : "30px" }}
              />
              <Button variant="outlined" color="primary" type="button">
                Submit
              </Button>
            </FlexBox>

            <Divider sx={{ mb: 3, mx: -4 }} />
          </Fragment>
        )}

       
      </Card1>

      <Grid container spacing={7}>
        <Grid item sm={6} xs={12}>
          <Link href="/checkout" passHref>
            <Button variant="outlined" color="primary" type="button" fullWidth>
              Back to checkout details
            </Button>
          </Link>
        </Grid>
        <Grid item sm={6} xs={12}>
          {/* <Link href="/orders" passHref> */}
            <LoadingButton  loading = {isloading} onClick={handleFormSubmit} 
                        variant="outlined"  color="primary" type="submit" fullWidth>
              Review
            </LoadingButton>
          {/* </Link> */}
        </Grid>
      </Grid>
    </Fragment>
  );
};

const initialValues = {
  card_no: "",
  name: "",
  exp_date: "",
  cvc: "",
  shipping_zip: "",
  shipping_country: "",
  shipping_address1: "",
  shipping_address2: "",

  billing_name: "",
  billing_email: "",
  billing_contact: "",
  billing_company: "",
  billing_zip: "",
  billing_country: "",
  billing_address1: "",
  billing_address2: "",
};

const checkoutSchema = yup.object().shape({
  card_no: yup.string().required("required"),
  name: yup.string().required("required"),
  exp_date: yup.string().required("required"),
  cvc: yup.string().required("required"),
  // shipping_zip: yup.string().required("required"),
  // shipping_country: yup.object().required("required"),
  // shipping_address1: yup.string().required("required"),
  // billing_name: yup.string().required("required"),
  // billing_email: yup.string().required("required"),
  // billing_contact: yup.string().required("required"),
  // billing_zip: yup.string().required("required"),
  // billing_country: yup.string().required("required"),
  // billing_address1: yup.string().required("required"),
});

export default PaymentForm;
