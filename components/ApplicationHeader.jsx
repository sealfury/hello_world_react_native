import React from 'react'
import { StyleSheet } from 'react-native'
import { Appbar } from 'react-native-paper'
import { useSelector } from 'react-redux'

const ApplicationHeader = () => {
  const { appTitle } = useSelector(state => state)
  return (
    <Appbar.Header>
      <Appbar.Content title={appTitle} />
    </Appbar.Header>
  )
}

const styles = StyleSheet.create({})

export default ApplicationHeader