import React from 'react';
import Layout from './../components/Layout/Layout';
import {Box, Typography} from '@mui/material';

const About = () => {
  return (
    <Layout>
        <Box 
        sx={{
          my:15,
          textAlign:"center",
          p:2,
          "& h4":{
            fontWeight:'bold',
            my:2,
            fontSize:"2rem",
          },
          "& p":{
            textAlign:"justify",

          }
        
        }}
        >
        <Typography variant="h4">Welcome to Poached Kitchen</Typography>
        <p>
        This is an Unofficial website the original link to the website can be found on the footer of this website.Poached Kitchen began the journey and began early 2017. When the restaurant excitedly opened their kitchen doors in Downey. This brunch restaurant had a goal in minf to bring a new style and concept to breakfast, brunch, and lunch dining to the Downey Restaurant scene plus other two locations Anaheim and Irvine.As for the short years that the restaurant has been open, there is a tremendous amount of love and support, and an overwhelming sense of welcome from the community. Poached Neighborhood Kitchen has seen thousands of hungry breakfast & lunch diners since its inception, which has allowed us to build friendships with our neighbors-turned-customers who return week after week. 
        </p>
        <br />
        <p>
       Poached Kitchen Statement:"We are what we eat!". 
The brunch restaurant believes that good ingredients make better-tasting food and experiences are one of a kind.At Poached,it is believed that knowing where your food comes from and how it's prepared is ultimately better for you. All of the supplies and ingredients are handpicked and made from scratch, to ensure that everything served is of the highest-quality and with better ingredients. We use local and organic produce when available, and our humanely-raised meats are free of GMOs and nitrates. "Come dine with us!"
        </p>
        </Box>
    </Layout>
  );
};

export default About;