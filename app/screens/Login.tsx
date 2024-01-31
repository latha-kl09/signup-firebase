import React, { useState } from 'react'
import { Text, View,StyleSheet, TextInput, ActivityIndicator, Button, KeyboardAvoidingView } from 'react-native'
import { FIREBASE_AUTH } from '../../FirebaseConfig';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

const Login =() => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const auth = FIREBASE_AUTH;

    const signIn = async ()=> {
        setLoading(true);
        try{
            const response = await signInWithEmailAndPassword(auth, email, password);
            console.log(response);
        }catch(error:any){
            console.log(error);
            alert('Sign in Failed :'+ error.message )
        }
        finally{
            setLoading(false);
        }
    }

    const signUp = async () => {
        setLoading(true);
        try{
            const response = await createUserWithEmailAndPassword(auth, email, password);
            console.log(response);
            alert('Check Your email!')
        }catch(error: any){
            console.log(error);
            alert('Sign in Failed :'+ error.message )
        }
        finally{
            setLoading(false);
        }
    }

    return (
        <View style = {styles.container}>
            <KeyboardAvoidingView behavior='padding'>
          <TextInput value={email} style={styles.input} placeholder='Email' onChangeText={(text)=> setEmail(text)}></TextInput>
          <TextInput value={password} style={styles.input} placeholder='Password' onChangeText={(text)=> setPassword(text)} secureTextEntry></TextInput>
            {loading ?( <ActivityIndicator size='large' color='#0000ff' />)
            : (<>
            <Button title='Login' onPress={()=>signIn()} />
            <Button title='create Account' onPress={()=>signUp()} />
            
            </>)}
            </KeyboardAvoidingView>
        </View>
      );
}
export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        width: '100%',
        justifyContent: 'center',
        alignItems:'center',
      },
      input: {
        marginVertical: 4,
        height : 50,
        borderWidth : 1,
        padding : 10,
        borderRadius: 5,
        marginTop: 5,
      }
})