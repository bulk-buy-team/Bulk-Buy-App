import React, { useRef, useState } from 'react';
import { View, TextInput, StyleSheet, Text, Pressable, KeyboardAvoidingView, useWindowDimensions } from 'react-native';

export default function VerifyTokenPage() {
  const [code, setCode] = useState(["", "", "", ""]);
  const [error, setError] = useState("");
  const inputs = useRef([]);
  const screenWidth = useWindowDimensions().width;

  const handleChange = (text, index) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    if (text && index < 3) inputs.current[index + 1].focus();
  };

  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === 'Backspace' && index > 0 && !code[index]) {
      inputs.current[index - 1].focus();
    }
  };

  const handleSubmit = () => {
    if (code.every((digit) => digit !== "")) {
      setError("");
      console.log("Verification Code:", code.join(""));
    } else {
      setError("Incomplete code");
    }
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView style={[styles.formContainer, { width: screenWidth > 600 ? 500 : "90%" }]}>
        <View style={styles.formHeader}>
          <Text style={[styles.title, styles.formText]}>Enter Verification Code</Text>
          <Text style={styles.formText}>A verification code has been sent to your email</Text>
        </View>
        
        <View>
            <View style={styles.codeContainer}>
            {code.map((digit, index) => (
                <TextInput
                key={index}
                ref={(el) => (inputs.current[index] = el)}
                style={styles.input}
                keyboardType="number-pad"
                maxLength={1}
                onChangeText={(text) => handleChange(text, index)}
                onKeyPress={(e) => handleKeyPress(e, index)}
                value={digit}
                />
            ))}
            </View>
            {error && <Text style={styles.error}>{error}</Text>}
        </View>

        <View style={styles.formFooter}>
          <Text style={styles.formText}>Didn't receive OTP?</Text>
          <Pressable>
            <Text style={[styles.formText, { textDecorationLine: 'underline' }]}>Resend Code</Text>
          </Pressable>
        </View>

        <Pressable style={styles.btn} onPress={handleSubmit}>
          <Text style={styles.formText}>Verify</Text>
        </Pressable>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    padding: 20,
    backgroundColor: "#E5B24E",
    borderRadius: 5,
    alignItems: "center",
    shadowColor: "black",
    gap: 20,
  },
  formHeader: {
    alignItems: "center",
    gap: 5,
  },
  formText: {
    color: "#F6F6F6",
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
  input: {
    borderBottomWidth: 1,
    borderColor: '#333',
    textAlign: 'center',
    fontSize: 24,
    width: 40,
    marginHorizontal: 5,
    backgroundColor: "#F6F6F6",
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
    color: "red",
    textAlign: "center",
  },
  formFooter: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
});
