import { Button, Card, Divider, Grid, TextField } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import MenuItem from "@mui/material/MenuItem";
import { FlexBetween, FlexBox } from "components/flex-box";
import CheckoutNavLayout from "components/layouts/CheckoutNavLayout";
import ProductCard7 from "components/product-cards/ProductCard7";
import SEO from "components/SEO";
import { Span } from "components/Typography";
import { CartItem, useAppContext } from "contexts/AppContext";
import countryList from "data/countryList";
import { NextPage } from "next";
import Link from "next/link";

const Cart: NextPage = () => {
  const { state } = useAppContext();
  const cartList: CartItem[] = state.cart;

  const getTotalPrice = () => {
    return cartList.reduce((accum, item) => accum + item.price * item.qty, 0);
  };

  return (
    <CheckoutNavLayout>
      <SEO title="Cart" />
      <Grid container spacing={3}>
        <Grid item md={8} xs={12}>
          {cartList.map((item) => (
            <ProductCard7 key={item.id} {...item} />
          ))}
        </Grid>

        <Grid item md={4} xs={12}>
          <Card sx={{ padding: 3 }}>
            <FlexBetween mb={2}>
              <Span color="grey.600">Total:</Span>

              <Span fontSize={18} fontWeight={600} lineHeight="1">
                ${getTotalPrice().toFixed(2)}
              </Span>
            </FlexBetween>

            <Divider sx={{ mb: 2 }} />

            <FlexBox alignItems="center" columnGap={1} mb={2}>
              <Span fontWeight="600">Commentaires supplémentaires</Span>

              <Span
                p="6px 10px"
                fontSize={12}
                lineHeight="1"
                borderRadius="3px"
                color="primary.main"
                bgcolor="primary.light"
              >
                Note
              </Span>
            </FlexBox>

            <TextField
              variant="outlined"
              rows={6}
              fullWidth
              multiline
              sx={{ mb: 2 }}
            />

            <Divider sx={{ mb: 2 }} />

            <TextField
            disabled={true}
              fullWidth
              size="small"
              label="Voucher"
              variant="outlined"
              placeholder="le bon d'achat"
            />

            <Button
            disabled={true}
              variant="outlined"
              color="primary"
              fullWidth
              sx={{ mt: 2, mb: 4 }}
            >
             Appliquer le bon d'achat
            </Button>

            <Divider sx={{ mb: 2 }} />

            <Span fontWeight={600} mb={2} display="block">
            Estimations d'expédition
            </Span>

            <Autocomplete
              fullWidth
              sx={{ mb: 2 }}
              options={countryList}
              // getOptionLabel={(option) => option.label}
              renderInput={(params) => (
                <TextField
                  {...params}
                  size="small"
                  label="Etat"
                  variant="outlined"
                  placeholder="Choisissez le pays"
                />
              )}
            />

            <TextField
              select
              fullWidth
              size="small"
              label="Délégation"
              variant="outlined"
              placeholder="Choisissez la Délégation"
              defaultValue="new-york"
            >
              {stateList.map((item) => (
                <MenuItem value={item.value} key={item.label}>
                  {item.label}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              fullWidth
              size="small"
              label="Code postal"
              placeholder="3100"
              variant="outlined"
              sx={{ mt: 2 }}
            />

            <Button variant="outlined" color="primary" fullWidth sx={{ my: 2 }}>
            Calculer Frais de port
            </Button>

            <Link href="/checkout" passHref>
              <Button variant="contained" color="primary" fullWidth>
              Passer à la caisse
              </Button>
            </Link>
          </Card>
        </Grid>
      </Grid>
    </CheckoutNavLayout>
  );
};

const stateList = [
  { value: "Sahline", label: "Sahline" },
  { value: "Moknine", label: "Moknine" },
  { value: "Sousse Medina", label: "Sousse Medina" },
];

export default Cart;
