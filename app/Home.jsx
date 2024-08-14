import { View, Text, StyleSheet, Image, TextInput, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Colors } from '../constants/Colors'
import Octicons from '@expo/vector-icons/Octicons';
import Categories from '../Components/Categories';
import axios from "axios"
import Recipies from '../Components/Recipies';

const Home = () => {

  const [activeCatgeory, setActiveCategory] = useState("beef");
  const [category, setCatgeory] = useState([]);
  const [recipe, setRecipe] = useState([])

  const getCategories = async () => {
    try {
      const response = await axios.get("https://www.themealdb.com/api/json/v1/1/categories.php");
      console.log(response.data);

      if (response && response.data) {
        setCatgeory(response.data.categories)
      }

    } catch (error) {
      console.log(error);

    }
  }

  const getRecipies = async (category = "Beef") => {
    try {
      const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
      setRecipe(response.data.meals)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getCategories()
    getRecipies()
  }, [])


  const handleChangeCategory = (category) =>{
    getRecipies(category)
    setRecipe([])

  }

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{
      backgroundColor: Colors.WHITE,
      height: "100%",
      padding: 20,
      paddingTop: 50
    }}>
      <View style={styles.container}>
        <Image style={styles.image} source={require("../assets/images/profile.jpeg")} />
        <FontAwesome name="bell" size={30} color="black" />
      </View>
      <View style={styles.heading}>
        <Text style={{
          color: Colors.BLACK,
          fontFamily: "outfit-medium",
          fontSize: 20
        }}>Hello Sanjeed!</Text>
        <Text style={{
          color: Colors.BLACK,
          fontFamily: "outfit-bold",
          fontSize: 35
        }}>Make your own food, Stay at <Text style={{
          color: Colors.ORANGE
        }}>home.</Text></Text>
      </View>

      <View style={styles.view}>
        <TextInput
          style={styles.search}
          placeholder="Search any recipe"
          placeholderTextColor={Colors.WHITE}
        />
        <Octicons name="search" size={24} color="white" />
      </View>

      {/* categories */}

      <View>
        {
          category.length > 0 && <Categories category={category} activeCatgeory={activeCatgeory} setActiveCategory={setActiveCategory} handleChangeCategory={handleChangeCategory} />
        }
      </View>

      {/* recipies */}

      <View>
        {category.length > 0 && <Recipies recipe={recipe} category={category} />}
      </View>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 50
  },
  heading: {
    paddingTop: 25
  },
  view: {
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: Colors.GRAY,
    padding: 5,
    paddingHorizontal: 20,
    borderColor: Colors.GRAY,
    borderRadius: 20,
    borderWidth: 2,
  },
  search: {
    color: Colors.WHITE,
    fontFamily: "outfit",
    fontSize: 18,
  }
})


export default Home