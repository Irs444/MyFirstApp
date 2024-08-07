
import { SafeAreaView, ScrollView, StyleSheet, Text, View, StatusBar } from 'react-native';
import Data from './components/Data';
import Form from './components/Form';
import Grid from './components/Grid';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>

        <View>
          <Text style={{ fontSize: 30, marginTop: 40, textAlign: "center" }}>hello world!!</Text>
          <User />
          <Data />
        </View>
        <Form/>
        <Grid/>

      </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
container:{
  flex:1,
  paddingTop: StatusBar.currentHeight,
},
scrollView:{
  marginHorizontal:5
}
})

const User = () => {
  return (
    <View style={{ alignItems: "center", marginTop: 20 }}>
      <Text>Name: Irshad</Text>
      <Text>Age: 25</Text>
      <Text>Email: irshad@gmail.com</Text>
    </View>
  )
}

export default App



