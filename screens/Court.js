import { View, Text, FlatList, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { NativeScreenNavigationContainer } from 'react-native-screens'


const DATA_Court = [
    {
        id: 'c1',
        court: 'court 1'
    },
    {
        id: 'c2',
        court: 'court 2'
    },
    {
        id: 'c3',
        court: 'court 3'
    },
    {
        id: 'c4',
        court: 'court 4'
    }

]

const Court = ( {navigation}) => {


    const _render = ({ item }) => {
        return (
            <SafeAreaView>
                <TouchableOpacity onPress={()=> navigation.navigate("detail", {court : item.court}) }>
                    <View>
                        <Text>{item.court}</Text>
                    </View>
                </TouchableOpacity>
            </SafeAreaView>

        )
    }


    return (
        <View>
            <FlatList
                data={DATA_Court}
                keyExtractor={(item) => item.id.toString()}
                renderItem={_render}
            />
        </View>
    )
}

export default Court