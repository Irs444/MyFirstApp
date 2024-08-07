import React, { useState } from 'react'
import { TextInput, View, StyleSheet, Button, Text } from 'react-native'


const Form = () => {

    const [name ,setName] = useState('')
    const [email ,setEmail] = useState('')
    const [password ,setPassword] = useState('')
    const [display , setDisplay] = useState(false)

    const resetForm = () => {
        return(
            setName(''),
            setEmail(''),
            setPassword(''),
            setDisplay(false)
        )
    }

    return (
        <View style={styles.form}>
            <Text style={{textAlign:"center", fontSize:25, margin:10}}>User Form</Text>

            <Text style={styles.label}>Enter the name</Text>
            <TextInput style={styles.textinput} placeholder='Enter the name' value={name} onChangeText={(text) => setName(text)} />
      

            <Text style={styles.label}>Enter the email</Text>
            <TextInput style={styles.textinput} placeholder='Enter the email'  value={email} onChangeText={(text) => setEmail(text)} />

            <Text style={styles.label}>Enter the password</Text>
            <TextInput style={styles.textinput} secureTextEntry={true} placeholder='Enter the password'  value={password} onChangeText={(text) => setPassword(text)} />

            <View style={{ marginHorizontal: 50, marginBottom: 10 }}>
                <Button title='Submit' onPress={() => setDisplay(true)} ></Button>
            </View >
            <View style={{ marginHorizontal: 50 }}>
                <Button title='Clear' color={"red"} onPress={() => resetForm()}></Button>
            </View>

            {
                display ?
                <View>
                 <Text>Name: {name}</Text>
                 <Text>Email: {email}</Text>
                 <Text>Password: {password}</Text>
                </View> :null
            }
        </View>
    )
}

const styles = StyleSheet.create({
    textinput: {
        margin: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 5,
    },
    form: {
        // borderWidth: 1,
        margin: 15,
        padding: 10,
        borderRadius: 5,
        backgroundColor: "lightgray",
        
    },
    label: {
        marginHorizontal: 10,

    }
})

export default Form