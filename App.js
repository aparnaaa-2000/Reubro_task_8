import React from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Card, Title } from 'react-native-paper';
import { pi, tan, radians } from 'mathjs';
import store from './src/Redux/store';
// import actions from './src/Redux/actions'
import {
 setLength,
 setWidth,
 setWaterPerSqm,
 setRadius,
 setDepth,
 setHeight,
 setAngle,
 setFlowRate,
} from './src/Redux/actions';


// Calculation functions
const calculateArea = (length, width) => length * width;


const calculateTotalWater = (area, waterPerSqm) => area * waterPerSqm;


const calculateCircularArea = (radius) => pi * Math.pow(radius, 2);


const calculateMulchVolume = (radius, depth) => calculateCircularArea(radius) * depth;


const calculateHorizontalDistance = (height, angle) => height / tan(radians(angle));


const calculateTotalWaterUsage = () => {
 const startTime = 0;
 const endTime = 30;
 return (10 * (endTime - startTime)) + (2 * (Math.pow(endTime, 2) - Math.pow(startTime, 2)) / 2);
};


// Component
const App = () => {
 const dispatch = useDispatch();
 const {
   length,
   width,
   waterPerSqm,
   radius,
   depth,
   height,
   angle,
   flowRate,
 } = useSelector(state => state.calculations);


 return (
   <View style={styles.container}>
     <Card style={styles.card}>
       <Title>Basic Arithmetic Operations</Title>
       <TextInput
         style={styles.input}
         placeholder="Length (m)"
         keyboardType="numeric"
         value={length}
         onChangeText={(text) => dispatch(setLength(text))}
       />
       <TextInput
         style={styles.input}
         placeholder="Width (m)"
         keyboardType="numeric"
         value={width}
         onChangeText={(text) => dispatch(setWidth(text))}
       />
       <TextInput
         style={styles.input}
         placeholder="Water per sqm (L)"
         keyboardType="numeric"
         value={waterPerSqm}
         onChangeText={(text) => dispatch(setWaterPerSqm(text))}
       />
       <Button
         title="Calculate Area and Water"
         onPress={() => {
           const area = calculateArea(parseFloat(length), parseFloat(width));
           const totalWater = calculateTotalWater(area, parseFloat(waterPerSqm));
           alert(`Area: ${area} sqm\nTotal Water Required: ${totalWater} L`);
         }}
       />
     </Card>


     <Card style={styles.card}>
       <Title>Geometry Calculations</Title>
       <TextInput
         style={styles.input}
         placeholder="Radius (m)"
         keyboardType="numeric"
         value={radius}
         onChangeText={(text) => dispatch(setRadius(text))}
       />
       <TextInput
         style={styles.input}
         placeholder="Depth (m)"
         keyboardType="numeric"
         value={depth}
         onChangeText={(text) => dispatch(setDepth(text))}
       />
       <Button
         title="Calculate Mulch Volume"
         onPress={() => {
           const volume = calculateMulchVolume(parseFloat(radius), parseFloat(depth));
           alert(`Circular Area: ${calculateCircularArea(parseFloat(radius))} sqm\nMulch Volume: ${volume} m³`);
         }}
       />
     </Card>


     <Card style={styles.card}>
       <Title>Trigonometry Calculation</Title>
       <TextInput
         style={styles.input}
         placeholder="Height (m)"
         keyboardType="numeric"
         value={height}
         onChangeText={(text) => dispatch(setHeight(text))}
       />
       <TextInput
         style={styles.input}
         placeholder="Angle (degrees)"
         keyboardType="numeric"
         value={angle}
         onChangeText={(text) => dispatch(setAngle(text))}
       />
       <Button
         title="Calculate Horizontal Distance"
         onPress={() => {
           const distance = calculateHorizontalDistance(parseFloat(height), parseFloat(angle));
           alert(`Horizontal Distance: ${distance} m`);
         }}
       />
     </Card>


     <Card style={styles.card}>
       <Title>Calculus Calculation</Title>
       <Button
         title="Calculate Total Water Usage"
         onPress={() => {
           alert(`Total Water Usage: ${calculateTotalWaterUsage()} L`);
         }}
       />
     </Card>
   </View>
 );
};


const styles = StyleSheet.create({
 container: {
   flex: 1,
   padding: 16,
   backgroundColor: '#f5f5f5',
 },
 card: {
   marginBottom: 16,
   padding: 16,
 },
 input: {
   marginBottom: 8,
   padding: 8,
   borderWidth: 1,
   borderColor: '#ddd',
   borderRadius: 4,
 },
});
