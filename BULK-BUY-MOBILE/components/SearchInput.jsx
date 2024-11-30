import { KeyboardAvoidingView, StyleSheet, TextInput } from 'react-native'
import React, { useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons'

export default function SearchInput() {
    const [searchInputValue, setSearchInputValue] = useState("")
  return (
    <KeyboardAvoidingView style={styles.searchInputContainer}>
        <MaterialIcons name='search' color={"#000"} size={20} />
        <TextInput
            style={styles.searchInput}
            value={searchInputValue}
            onChangeText={setSearchInputValue}
            placeholder='Search'
            autoCorrect={false}
            autoCapitalize='none'
            underlineColorAndroid="transparent"
        />
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  searchInputContainer: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 15,
      // borderWidth: 1,
  },
  searchInput: {
      width: "100%",
      height: "100%",
      backgroundColor: "transparent",
      color: "grey",
      borderColor: 'transparent',
      // borderWidth: 1,
  }
})