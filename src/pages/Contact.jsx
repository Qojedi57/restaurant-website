import { Box, Typography} from "@mui/system";
import React from "react";
import Layout from "./../components/Layout/Layout";

const Contact = () => {
  return (
    <Layout>
      <Box sx={{ my:10, ml:10,"& h4":{fontWeight:'bold',mb:2} }}>
        <Typography variant="h4">Contact The Restaurant</Typography>
        <p>
        Need to reach us? Call at the number provided or feel free to send us a message through Email! Say hi, tell us how great we're doing, or ask us a question. We will try our best to reply to everyone's messages as soon as we can. 
        </p>
      </Box>

    </Layout>
  );
};

export default Contact;
