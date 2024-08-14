import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import { MasonryFlashList } from "@shopify/flash-list";
import { Colors } from '../constants/Colors';
import Animated, { FadeInDown } from 'react-native-reanimated';
import Loading from './Loading';

const Recipies = ({ recipe, category }) => {
    const CardItem = ({ item, index }) => {
        return (
            <Animated.View 
                entering={FadeInDown.delay(index * 100).duration(600).springify().damping(20)} 
                style={{ marginBottom: 20, marginRight: 5 }}
            >
                <Image 
                    source={{ uri: item.strMealThumb }} 
                    style={styles.image} 
                    resizeMode="cover"
                />
                <Text 
                    style={{ 
                        textAlign: 'center',
                        marginTop: 8,
                        fontFamily: "outfit-medium",
                        fontSize: 18,
                    }} 
                    numberOfLines={1}
                >
                    {item.strMeal}
                </Text>
            </Animated.View>
        );
    };

    return (
        <View>
            {category.length === 0 || recipe.length === 0 ? (
                <Loading size="large" color={Colors.ORANGE} />
            ) : (
                <>
                    <Text 
                        style={{
                            fontFamily: "outfit-medium",
                            fontSize: 25,
                            textAlign: 'center',
                            marginVertical: 10,
                            textDecorationLine: "underline", 
                        }}
                    >
                        Recipes
                    </Text>
                    <MasonryFlashList
                        data={recipe}
                        keyExtractor={(item) => item.idMeal}
                        numColumns={2}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item, index }) => <CardItem item={item} index={index} />}
                        onEndReachedThreshold={0.1}
                    />
                </>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 250,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: Colors.GRAY,
    }
});

export default Recipies;
