import React, { useState, createRef } from 'react'

export const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;
    
    return {
      width,
      height
    };
}