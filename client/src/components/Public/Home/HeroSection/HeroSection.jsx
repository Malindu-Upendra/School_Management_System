import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import ImgBg  from '../SvgImages/bg.jpg'
import logo from '../SvgImages/logo.png'
import {Carousel} from "react-bootstrap";

const Section = styled.section`
  height: 100vh;
  margin-right: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  //background: #131313;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
  url(${ImgBg});
  height: auto;
  //background-position:center;
  background-size: cover;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  padding: 3rem calc((100vw - 1300px) / 2);
  @media screen and (max-width: 768px) {
    grid-grid-template-columns: 1fr;
  }
`;

const ColumnLeft = styled.div`
  display: flex;
  //color: #fff;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //padding: 5rem 2rem;
  h1 {
    margin-bottom: 0.5rem;
    font-size: 4rem;
    color: #fff;
    font-family: Arial, Helvetica, sans-serif;
    text-shadow: 2px 2px 5px #4cc2d2;
  }
`;

const Hero = () => {

    return (
        <Section>
            <Container>
                <ColumnLeft>
                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 7 }}
                    >
                        <h3>
                            <img src="/Assets/H2MD.png" alt="" style={{maxWidth: 600,
                                boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 20), 0 16px 120px 0 rgba(0, 0, 0, 1.19)"
                            }} />
                        </h3>
                        Welcome to H2MD International School
                    </motion.h1>
                </ColumnLeft>
            </Container>
        </Section>
    );
};

export default Hero;
