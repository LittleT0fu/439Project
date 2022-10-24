import { View, Text, StyleSheet, ActivityIndicator, Button } from 'react-native'
import React from 'react'
import { useEffect, useState } from 'react'
import { Overlay } from 'react-native-elements';

import { db } from '../database/firebase'
import { collection, updateDoc, doc, onSnapshot, } from 'firebase/firestore'
import { async } from '@firebase/util'
import { TextInput } from 'react-native-gesture-handler';
import SelectDropdown from 'react-native-select-dropdown'
import EditableTable from "react-native-editable-table";

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
        setSelectTime('');
    };

    const data_submit_button = () => {
        console.log(studentID, studentName, studentPhoneNumber, selectTime)
        //check Student id input
        if (!studentID.trim()) {
            alert('กรุณากรอกรหัสนักศึกษา')
            return;
        }
        if (studentID.length != 10) {
            alert('กรุณากรอกรหัสนักศึกษาให้ถูกต้อง')
            return;
        }
        //check student name input
        if (!studentName.trim()) {
            alert('กรุณากรอกชื่อเล่น')
            return;
        }
        
        //check phone number input
        if (!studentPhoneNumber.trim()) {
            alert('กรุณากรอกเบอร์โทร')
            return;
        }
        if (studentPhoneNumber.length != 10) {
            alert('กรุณากรอกเบอร์โทรให้ถูกต้อง')
            return;
        }
        //check select time input
        if (!selectTime.trim()) {
            alert('กรุณาเลือกเวลา')
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
        const courtRef = doc(dataRef, court)
        const getData = updateDoc(courtRef, data)
        alert('จองสำเร็จ')
        toggleOverlay()
        return;
    }

    return (
        <View style={styles.container}>
            {loading ? <ActivityIndicator color="#f4511e" size="large" /> :
                <View style={styles.container}>
                    {/* table */}
                    <Text style={{ color: 'red', fontSize: 18 }}>!คำเตือนการจองคอร์ท 1 รหัสนักศึกษา/ชม. เท่านั้น!</Text>
                    <View style={styles.Table_container}>
                        <EditableTable
                            columns={[
                                {
                                value: "เวลา",
                                input: "c1",
                                width: 25,
                                sortable: false,
                                defaultSort: "ASC",
                                },
                                { value: "ข้อมูลการจอง(รหัส-ชื่อเล่น-เบอร์)", input: "c2", width: 75, sortable: false }
                            ]}
                            values={[
                                [
                                "ตัวอย่าง",
                                { value: "2013110180 - ก้อง - 0870907226", editable: false },
                                ],
                                [
                                "10.00-11.00",
                                { value: courtTime.Time10 === '' ? "คอร์ทว่าง" : courtTime.Time10 , editable: false },
                                ],
                                [
                                "11.00-12.00",
                                { value: courtTime.Time11 === '' ? "คอร์ทว่าง" : courtTime.Time11 , editable: false },
                                ],
                                [
                                "12.00-13.00",
                                { value: courtTime.Time12 === '' ? "คอร์ทว่าง" : courtTime.Time12 , editable: false  },
                                ],
                                [
                                "13.00-14.00",
                                { value: courtTime.Time13 === '' ? "คอร์ทว่าง" : courtTime.Time13 , editable: false  },
                                ],
                                [
                                "14.00-15.00",
                                { value: courtTime.Time14 === '' ? "คอร์ทว่าง" : courtTime.Time14 , editable: false  },
                                ],
                                [
                                "15.00-16.00",
                                { value: courtTime.Time15 === '' ? "คอร์ทว่าง" : courtTime.Time15 , editable: false  },
                                ],
                                [
                                "16.00-17.00",
                                { value: courtTime.Time16 === '' ? "คอร์ทว่าง" : courtTime.Time16 , editable: false  },
                                ],
                                [
                                "17.00-18.00",
                                { value: courtTime.Time17 === '' ? "คอร์ทว่าง" : courtTime.Time17 , editable: false  },
                                ],
                                [
                                "18.00-19.00",
                                { value: courtTime.Time18 === '' ? "คอร์ทว่าง" : courtTime.Time18 , editable: false  },
                                ],
                                [
                                "19.00-20.00",
                                { value: courtTime.Time19 === '' ? "คอร์ทว่าง" : courtTime.Time19 , editable: false  },
                                ],
                                [
                                "20.00-21.00",
                                { value: courtTime.Time20 === '' ? "คอร์ทว่าง" : courtTime.Time20 , editable: false  },
                                ],
                            ]}
                            customStyles={{
                                cell: {
                                flex: 1,
                                borderColor: "#ddd",
                                minHeight: 40,
                                padding: 2,
                                alignItems: "left",
                                justifyContent: "center",
                                },
                                column: { justifyContent: "center" },
                                cellInput: { width: "100%", textAlign: "center" },
                            }}
                            style={styles.table}
                        />
                    </View>

                    <Text>อัพเดทตาราง <Text style={{ color: 'red', textDecorationLine: "underline" }} onPress={() => getData()}>คลิก</Text></Text>
                    {/* open overlay */}
                    <View style={{ marginTop: 10 }}>
                        <Button title='กดเพื่อจอง' onPress={toggleOverlay} />
                    </View>



                    {/* overlay for data input  */}
                    <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
                        <Text>กรอกข้อมูลการจอง</Text>
                        <TextInput
                            style={styles.text_input}
                            placeholder='รหัสนักศึกษา'
                            value={studentID}
                            onChangeText={(studentID) => (setStudentID(studentID))} />
                        <TextInput
                            style={styles.text_input}
                            placeholder='ชื่อเล่น'
                            value={studentName}
                            onChangeText={(studentName) => (setStudentName(studentName))} />
                        <TextInput
                            style={styles.text_input}
                            placeholder='เบอร์ติดต่อ'
                            value={studentPhoneNumber}
                            onChangeText={(studentPhoneNumber) => (setStudentPhoneNumber(studentPhoneNumber))} />

                        <View style={{alignItems:'center' , marginTop:10  }}>
                            <SelectDropdown
                                data={Time}
                                defaultButtonText='เลือกเวลา'
                                onSelect={(selectedItem, index) => {
                                    console.log(selectedItem, index)
                                    setSelectTime(selectedItem)
                                }}
                            />
                        </View>

                        {/* submit button */}
                        <View style={{ marginTop: 10 }}>
                            <Button title='ยืนยันการจอง' onPress={() => { data_submit_button() }} />
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