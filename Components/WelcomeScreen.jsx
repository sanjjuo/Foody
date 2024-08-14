import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { Colors } from '@/constants/Colors'
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';
import { useRouter } from 'expo-router';


const WelcomeScreen = () => {
 const router = useRouter()

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/images/welcome.png")} />
      <Text style={{
        color: Colors.WHITE,
        fontFamily: "outfit-bold",
        fontSize: 50
      }}>Foody</Text>

      <Text style={{
        color: Colors.WHITE,
        fontFamily: "outfit-bold",
        fontSize: 20
      }}>Food is always right !</Text>

      <TouchableOpacity style={styles.button} onPress={()=>router.push("/Home")}>
        <Text style={{
          color: Colors.WHITE,
          fontFamily: "outfit-bold",
          fontSize: 15
        }}>Grab some food!</Text>
      </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.ORANGE,
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    width: 250,
    height: 300,
  },
  button: {
    padding: 20,
    backgroundColor: "#000",
    borderRadius: 30,
    marginTop:30,
    paddingHorizontal:35
  }
})


export default WelcomeScreen