import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'
import React from 'react'
import { useEffect, useState } from 'react'

import { db } from '../database/firebase'
import { collection, updateDoc, doc, onSnapshot, } from 'firebase/firestore'
import { async } from '@firebase/util'

const Court_detail = ({ navigation, route }) => {
    const { court } = route.params
    const dataRef = collection(db, "court-time")
    const [courtTime, setCourtTime] = useState([]);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        
        getData()
        navigation.setOptions(
            {
                // title : "รายละเอียดสินค้า"
                title: court,
            }, [navigation, court])
    }, []);

    const getData = async () => {
        try {
            setLoading(true)
            const DataRef = doc(dataRef, court)
            onSnapshot(DataRef, (doc) => {
                console.log(doc.data())
                setCourtTime(doc.data())
                setLoading(false)
            })
            
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <View style={styles.container}>
            {loading ? <ActivityIndicator color="#f4511e" size="large" /> :
                <View style={styles.container}>
                    
                    <Text style={{ color: 'red', fontSize: 18 }}>!คำเตือนการจอง 1 ช่องนั้นเท่ากับการจอง 1 ชั่วโมง</Text>
                    <View style={styles.Table_container}>
                        <View><Text> 10:00 : <Text>  {courtTime.Time10 ==='' ? "No data" : courtTime.Time10 }  </Text></Text></View>
                        <View><Text> 11:00 : <Text>  {courtTime.Time11 ==='' ? "No data" : courtTime.Time11 }  </Text></Text></View>
                        <View><Text> 12:00 : <Text>  {courtTime.Time12 ==='' ? "No data" : courtTime.Time12}  </Text></Text></View>
                        <View><Text> 13:00 : <Text>  {courtTime.Time13 ==='' ? "No data" : courtTime.Time13}  </Text></Text></View>
                        <View><Text> 14:00 : <Text>  {courtTime.Time14 ==='' ? "No data" : courtTime.Time14}  </Text></Text></View>
                        <View><Text> 15:00 : <Text>  {courtTime.Time15 ==='' ? "No data" : courtTime.Time15}  </Text></Text></View>
                        <View><Text> 16:00 : <Text>  {courtTime.Time16 ==='' ? "No data" : courtTime.Time16}  </Text></Text></View>
                        <View><Text> 17:00 : <Text>  {courtTime.Time17 ==='' ? "No data" : courtTime.Time17}  </Text></Text></View>
                        <View><Text> 18:00 : <Text>  {courtTime.Time18 ==='' ? "No data" : courtTime.Time18}  </Text></Text></View>
                        <View><Text> 19:00 : <Text>  {courtTime.Time19 ==='' ? "No data" : courtTime.Time19}  </Text></Text></View>
                        <View><Text> 20:00 : <Text>  {courtTime.Time20 ==='' ? "No data" : courtTime.Time20}  </Text></Text></View>
                    </View>
                    <Text>no update? <Text onPress={()=>getData()}>Click</Text></Text>
                </View>
            }
        </View>
    )
}

export default Court_detail

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 20,

    },
    touch_style: {
        width: "100%",
        borderRadius: 0.5,
        width: "100%",
        height: "100%",
        alignItems: 'center',
        justifyContent: 'center',
    },
    Table_container: {
        alignItems: 'center',
        margin: 20,
        width: 280,
        backgroundColor: '#7BCF85',
        borderRadius: 20,
        padding: 20
    }
})