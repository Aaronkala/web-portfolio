import React from "react";
import styled from "styled-components";
import { Box, Image } from "rebass";
import { position, display } from "styled-system";

import Content from "./content";
import SplitLayout from "../../components/splitLayout/splitLayout";
import Container from "../../components/container/container";
import Head from "../../components/head/head";
import Nav from "../../components/navigation/navigation";
import me from "../../../static/aaron.jpg";
import analytics from "../../utils/analytics";

const PositionBox = styled(Box)`
  ${position};
  ${display};
`;

const CustomImage = styled(Image)`
  max-width: 300px;
  max-height: 400px;
  object-fit: cover;
`;

const Home = () => {
  React.useEffect(() => {
    analytics({ event: "spa-pageview" });
  }, []);

  return (
    <Box mt={{ xs: 3, md: 7 }} mb={7}>
      <Head title="Hakala - Home" name="About me" />
      {/* <Nav type="centered" display={{ xs: 'initial', md: 'none' }} /> */}
      <Container>
        <SplitLayout
          left={
            <PositionBox position={{ xs: "initial", md: "fixed" }}>
              {/* <Nav type="hovering" display={{ xs: "none", md: "flex" }} /> */}
              <PositionBox display="flex">
                <CustomImage src={me} mx="auto" mt={{ xs: 4, md: 0 }} />
              </PositionBox>
            </PositionBox>
          }
          right={<Content />}
        />
      </Container>
    </Box>
  );
};

export default Home;
