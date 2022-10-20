
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';

export default function OpenScreen({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.touchOcapa} onPress={()=> navigation.replace("court")}>
        <View style={{ alignItems: 'center' }}>
          <Text style={styles.title}>TNI</Text>
          <Text style={styles.title}>Badminton</Text>
          <Text style={styles.title}>Court</Text>
        </View>

        <View style={{marginTop : 50}}>
          <Text>
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1F8700'
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    color: 'white'
  },
  touchOcapa :{
    height : '100%',
    width : '100%',
    alignItems: 'center',
    justifyContent:"center",
    marginHorizontal : 50
  },
  Touch2Start:{
    fontSize:100,
  }
});
