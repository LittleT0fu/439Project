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
        setSelectTime('')
    };

    const data_submit_button = () => {
        console.log(studentID, studentName, studentPhoneNumber, selectTime)
        //check Student id input
        if (!studentID.trim()) {
            alert('please fill the ID')
            return;
        }
        //check student name input
        if (!studentName.trim()) {
            alert('please fill the name')
            return;
        }
        //check phone number input
        
        if (!studentPhoneNumber.trim()) {
            alert('please fill the phone number')
            return;
        }
        if (studentPhoneNumber.length != 10) {
            alert('please fill the phone number')
            return;
        }
        //check select time input
        if (!selectTime.trim()) {
            alert('please select time')
            return;
        }
        //check data in time that already exist
        switch (selectTime) {
            case '10:00':
                if (courtTime.Time10 != '') {
                    alert('มีการจองในช่วงเวลานี้อยู่แล้ว')
                    return;
                }
                break;
            case '11:00':
                if (courtTime.Time11 != '') {
                    alert('มีการจองในช่วงเวลานี้อยู่แล้ว')
                    return;
                }
                break;
            case '12:00':
                if (courtTime.Time12 != '') {
                    alert('มีการจองในช่วงเวลานี้อยู่แล้ว')
                    return;
                }
                break;
            case '13:00':
                if (courtTime.Time13 != '') {
                    alert('มีการจองในช่วงเวลานี้อยู่แล้ว')
                    return;
                }
                break;
            case '14:00':
                if (courtTime.Time14 != '') {
                    alert('มีการจองในช่วงเวลานี้อยู่แล้ว')
                    return;
                }
                break;
            case '15:00':
                if (courtTime.Time15 != '') {
                    alert('มีการจองในช่วงเวลานี้อยู่แล้ว')
                    return;
                }
                break;
            case '16:00':
                if (courtTime.Time16 != '') {
                    alert('มีการจองในช่วงเวลานี้อยู่แล้ว')
                    return;
                }
                break;
            case '17:00':
                if (courtTime.Time17 != '') {
                    alert('มีการจองในช่วงเวลานี้อยู่แล้ว')
                    return;
                }
                break;
            case '18:00':
                if (courtTime.Time18 != '') {
                    alert('มีการจองในช่วงเวลานี้อยู่แล้ว')
                    return;
                }
                break;
            case '19:00':
                if (courtTime.Time19 != '') {
                    alert('มีการจองในช่วงเวลานี้อยู่แล้ว')
                    return;
                }
                break;
            case '20:00':
                if (courtTime.Time20 != '') {
                    alert('มีการจองในช่วงเวลานี้อยู่แล้ว')
                    return;
                }
                break;
        }
        //use create function
        update_data_to_database()
        return;
    }

    const update_data_to_database = async () => {
        let data = {}
        //data convert
        switch (selectTime) {
            case '10:00':
                data = { 'Time10': studentID + " - " + studentName + " - " + studentPhoneNumber }
                break;
            case '11:00':
                data = { 'Time11': studentID + " - " + studentName + " - " + studentPhoneNumber }
                break;
            case '12:00':
                data = { 'Time12': studentID + " - " + studentName + " - " + studentPhoneNumber }
                break;
            case '13:00':
                data = { 'Time13': studentID + " - " + studentName + " - " + studentPhoneNumber }
                break;
            case '14:00':
                data = { 'Time14': studentID + " - " + studentName + " - " + studentPhoneNumber }
                break;
            case '15:00':
                data = { 'Time15': studentID + " - " + studentName + " - " + studentPhoneNumber }
                break;
            case '16:00':
                data = { 'Time16': studentID + " - " + studentName + " - " + studentPhoneNumber }
                break;
            case '17:00':
                data = { 'Time17': studentID + " - " + studentName + " - " + studentPhoneNumber }
                break;
            case '18:00':
                data = { 'Time18': studentID + " - " + studentName + " - " + studentPhoneNumber }
                break;
            case '19:00':
                data = { 'Time19': studentID + " - " + studentName + " - " + studentPhoneNumber }
                break;
            case '20:00':
                data = { 'Time20': studentID + " - " + studentName + " - " + studentPhoneNumber }
                break;
        }
        try {
            const courtRef = doc(dataRef, court)
            const getData = updateDoc(courtRef, data)
            alert('จองสำเร็จ')
            toggleOverlay()
            return;
        } catch (error) {
            alert('จองไม่สำเร็จมีบางอย่างิดปกตติ ' + error)
            toggleOverlay()
        }
       
    }

    return (
        <View style={styles.container}>
            {loading ? <ActivityIndicator color="#f4511e" size="large" /> :
                <View style={styles.container}>
                    {/* table */}
                    <Text style={{ color: 'red', fontSize: 18 }}>!คำเตือนการจอง 1 ช่องนั้นเท่ากับการจอง 1 ชั่วโมง</Text>
                    <View style={styles.Table_container}>
                        <View><Text style={styles.text_Time}> 10:00 : <Text style={styles.text_Data}>  {courtTime.Time10 === '' ? "No data" : courtTime.Time10}  </Text></Text></View>
                        <View><Text style={styles.text_Time}> 11:00 : <Text style={styles.text_Data}>  {courtTime.Time11 === '' ? "No data" : courtTime.Time11}  </Text></Text></View>
                        <View><Text style={styles.text_Time}> 12:00 : <Text style={styles.text_Data}>  {courtTime.Time12 === '' ? "No data" : courtTime.Time12}  </Text></Text></View>
                        <View><Text style={styles.text_Time}> 13:00 : <Text style={styles.text_Data}>  {courtTime.Time13 === '' ? "No data" : courtTime.Time13}  </Text></Text></View>
                        <View><Text style={styles.text_Time}> 14:00 : <Text style={styles.text_Data}>  {courtTime.Time14 === '' ? "No data" : courtTime.Time14}  </Text></Text></View>
                        <View><Text style={styles.text_Time}> 15:00 : <Text style={styles.text_Data}>  {courtTime.Time15 === '' ? "No data" : courtTime.Time15}  </Text></Text></View>
                        <View><Text style={styles.text_Time}> 16:00 : <Text style={styles.text_Data}>  {courtTime.Time16 === '' ? "No data" : courtTime.Time16}  </Text></Text></View>
                        <View><Text style={styles.text_Time}> 17:00 : <Text style={styles.text_Data}>  {courtTime.Time17 === '' ? "No data" : courtTime.Time17}  </Text></Text></View>
                        <View><Text style={styles.text_Time}> 18:00 : <Text style={styles.text_Data}>  {courtTime.Time18 === '' ? "No data" : courtTime.Time18}  </Text></Text></View>
                        <View><Text style={styles.text_Time}> 19:00 : <Text style={styles.text_Data}>  {courtTime.Time19 === '' ? "No data" : courtTime.Time19}  </Text></Text></View>
                        <View><Text style={styles.text_Time}> 20:00 : <Text style={styles.text_Data}>  {courtTime.Time20 === '' ? "No data" : courtTime.Time20}  </Text></Text></View>
                    </View>

                    <Text>no update? <Text style={{ color: 'red', textDecorationLine: "underline" }} onPress={() => getData()}>Click</Text></Text>
                    {/* open overlay */}
                    <View style={{ marginTop: 10 }}>
                        <Button title='กดเพื่อจอง' onPress={toggleOverlay} />
                    </View>



                    {/* overlay for data input  */}
                    <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
                        <Text>Fill the box</Text>
                        <TextInput
                            style={styles.text_input}
                            placeholder='student id'
                            value={studentID}
                            onChangeText={(studentID) => (setStudentID(studentID))} />
                        <TextInput
                            style={styles.text_input}
                            placeholder='student first name'
                            value={studentName}
                            onChangeText={(studentName) => (setStudentName(studentName))} />
                        <TextInput
                            style={styles.text_input}
                            placeholder='student Phone number'
                            value={studentPhoneNumber}
                            onChangeText={(studentPhoneNumber) => (setStudentPhoneNumber(studentPhoneNumber))} />

                        <View style={{alignItems:'center' , marginTop:10  }}>
                            <SelectDropdown
                                data={Time}
                                onSelect={(selectedItem, index) => {
                                    console.log(selectedItem, index)
                                    setSelectTime(selectedItem)
                                }}
                            />
                        </View>

                        {/* submit button */}
                        <View style={{ marginTop: 10 }}>
                            <Button title='submit' onPress={() => { data_submit_button() }} />
                        </View>
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
        margin: 10,
        width: 380,
        backgroundColor: '#7BCF85',
        borderRadius: 20,
        padding: 8
    },
    text_Time: {
        fontSize: 16
    },
    text_Data: {
        fontSize: 14
    },
    text_input: {
        width: 250,
        height: 40,
        padding: 10,
        marginTop: 10,
        borderWidth: 0.5,
        borderRadius: 5,
        backgroundColor: "white"
    }
})