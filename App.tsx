import { SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'


function App(): JSX.Element{ 
  const [randomBackGround, setRandomBackGround] = useState("#ffffff")

  const generateColor = () => {
    const hexRange = "0123456789ABCDEF"
    let color = "#"

    for(let i = 0; i < 6; i++){
      color += hexRange[Math.floor(Math.random() * 16)]
    }

    setRandomBackGround(color)
  }
  

  return (
    <>
      <StatusBar backgroundColor={randomBackGround} />
      <View style={[styles.container,{backgroundColor: randomBackGround}]}>
      <SafeAreaView>
        <TouchableOpacity onPress={generateColor}>
          <View style={styles.actionBtn}>
            <Text style={styles.actionBtnTxr}>Press me</Text>
          </View>
      </TouchableOpacity>
      </SafeAreaView>
      </View>
    </>
  )
}

export default  App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionBtn: {
    borderRadius: 10,
    backgroundColor: '#6A1B4D',
    paddingVertical: 10,
    paddingHorizontal: 40,
  
  }, actionBtnTxr: {
    color: '#FFFFFF',
    textTransform: 'uppercase',
    fontSize: 24,
  }
})