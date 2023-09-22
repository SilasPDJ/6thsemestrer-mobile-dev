import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

const HomeView = ({ navigation }) => {
  console.log(navigation)
  return (
    <View style={styles.mainView}>
      <Text style={styles.texto}> TELA HOME </Text>
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('TelaLogin')}>
        <Text>Tela Login</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  mainView: {
    alignSelf: "center",
  },
  btn: {
    backgroundColor: "#ddff00",
    alignItems: "center",
    color: "white",
    marginTop: 40,
    paddingVertical: 20,
  },
  texto: {
    // flex: 0,
    fontSize: 28,
  }
})

export default HomeView