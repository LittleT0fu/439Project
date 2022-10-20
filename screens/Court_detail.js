import { View, Text } from 'react-native'
import React from 'react'
import { useEffect } from 'react'


const Court_detail = ({ navigation, route }) => {
    const {court} = route.params

    useEffect(() => {
        navigation.setOptions(
            {
                // title : "รายละเอียดสินค้า"
                title: court, 
            }, [navigation, court])
    });

    return (
        <View>
            <Text>{court}</Text>
        </View>
    )
}

export default Court_detail