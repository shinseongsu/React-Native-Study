import React from 'react'
import { SafeAreaView, Text } from 'react-native'

export default function App() {
  // const isLoading = true
  // const children = isLoading ? (
  //   <Text>Loading...</Text>
  // ) : (
  //   <Text>Hello JSX world!</Text>
  // )

  // return <SafeAreaView>{children}</SafeAreaView>

  const children = [
    <Text>Hello world!</Text>,
    <Text>Hello world!</Text>,
    <Text>Hello world!</Text>
  ]
  return <SafeAreaView>{children}</SafeAreaView>
}