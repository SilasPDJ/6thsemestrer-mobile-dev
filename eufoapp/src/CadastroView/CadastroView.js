import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const CadastroView = () => {
  return (
    <View>
      <Text style={style.texto}> TELA LOGIN </Text>
    </View>
  )
}

const style = StyleSheet.create({
  texto: {
    flex: 1,
    fontSize: 28,
    alignSelf: "center",
  }
})

export default CadastroView