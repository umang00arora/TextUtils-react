import React, { useState } from 'react';
//import styled from 'styled-components';
//import PropTypes from 'prop-types';

// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component
const propTypes = {};

const defaultProps = {};

/**
 * 
 */
const About = (props) => {
    

    return (
    <>
    <div className='container' style={{color: (props.mode==='dark'?'white':'black')}}>
      <h1 className='my-3'>About Us</h1>
      <p>TextUtils is the first React based single page application created by me. 
        <br />
        It is a text manipualtion application made to make user efficient manipulations to their text.
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus dolore a assumenda laboriosam deleniti esse id quod corrupti architecto vero inventore debitis, illo distinctio ipsum vitae officia. Delectus, voluptatibus dolor!
      </p>
    </div>
    </>
    )
}

About.propTypes = propTypes;
About.defaultProps = defaultProps;
// #endregion

export default About;