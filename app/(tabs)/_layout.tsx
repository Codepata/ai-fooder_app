import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

export default function TabLayout() {
  return (
    <Tabs>
        <Tabs.Screen name="Home" />
        <Tabs.Screen name="Explor" />
        <Tabs.Screen name="Cookbook" />
        <Tabs.Screen name="Profile" />
    </Tabs>
  )
}

const styles = StyleSheet.create({})