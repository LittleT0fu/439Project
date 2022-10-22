import { View, Text, FlatList, TouchableOpacity, SafeAreaView, StyleSheet ,Dimensions , ScrollView , Image } from 'react-native'
import React from 'react'


const { width } = Dimensions.get("window");
const height = width * 0.6;
const images = [
    "https://i.ibb.co/5FmJFMr/305363762-604452284648961-1596110259081849715-n.jpg",
    "https://i.ibb.co/5FmJFMr/305363762-604452284648961-1596110259081849715-n.jpg",
    "https://i.ibb.co/5FmJFMr/305363762-604452284648961-1596110259081849715-n.jpg",
];


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

const Court = ({ navigation }) => {


    const ItemSeparatorView = () => {
        return (
            // Flat List Item Separator
            <View
                style={{
                    height: 0.5,
                    width: "100%",
                    backgroundColor: "#C8C8C8",
                }}
            />
        );
    };


    const _render = ({ item }) => {
        return (
            <SafeAreaView style={styles.data_Container}>
                <TouchableOpacity
                    style={styles.touch_style}
                    onPress={() => navigation.navigate("detail", { court: item.court })}>
                    <View>
                        <Text>{item.court}</Text>
                    </View>
                </TouchableOpacity>
            </SafeAreaView>

        )
    }


    return (
        <View style={styles.container}>
            <View style={{marginTop:-40 , marginBottom:40}}>
                <View style={{ marginTop: 50, width, height }}>
                    <ScrollView
                        pagingEnabled
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        style={{ width, height }}
                    >
                        {images.map((item, index) => (
                            <Image
                                key={index}
                                source={{ uri: item }}
                                style={{ width, height, resizeMode: "cover" }}
                            />
                        ))}
                    </ScrollView>
                    <View
                        style={{
                            flexDirection: "row",
                            position: "absolute",
                            bottom: 0,
                            alignSelf: "center",
                        }}
                    >
                        {images.map((i, k) => (
                            <Text key={k} style={{ color: "white", margin: 3 }}>
                                ●
                            </Text>
                        ))}
                    </View>
                </View>
            </View>
            <FlatList
                data={DATA_Court}
                keyExtractor={(item) => item.id.toString()}
                renderItem={_render}
            />
        </View>
    )
}

export default Court

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        width: "100%",

    },
    touch_style: {
        width: "100%",
        borderRadius: 0.5,
        width: "100%",
        height: "100%",
        alignItems: 'center',
        justifyContent: 'center',
    },
    data_Container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        height: 60,
        width: 280,
        backgroundColor: '#7BCF85',
        borderRadius: 20
    }
})