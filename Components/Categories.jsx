import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { categoryData } from '../constants/Images';
import { Colors } from '../constants/Colors';
import Animated, { FadeIn, FadeInDown } from 'react-native-reanimated';

const Categories = ({ category, activeCatgeory, setActiveCategory ,handleChangeCategory }) => {
    return (
        <Animated.View style={styles.container} entering={FadeInDown.duration(500).springify()}>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 15 }}
            >
                {
                    category.map((item, index) => (
                        
                        <TouchableOpacity
                            key={index}
                            onPress={()=>handleChangeCategory(item.strCategory)}
                            style={styles.category}>
                            <View style={{padding:0}}>
                                <Image source={{ uri: item.strCategoryThumb }} style={styles.img} />
                                <Text style={{
                                    color: Colors.BLACK,
                                    fontFamily: "outfit",
                                    fontSize: 15,
                                    textAlign: "center",
                                    textTransform: "capitalize",
                                    overflow:"hidden",
                                    width:"90%",
                                    alignSelf:"center"
                                }} numberOfLines={1} ellipsizeMode='tail'>{item.strCategory}</Text>
                            </View>
                        </TouchableOpacity>
                    ))
                }
            </ScrollView>
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
    },
    category: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal:3,
    },
    img: {
        width: 80,
        height: 80,
        borderRadius: 50,
        borderColor: "lightgrey",
        borderWidth: 3,
    }
});

export default Categories;
