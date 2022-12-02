import Setting from "components/Setting";
import { NextPage } from "next";
import { useState } from "react";
import { Box, Button, Container, IconButton,styled } from "@mui/material";
import { H1, Paragraph, Span } from "components/Typography";
import DoneIcon from "@mui/icons-material/Done";
import { Link as Scroll } from "react-scroll";
import { FlexBox } from "components/flex-box";
import LazyImage from "components/LazyImage";
import Link from "next/link";

const IndexPage: NextPage = () => {
  const [filterDemo, setFilterDemo] = useState("");

  return (
    <Box id="top" overflow="hidden" bgcolor="background.paper">
           <Container id="section-1" sx={{ mt: 12, position: "relative" }}>
        <Box maxWidth="830px" mx="auto" mb={6.5} textAlign="center">
          <H1 fontSize="40px" mb={3} fontWeight="900">
            <Span>Bienvenu chez AXAM</Span>
          </H1>

          <Paragraph
            fontSize="18px"
            fontWeight={500}
            maxWidth="540px"
            mx="auto"
            mb={5}
          >
       
          </Paragraph>

    
          <FlexBox justifyContent="center" mb={16}>

<Scroll to="demos" duration={400} offset={-72 - 16} smooth={true}>
  
<Link href="/axam">
{/* <a target="_blank" rel="noopener noreferrer"> */}
  
 
      <Button
    variant="contained"
    color="primary"
    size="large"
    sx={{ m: "0.5rem" }}
>
    Marketplace
  </Button>
{/* </a> */}
</Link>

</Scroll>
</FlexBox>


        </Box>

      </Container>
    </Box>
  );
};

export default IndexPage;
