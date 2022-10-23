import { StyleSheet, Text, View, SafeAreaView, Button } from "react-native";
import React, { Component } from "react";
import EditableTable from "react-native-editable-table";

export default class Court1 extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "", column: "", row: ""};
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <EditableTable
          columns={[
            {
              value: "เวลา",
              input: "c1",
              width: 26,
              sortable: false,
              defaultSort: "ASC",
            },
            { value: "รหัสนักศึกษา.", input: "c2", width: 24, sortable: false },
            { value: "ชื่อ", input: "c3", width: 25, sortable: false },
            { value: "เบอร์ติดต่อ", input: "c4", width: 25, sortable: false },
          ]}
          values={[
            [
              "ตัวอย่าง",
              { value: "2013110180", editable: false },
              { value: "ก้อง", editable: false },
              { value: "0870907226", editable: false },
            ],
            [
              "12.00-13.00",
              { value: "", editable: true },
              { value: "", editable: true },
              { value: "", editable: true },
            ],
            [
              "13.00-14.00",
              { value: "", editable: true },
              { value: "", editable: true },
              { value: "", editable: true },
            ],
            [
              "14.00-15.00",
              { value: "", editable: true },
              { value: "", editable: true },
              { value: "", editable: true },
            ],
            [
              "15.00-16.00",
              { value: "", editable: true },
              { value: "", editable: true },
              { value: "", editable: true },
            ],
            [
              "16.00-17.00",
              { value: "", editable: true },
              { value: "", editable: true },
              { value: "", editable: true },
            ],
            [
              "17.00-18.00",
              { value: "", editable: true },
              { value: "", editable: true },
              { value: "", editable: true },
            ],
            [
              "18.00-19.00",
              { value: "", editable: true },
              { value: "", editable: true },
              { value: "", editable: true },
            ],
            [
              "19.00-20.00",
              { value: "", editable: true },
              { value: "", editable: true },
              { value: "", editable: true },
            ],
            [
              "20.00-21.00",
              { value: "", editable: true },
              { value: "", editable: true },
              { value: "", editable: true },
            ],
          ]}
          onCellChange={(text, column, row, unique_id) => {
            this.setState({ text, column, row });
            console.log(`Cell Change on Column: ${column} Row: ${row}
                        and unique_id: ${unique_id} is ${text}`);
          }}
          customStyles={{
            cell: {
              flex: 1,
              borderColor: "#ddd",
              minHeight: 40,
              padding: 2,
              alignItems: "center",
              justifyContent: "center",
            },
            column: { justifyContent: "center" },
            cellInput: { width: "100%", textAlign: "center" },
          }}
          style={styles.table}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", backgroundColor: "#F5FCFF" },
  table: { flex: 1, marginBottom: 30 },
});
