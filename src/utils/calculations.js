// import React from 'react';
// import { Provider, useDispatch, useSelector } from 'react-redux';
// import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
// import { Card, Title } from 'react-native-paper';
// import { pi, tan, radians } from 'mathjs';
// import store from './redux/store';
// import {
//  setLength,
//  setWidth,
//  setWaterPerSqm,
//  setRadius,
//  setDepth,
//  setHeight,
//  setAngle,
//  setFlowRate,
// } from './redux/actions';


// // Calculation functions
// const calculateArea = (length, width) => length * width;


// const calculateTotalWater = (area, waterPerSqm) => area * waterPerSqm;


// const calculateCircularArea = (radius) => pi * Math.pow(radius, 2);


// const calculateMulchVolume = (radius, depth) => calculateCircularArea(radius) * depth;


// const calculateHorizontalDistance = (height, angle) => height / tan(radians(angle));


// const calculateTotalWaterUsage = () => {
//  const startTime = 0;
//  const endTime = 30;
//  return (10 * (endTime - startTime)) + (2 * (Math.pow(endTime, 2) - Math.pow(startTime, 2)) / 2);
// };


