import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import ExStyle from "../style"


function showalert() {
    return alert('Hello World!!')
}


const Data = () => {

    const [name, setName] = useState("Irshad")
    const [item, setItem] = useState(data)
    const [inputlist, setInputList] = useState("")

    const data = ["Irshad", 25, "irshad@gmail.com"]


    function show() {
        setName("Irshad Ansari")

    }

    const changeItem = () => {
        return (

            setItem(data[0])

        )


    }

    return (
        <View>

            <View style={{ margin: 20, marginHorizontal: 130 }}>
                <Button title='Press here!!' onPress={showalert}></Button>
                <View style={{ marginTop: 10 }}>
                    <Button title='Press here!!' onPress={() => show()} color={"green"} ></Button>
                    <Text style={{ textAlign: "center", fontSize: 20 }}>{name}</Text>
                </View>
                <Practice data={item} />
                <Button title='change props' onPress={() => changeItem()}></Button>
            </View>

            <View>
                <Text style={{ textAlign: "center", fontSize: 20, color: "red" }}>Inline CCS</Text>
                <Text style={styles.internal}>Internal CCS</Text>
                <Text style={ExStyle.external}>External CCS</Text>
            </View>

            <Text style={{ fontSize: 20, margin: 10 }}>Inputs:{inputlist}</Text>
            <TextInput style={input.textinput} value={inputlist} placeholder='Enter the value' onChangeText={(text) => setInputList(text)} />
            <View style={{ marginHorizontal: 100 }}>

                <Button title='clear input' onPress={() => setInputList(" ")}></Button>
            </View>
        </View>


    )
}


const styles = StyleSheet.create({
    internal: {
        textAlign: "center",
        fontSize: 20,
        color: "green"
    }
})

const input = StyleSheet.create({
    textinput: {
        borderWidth: 1,
        padding: 5,
        margin: 15,
        borderRadius: 6,
        fontSize: 15
    }
})

const Practice = (props) => {
    return (
        <View style={{ marginTop: 20 }}>
            <Text>Props in React Native</Text>
            <Text>{props.data}</Text>
        </View>
    )
}

export default Data