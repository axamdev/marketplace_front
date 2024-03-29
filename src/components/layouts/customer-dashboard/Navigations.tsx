import { CreditCard, FavoriteBorder, Person, Place } from "@mui/icons-material";
import ShoppingBagOutlined from "@mui/icons-material/ShoppingBagOutlined";
import { Card, styled, Typography } from "@mui/material";
import { FlexBox } from "components/flex-box";
import CustomerService from "components/icons/CustomerService";
import NavLink, { NavLinkProps } from "components/nav-link/NavLink";
import { useRouter } from "next/router";
import { FC, Fragment } from "react";

// custom styled components
const MainContainer = styled(Card)(({ theme }) => ({
  paddingBottom: "1.5rem",
  [theme.breakpoints.down("md")]: {
    boxShadow: "none",
    overflowY: "auto",
    height: "calc(100vh - 64px)",
  },
}));

type StyledNavLinkProps = { isCurrentPath: boolean };

const StyledNavLink = styled<FC<StyledNavLinkProps & NavLinkProps>>(
  ({ children, isCurrentPath, ...rest }) => (
    <NavLink {...rest}>{children}</NavLink>
  )
)<StyledNavLinkProps>(({ theme, isCurrentPath }) => ({
  display: "flex",
  alignItems: "center",
  borderLeft: "4px solid",
  paddingLeft: "1.5rem",
  paddingRight: "1.5rem",
  marginBottom: "1.25rem",
  justifyContent: "space-between",
  borderColor: isCurrentPath ? theme.palette.primary.main : "transparent",
  "& .nav-icon": {
    color: isCurrentPath ? theme.palette.primary.main : theme.palette.grey[600],
  },
  "&:hover": {
    borderColor: theme.palette.primary.main,
    "& .nav-icon": { color: theme.palette.primary.main },
  },
}));

const Navigations = () => {
  const { pathname } = useRouter();

  return (
    <MainContainer>
      {linkList.map((item) => (
        <Fragment key={item.title}>
          <Typography p="26px 30px 1rem" color="grey.600" fontSize="12px">
            {item.title}
          </Typography>

          {item.list.map((item) => (
            <StyledNavLink
              href={item.href}
              key={item.title}
              isCurrentPath={pathname.includes(item.href)}
            >
              <FlexBox alignItems="center" gap={1}>
                <item.icon
                  color="inherit"
                  fontSize="small"
                  className="nav-icon"
                />
                <span>{item.title}</span>
              </FlexBox>

              <span>{item.count}</span>
            </StyledNavLink>
          ))}
        </Fragment>
      ))}
    </MainContainer>
  );
};

const linkList = [
  {
    title: "ACCOUNT SETTINGS",
    list: [
      { href: "/profile", title: "Profile Info", icon: Person, count: 3 },
      { href: "/address", title: "Addresses", icon: Place, count: 16 },
      {
        href: "/payment-methods",
        title: "Payment Methods",
        icon: CreditCard,
        count: 4,
      },
      {
        href: "/support-tickets",
        title: "Support Tickets",
        icon: CustomerService,
        count: 1,
      },
    ],
  },
 // {
  //   title: "DASHBOARD",
  //   list: [
  //     { href: "/orders", title: "Orders", icon: ShoppingBagOutlined, count: 5 },
  //     {
  //       href: "/wish-list",
  //       title: "Wishlist",
  //       icon: FavoriteBorder,
  //       count: 19,
  //     },
  //     {
  //       href: "/support-tickets",
  //       title: "Support Tickets",
  //       icon: CustomerService,
  //       count: 1,
  //     },
  //   ],
  // },

];

export default Navigations;
