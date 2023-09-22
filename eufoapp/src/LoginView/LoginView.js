import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

const LoginView = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.texto}> TELA LOGIN </Text>
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('TelaDash')}>
        <Text>Acessar ao Dashboard</Text>
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
    fontSize: 28,
    alignSelf: "center",
  }
})

export default LoginView