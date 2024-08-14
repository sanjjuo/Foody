import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'

const Loading = (props) => {
  return (
    <View style={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    }}>
        <ActivityIndicator {...props}/>
    </View>
  )
}

export default Loading