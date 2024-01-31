import { NavigationProp } from '@react-navigation/native'
import React from 'react'
import { Button, Text, View } from 'react-native'
import { FIREBASE_AUTH } from '../../FirebaseConfig';
import Details from './Details';


interface RouterProps{
    navigation : NavigationProp<any, any>
}

const List = ({navigation}:RouterProps) => {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', borderColor:'black'}}>
        <Button  onPress={()=>navigation.navigate('Details')} title='Open Details'/>
        <Button onPress={()=>FIREBASE_AUTH.signOut()} title='LogOut' />
      </View>
    )
  }

  export default List;