
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import NetInfo from "@react-native-community/netinfo";


export default function OpenScreen({ navigation }) {

  NetInfo.fetch().then(state => {
    console.log("Connection type", state.type);
    console.log("Is connected?", state.isConnected);
  });
  
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.touchOcapa} onPress={() => navigation.replace("court")}>
        <View style={{ alignItems: 'center' }}>
          <Image style={{ width: 300, height: 300 }} source={require('../image/logo.png')} />
        </View>

        <View style={{ marginTop: 40 }}>
          <Text style={styles.Touch2Start}>
            Touch to Start
          </Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#7BCF85'
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    color: 'white'
  },
  touchOcapa: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: "center",
    marginHorizontal: 50
  },
  Touch2Start: {
    fontSize: 24,
    color: 'black',
    fontWeight: 'bold'
  }
});
