import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Appbar } from 'react-native-paper'
import { useSelector } from 'react-redux'

const ApplicationHeader = () => {
  const { appTitle } = () => {state => state}
  return (
    <Appbar.Header>
      <Appbar.Content title={appTitle} />
    </Appbar.Header>
  )
}

const styles = StyleSheet.create({})

export default ApplicationHeader