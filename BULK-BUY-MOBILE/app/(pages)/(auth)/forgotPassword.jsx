import { Button, KeyboardAvoidingView, Pressable, ScrollView, StyleSheet, Text, TextInput, useWindowDimensions, View } from 'react-native'
import React, { useState } from 'react'

const forgotPassword = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState({})
  
  const screenWidth = useWindowDimensions().width

  // Utility functions for validation
const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

  const validateForm = (e)=>{
    let errors = {}
    if(!validateEmail(email)) errors.email = "Invalid email format"
    if(!email) errors.email = "Email required!"
    
    setErrors(errors)

    return Object.keys(errors).length === 0
}

const handleSubmit = () =>{
    
    if (validateForm()) {
        setEmail("")
        setErrors({})
        console.log("Submitted", email, password);
    }
}


  return (
    <ScrollView style={styles.container}>
      <KeyboardAvoidingView style={[styles.formContainer, {width: screenWidth > 600 ? 500 : "90%"}]}>
        <View style={styles.formHeader}>
          <Text style={[styles.formText, {fontWeight: "bold", fontSize: 18}]}>Forgot Password</Text>
          <Text style={styles.formText}>Enter your email address below, and we’ll send you a link to reset your password.</Text>
        </View>
        <View style={styles.inputContainer}>
            <Text style={styles.label}>Email</Text>
            <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                placeholder='Enter email'
                autoCorrect={false}
                autoCapitalize='none'
                underlineColorAndroid="transparent"
            />
            {errors.email && <Text style={styles.error}>{errors.email}</Text>}
        </View>
        <Pressable
          style={styles.btn}
          onPress={handleSubmit}
        >
          <Text style={styles.formText}>Submit</Text>
        </Pressable>
        {/* <View style={styles.formHeader}>
          <Text style={styles.formText}>Don't have an account?</Text>
          <Link href={"signUp"} style={[styles.formText, {textDecorationLine: 'underline'}]}>Sign Up</Link>
        </View> */}
      </KeyboardAvoidingView>
    </ScrollView>
  )
}

export default forgotPassword

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 10,
    backgroundColor: "#F6F6F6",
    paddingTop: 100,
  },
  formContainer: {
    width: "90%",
    height: "100%",
    padding: 20,
    backgroundColor: "#E5B24E",
    borderRadius: 5,
    alignSelf: "center",
    alignItems: "center",
    shadowColor: "black",
    gap: 20,
},
formHeader: {
  alignItems: "center",
  justifyContent: "flex-start",
  gap: 5,
},
formText: {
  color: "#F6F6F6",
},
inputContainer: {
  width: "100%",
},
label: {
  fontWeight: "700",
  fontSize: 18,
  paddingStart: 5,
  marginBottom: 5,
  color: "#F6F6F6",
},
input: {
  backgroundColor: "#F6F6F6",
  padding: 5,
  color: "grey",
  borderWidth: 0,
  borderColor: 'transparent', 
},
btn: {
  width: "100%",
  padding: 10,
  backgroundColor: "#CD3301",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 20,
},
error: {
  color: "red"
},
})