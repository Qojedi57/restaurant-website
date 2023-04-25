import React from "react";
import Layout from "./../components/Layout/Layout";
import CallIcon from "@mui/icons-material/Call";
import MailIcon from "@mui/icons-material/Mail";
import {
  Box,
  TableContainer,
  Typography,
  TableRow,
  TableHead,
  Table,
  TableCell,
  Paper,
  TableBody,
} from "@mui/material";

const Contact = () => {
  return (
    <Layout>
      <Box sx={{ my: 5, ml: 5, "& h4": { fontWeight: "bold", mb: 2, "& p":{
            textAlign:"justify",
            fontSize:20,
            fontFamily:"BlinkMacSystemFont",
        },} }}>
        <Typography variant="h4">Contact Us</Typography>
        <p>
          Need to reach us? Call at the number provided or feel free to send a
          message through Email! Say hi, tell us how great we're doing, or ask
          us a question. We will try our best to reply to everyone's messages as
          soon as we can.
        </p>
      </Box>
      <Box
        sx={{
          m: 3,
          width: "600px",
          ml: 5,
          "@media (max-width:600px)": {
            width: "300px",
          },
        }}
      >
        <TableContainer component={Paper}>
          <Table aria-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ bgcolor: "black", color: "white" }}
                  align="center"
                >
                  Contact Details
                </TableCell>
              </TableRow>
            </TableHead>
            <TableRow>
                <TableCell
                  sx={{ bgcolor: "grey", color: "white" }}
                  align="left"
                >
                  Phone
                </TableCell>
              </TableRow>
            <TableBody>
              <TableRow>
                <TableCell>
                  <CallIcon sx={{ color: "green", pt: 1 }} /> 562.485.2300
                  DOWNEY CA
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <CallIcon sx={{ color: "green", pt: 1 }} /> 949.860.1573
                  IRVINE CA
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  sx={{ bgcolor: "grey", color: "white" }}
                  align="left"
                >
                  Email
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <MailIcon sx={{ color: "skyblue", pt: 1 }} />{" "}
                  downey@poachedkitchen.com
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <MailIcon sx={{ color: "skyblue", pt: 1 }} />{" "}
                  hello@poachedkitchen.com ANAHIEM HILLS CA
                </TableCell>
              </TableRow>
              
              <TableRow>
                <TableCell>
                  <MailIcon sx={{ color: "skyblue", pt: 1 }} />{" "}
                  irvine@poachedkitchen.com
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  );
};

export default Contact;
