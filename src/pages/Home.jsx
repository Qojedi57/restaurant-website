import React from "react";
import Layout from "./../components/Layout/Layout";
import { Link } from "react-router-dom";
import frenchtoast from '../assets/frenchtoast.jpg';
import "../styles/HomeStyles.css";

const Home = () => {
  return (
    <Layout>
      <div className="home" style={{backgroundImage: `url(${frenchtoast})`}}>
        <div className="headerContainer">
          <h1>Poached Kitchen Website</h1>
          <p>Best Brunch Restaurant In LA</p>
          <Link to="/menu">
            <button>ORDER NOW</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
