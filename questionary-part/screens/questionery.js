import { Button, StyleSheet, Text, View, ScrollView,Pressable } from 'react-native'
import React,{useState,useEffect} from 'react'
import questions from './question';
import Ques from './ques';


import { colors } from '../../style/colors'
const Questionery = ({navigation}) => {

  const [index,setIndex]=useState(0)

   const Previous=()=>{
    if(index>0){
      setIndex(index-1)
      
    }
   }

   const Next=()=>{
    if(index<29){
      setIndex(index+1)
    }
   
  }  

  // functution to return array of answers in child component
  // there it call like a callback and change the state, his local state
  // and return it to parent component 

  const arr = [45,33, 43,35, 55,37]
  // const getA = (arrr) =>{
  //   for (let i of arrr) {
  //     arr.push(i)

  // }
  const getAnswers = (array) => {
    // setArrayOfAnswers([...arrayOfAnswers, ...array]
    // let arr = array
    // )
    console.log(array);
    // console.log(array)
  }
  
 
  console.log(arr);

  return (
    <ScrollView style={styles.Quiz_Component}>
      <Text style={styles.Quiz_Head}>{index >= 29 ? "Натисніть кнопку відправки": "Питання " + ("Question  " +  (index === 0) ? index + 1: 0 ) + "/30"}</Text>
     
      <View>
        <Ques question={questions[index]} index={index} getAnswers= {getAnswers}/>
      </View>

      <View style={styles.buttons}>
        <Button color = {colors.lightSecondary} title=' Попереднє ' onPress={()=>Previous()}/>
        <Button color = {colors.lightSecondary}  title='  Наступне  '  onPress={()=>Next()}/>
      </View>
      <Pressable
      title='Submit Your Quiz'
      style={ index === 29 ? styles.submissionButton :styles.submissionButton2 }
      onPress=  {() =>  navigation.navigate("Результат", { data: arr} 
                  )
      }

      >
        <Text style = {styles.submissionButtonText}> Відправити </Text>
      </Pressable>
    </ScrollView>
  )
}



export default Questionery


const styles = StyleSheet.create({
    Quiz_Component:{
        width:"100%",
        flex: 1,
        display:"flex",
        paddingHorizontal:20,
        backgroundColor:colors.secondary,
      
    },
    Quiz_Head:{
        textAlign:"center",
        fontSize:28,
        paddingVertical:15,
        color:colors.white
    },
    buttons:{
      display:"flex",
      flexDirection:"row",
      width:"100%",
      justifyContent:"space-between",
      marginTop:10,
      padding:5
    },
    submissionButton:{
      alignSelf:"center",
      backgroundColor:colors.dark,
      width:100,
      height:50,
      justifyContent:"center",
      borderRadius:5

    },
    submissionButtonText:{
      fontSize:18,
      color: colors.white,
      textAlign:"center",
    },
    submissionButton2:{
      alignSelf:"center",
      backgroundColor:colors.lightSecondary,
      width:120,
      height:50,
      justifyContent:"center",
      borderRadius:5
    },
    
    
  
    
   
})