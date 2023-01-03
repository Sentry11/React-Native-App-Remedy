import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React, { useState,useEffect,useContext,createContext } from "react";

import { colors } from '../../style/colors'



const Ques = ({ question,index,getAnswers }, ) => {



 const [ansArray, setAnsArray] = useState()

  useEffect(() => {
   
  }, [index])
  


  return (
    <View>
      <View style={styles.Ques_Box}>
      <Image source = {question.img} style = {styles.image}/>
        <Text style={styles.Ques_heading}>{question.question}</Text>
      </View>


      <View style={styles.options_box}>

        {/* <Text style={styles.option_text}>Choose correct one from these</Text> */}
        <View style={styles.options}>




          <TouchableOpacity
          style = { styles.varOfAnswers}
          onPress={()=>{

                setAnsArray([...ansArray, 1])
                getAnswers(ansArray)
                
          }}>

            <Text style = {styles.varOfAnswersText}> {question.answers[1]} </Text>
          </TouchableOpacity>



          <TouchableOpacity
          style = { styles.varOfAnswers}
          onPress={()=>{
                // setAnsArray([question.answers[2]])
                setAnsArray([...ansArray, +2])
                getAnswers(ansArray)
          }}
          >
            {/* <Text style={[styles.option,B?styles.secondStyle:null]}>{question.options.b}</Text> */}
            <Text style = {styles.varOfAnswersText}> {question.answers[2]} </Text>
          </TouchableOpacity>


          <TouchableOpacity
           style = { styles.varOfAnswers}
           onPress={()=>{
                setAnsArray([...ansArray, +3])
                getAnswers(ansArray)
          }}
          >
          <Text style = {styles.varOfAnswersText}> {question.answers[3]} </Text>
          </TouchableOpacity>


          <TouchableOpacity
           style = { styles.varOfAnswers}
           onPress={()=>{
                // setAnsArray([question.answers[4]])
                setAnsArray([...ansArray, +4])
                getAnswers(ansArray)
          }}
          >
          <Text style = {styles.varOfAnswersText}> {question.answers[4]} </Text>
          </TouchableOpacity>



          <TouchableOpacity
          style = { styles.varOfAnswers}
          onPress={()=>{
                // setAnsArray([question.answers[5]])
                setAnsArray([...ansArray, +5])
                getAnswers(ansArray)
          }}
          >
            <Text style = {styles.varOfAnswersText}> {question.answers[5]} </Text>
          </TouchableOpacity>



        </View>
      </View>
    </View>
  );
};







const styles = StyleSheet.create({
  Ques_Box: {
    width: "100%",
    marginTop: 5,
    padding: 5,
    backgroundColor: colors.lightMain,
    alignItems:"center",
    color:colors.white,
    borderRadius:10

  },
  Ques_heading: {
    fontSize: 21,
    color:colors.white,
    marginVertical:15
  },
  options_box: {
    width: "100%",
    marginTop: 15,
  },
  option_text: {
    fontSize: 20,
    color:colors.white,
    textAlign:"center"
  },
  options: {
    marginTop: 10,
    width: "100%",
    borderWidth: 2,
    borderColor: "transparent",
    padding: 10,
  },
  option: {
    marginVertical: 5,
    fontSize: 20,
    backgroundColor: "lightgrey",
    padding: 5,
    borderWidth: 1,
  },
  secondStyle:{
      backgroundColor:"#66ffff"
  },
  image: {
     width: 180,
     height: 180,
     paddingVertical:10,
    
  },
  varOfAnswers:{
    backgroundColor:colors.lightMain,
    padding:5,
    borderRadius:10,
    marginVertical:5
  },  
  varOfAnswersText: {
    color: colors.white,
    fontSize:17,

  }
});

export default Ques;