import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Grid = () => {
  return (
    <View>
        <Text style={{textAlign:"center", fontSize:30}}>Grid</Text>

        <View style={{flex:1, flexDirection:"row", flexWrap:"wrap"}}>
            <Text style={styles.internal}>1</Text>
            <Text style={styles.internal}>2</Text>
            <Text style={styles.internal}>4</Text>
            <Text style={styles.internal}>5</Text>
            <Text style={styles.internal}>6</Text>
            <Text style={styles.internal}>7</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    internal: {
       textAlignVertical:"center",
      textAlign: "center",
        fontSize: 20,
        backgroundColor: "green",
        height:100,
        width:100,
        margin:10
    }
})

export default Grid