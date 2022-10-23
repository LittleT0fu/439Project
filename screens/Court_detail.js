import { View, Text, StyleSheet, ActivityIndicator, Button } from 'react-native'
import React from 'react'
import { useEffect, useState } from 'react'
import { Overlay } from 'react-native-elements';

import { db } from '../database/firebase'
import { collection, updateDoc, doc, onSnapshot, } from 'firebase/firestore'
import { async } from '@firebase/util'
import { TextInput } from 'react-native-gesture-handler';
import SelectDropdown from 'react-native-select-dropdown'

const Time = ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00"]



const Court_detail = ({ navigation, route }) => {
    const { court } = route.params
    const dataRef = collection(db, "court-time")
    const [courtTime, setCourtTime] = useState([]);
    const [loading, setLoading] = useState(false);
    const [visible, setVisible] = useState(false);

    const [studentID, setStudentID] = useState('');
    const [studentName, setStudentName] = useState('');
    const [studentPhoneNumber, setStudentPhoneNumber] = useState('');
    const [selectTime, setSelectTime] = useState('');


    useEffect(() => {
        navigation.setOptions(
            {
                // title : "รายละเอียดสินค้า"
                title: court,
            }, [navigation, court])
        getData()
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

    const toggleOverlay = () => {
        setVisible(!visible);
        setStudentID('');
        setStudentName('');
        setStudentPhoneNumber('');
    };

    const data_submit_button = () => {
        console.log(studentID, studentName, studentPhoneNumber, selectTime)
        update_data_to_database()
        return;
    }

    const update_data_to_database = async () => {
        let data = {}
        switch (selectTime) {
            case '10:00':
                data = { 'Time10' : studentID + " - " + studentName + " - " + studentPhoneNumber }
                break;
            case '11:00':
                data = { 'Time11' : studentID + " - " + studentName + " - " + studentPhoneNumber }
                break;
            case '12:00':
                data = { 'Time12' : studentID + " - " + studentName + " - " + studentPhoneNumber }
                break;
            case '13:00':
                data = { 'Time13' : studentID + " - " + studentName + " - " + studentPhoneNumber }
                break;
            case '14:00':
                data = { 'Time14' : studentID + " - " + studentName + " - " + studentPhoneNumber }
                break;
            case '15:00':
                data = { 'Time15' : studentID + " - " + studentName + " - " + studentPhoneNumber }
                break;
            case '16:00':
                data = { 'Time16' : studentID + " - " + studentName + " - " + studentPhoneNumber }
                break;
            case '17:00':
                data = { 'Time17' : studentID + " - " + studentName + " - " + studentPhoneNumber }
                break;
            case '18:00':
                data = { 'Time18' : studentID + " - " + studentName + " - " + studentPhoneNumber }
                break;
            case '19:00':
                data = { 'Time19' : studentID + " - " + studentName + " - " + studentPhoneNumber }
                break;
            case '20:00':
                data = { 'Time20' : studentID + " - " + studentName + " - " + studentPhoneNumber }
                break;
        }
        const courtRef = doc(dataRef, court)
        const getData = updateDoc(courtRef, data)
        return;
    }

    return (
        <View style={styles.container}>
            {loading ? <ActivityIndicator color="#f4511e" size="large" /> :
                <View style={styles.container}>

                    <Text style={{ color: 'red', fontSize: 18 }}>!คำเตือนการจอง 1 ช่องนั้นเท่ากับการจอง 1 ชั่วโมง</Text>
                    <View style={styles.Table_container}>
                        <View><Text> 10:00 : <Text>  {courtTime.Time10 === '' ? "No data" : courtTime.Time10}  </Text></Text></View>
                        <View><Text> 11:00 : <Text>  {courtTime.Time11 === '' ? "No data" : courtTime.Time11}  </Text></Text></View>
                        <View><Text> 12:00 : <Text>  {courtTime.Time12 === '' ? "No data" : courtTime.Time12}  </Text></Text></View>
                        <View><Text> 13:00 : <Text>  {courtTime.Time13 === '' ? "No data" : courtTime.Time13}  </Text></Text></View>
                        <View><Text> 14:00 : <Text>  {courtTime.Time14 === '' ? "No data" : courtTime.Time14}  </Text></Text></View>
                        <View><Text> 15:00 : <Text>  {courtTime.Time15 === '' ? "No data" : courtTime.Time15}  </Text></Text></View>
                        <View><Text> 16:00 : <Text>  {courtTime.Time16 === '' ? "No data" : courtTime.Time16}  </Text></Text></View>
                        <View><Text> 17:00 : <Text>  {courtTime.Time17 === '' ? "No data" : courtTime.Time17}  </Text></Text></View>
                        <View><Text> 18:00 : <Text>  {courtTime.Time18 === '' ? "No data" : courtTime.Time18}  </Text></Text></View>
                        <View><Text> 19:00 : <Text>  {courtTime.Time19 === '' ? "No data" : courtTime.Time19}  </Text></Text></View>
                        <View><Text> 20:00 : <Text>  {courtTime.Time20 === '' ? "No data" : courtTime.Time20}  </Text></Text></View>
                    </View>
                    <Text>no update? <Text onPress={() => getData()}>Click</Text></Text>
                    <Button title='click to open modal to update' onPress={toggleOverlay} />


                    {/* overlay for data input  */}
                    <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
                        <Text>Fill the box</Text>
                        <TextInput
                            placeholder='student id'
                            value={studentID}
                            onChangeText={(studentID) => (setStudentID(studentID))} />
                        <TextInput
                            placeholder='student name'
                            value={studentName}
                            onChangeText={(studentName) => (setStudentName(studentName))} />
                        <TextInput
                            placeholder='student Phone number'
                            value={studentPhoneNumber}
                            onChangeText={(studentPhoneNumber) => (setStudentPhoneNumber(studentPhoneNumber))} />

                        <SelectDropdown
                            data={Time}
                            onSelect={(selectedItem, index) => {
                                console.log(selectedItem, index)
                                setSelectTime(selectedItem)
                            }}
                            buttonTextAfterSelection={(selectedItem, index) => {
                                // text represented after item is selected
                                // if data array is an array of objects then return selectedItem.property to render after item is selected
                                return selectedItem
                            }}
                            rowTextForSelection={(item, index) => {
                                // text represented for each item in dropdown
                                // if data array is an array of objects then return item.property to represent item in dropdown
                                return item
                            }}
                        />

                        {/* submit button */}
                        <Button title='submit' onPress={() => { data_submit_button() }} />
                    </Overlay>


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
        margin: 10,
        width: 380,
        backgroundColor: '#7BCF85',
        borderRadius: 20,
        padding: 20
    }
})