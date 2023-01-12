import Person from "@mui/icons-material/Person";
import { Avatar, Box, Button, Card, Grid, Typography } from "@mui/material";
import { FlexBetween, FlexBox } from "components/flex-box";
import UserDashboardHeader from "components/header/UserDashboardHeader";
import CustomerDashboardLayout from "components/layouts/customer-dashboard";
import CustomerDashboardNavigation from "components/layouts/customer-dashboard/Navigations";
import TableRow from "components/TableRow";
import { H3, H5, Small } from "components/Typography";
import { format } from "date-fns";
import Link from "next/link";
import { authSelector } from "redux/authSlice";
import {useDispatch,useSelector } from "react-redux";
import { AppDispatch } from "redux/store";
import  { useEffect,useState} from 'react';
import { updateUser } from "redux/editSlice";
import {editSelector} from "redux/editSlice"
const Profile = () => {

 const {user} = useSelector(authSelector)
 const {loading,msg,username,dob,mobile}=useSelector(editSelector)

  return (
    <CustomerDashboardLayout>
      <UserDashboardHeader
        icon={Person}
        title="Mon Profil"
        navigation={<CustomerDashboardNavigation />}
        button={
          <Link href="/profile/edit" passHref>
            <Button color="primary" sx={{ px: 4, bgcolor: "primary.light" }}>
              Editer Le Profil 
            </Button>
          </Link>
        }
      />

      <Box mb={4}>
        <Grid container spacing={3}>
          <Grid item md={6} xs={12}>
            <Card
              sx={{
                display: "flex",
                p: "14px 32px",
                height: "100%",
                alignItems: "center",
              }}
            >
              <Avatar
                src={user.image}
                // src="/assets/images/faces/ralph.png"
                sx={{ height: 64, width: 64 }}
              />

              <Box ml={1.5} flex="1 1 0">
                <FlexBetween flexWrap="wrap">
                  <div>
                    {(!loading)? <H5 my="0px">{user.username}</H5>:<H5 my="0px">{username}</H5>}
                    <FlexBox alignItems="center">
                      <Typography color="grey.600">Points de fidélité:</Typography>
                      <Typography ml={0.5} color="primary.main">
                       {user.balance}
                      </Typography>
                    </FlexBox>
                  </div>

                  {/* <Typography color="grey.600" letterSpacing="0.2em">
                    SILVER USER
                  </Typography> */}
                </FlexBetween>
              </Box>
            </Card>
          </Grid>

          <Grid item md={6} xs={12}>
            <Grid container spacing={4}>
              {infoList.map((item) => (
                <Grid item lg={3} sm={6} xs={6} key={item.subtitle}>
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      p: "1rem 1.25rem",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <H3 color="primary.main" my={0} fontWeight={600}>
                      {item.title}
                    </H3>

                    <Small color="grey.600" textAlign="center">
                      {item.subtitle}
                    </Small>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>

      <TableRow sx={{ p: "0.75rem 1.5rem" }}>
        <FlexBox flexDirection="column" p={1}>
          <Small color="grey.600" mb={0.5} textAlign="left">
            Nom et Prénom
          </Small>
          {(!loading)?<span>{user.username}</span>:<span>{username}</span>}
          {/* <span>{(!loading)?{user.username}:({user.username})}</span> */}
        </FlexBox>

        {/* <FlexBox flexDirection="column" p={1}>
          <Small color="grey.600" mb={0.5} textAlign="left">
            Nom
          </Small>
          <span></span>
        </FlexBox> */}

        <FlexBox flexDirection="column" p={1}>
          <Small color="grey.600" mb={0.5} textAlign="left">
           E-mail
          </Small>
          <span>{user.email}</span>
        </FlexBox>

        <FlexBox flexDirection="column" p={1}>
          <Small color="grey.600" mb={0.5} textAlign="left">
          Téléphone
          </Small>
          {(!loading)?<span>{user.mobile}</span>:<span>{mobile}</span>}
        </FlexBox>

        <FlexBox flexDirection="column" p={1}>
          <Small color="grey.600" mb={0.5}>
            Date de naissance
          </Small>

            {/* {format(new Date(1996 / 11 / 16), "dd MMM, yyyy")} */}
          {(!loading)?<span className="pre">{user.dob}</span>:<span className="pre">{dob}</span>}
        </FlexBox>
      </TableRow>
    </CustomerDashboardLayout>
  );
};

const infoList = [
  { title: "00", subtitle: "Tous les ordres" },
  { title: "00", subtitle: "en attente de paiements" },
  { title: "00", subtitle: "En attente d'expédition" },
  { title: "00", subtitle: "En attente de livraison" },
];

export default Profile;



