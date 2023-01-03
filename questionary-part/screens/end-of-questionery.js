import {  StyleSheet, Text, View, Button,Dimensions, Image, Pressable } from 'react-native'
import React from 'react'

import {BarChart} from "react-native-chart-kit"
import { colors } from '../../style/colors'
import questions from './question' 


const EndOfQuestionery = ({navigation, route}) => {
const {data} = route.params;

const imageResult = require('../../assets/questionery_emoji/result.png')

  return (
    <> 
  
    <View style={styles.Quiz_Component}>
      <Text style={styles.Quiz_Head}>Що ми виявили </Text> 
      <Image source = {imageResult} style = {styles.image}/>
       <View style = {{alignItems:"center"}}>
       
       
       <Text style = {styles.subhead}>Ваші рівні психчних залежностей. Сірим виділено середній показник рівня  емоційних відхилень в середньо-статистичної людини</Text>

        </View>
     

      <BarChart
        data={{
          labels: ['Депресія', '', 'Тривога', '', 'Стрес', ''],
          datasets: [
            {
              data: data,
              colors:[
                (opacity=1) => `#FF0000` ,
                (opacity=1) => `#808080` ,
                (opacity=1) => `#0000FF` ,
                (opacity=1) => `#808080` ,
                (opacity=1) => `#FFFF00` ,
                (opacity=1) => `#808080` ,
              ]
             
            },
          ],
        }}
        withCustomBarColorFromData= {true}
        flatColor= {true}
        width={Dimensions.get('window').width - 16}
        height={220}
        fromZero= {true}
        withInnerLines ={false}
        showBarTops= {false}
        // yAxisLabel={''}
        chartConfig={{
          backgroundColor: colors.white,
          backgroundGradientFrom: colors.white,
          backgroundGradientTo: colors.white,
          decimalPlaces: 0,
          barRadius:5,
          barPercentage:1,
          fillShadowGradientFromOffset: 1,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          // useShadowColorFromDataset:true,
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />


     <Pressable
       style = {styles.buttonSubmit}
       onPress={() => navigation.navigate("Музичний плеєр")}
     >
      <Text style = {styles.buttonSubmitText}> Роспочати музикотераію </Text>
      
       </Pressable>
       
    </View>
    </>
  )
}



export default EndOfQuestionery


const styles = StyleSheet.create({
    Quiz_Component:{
        flex:1,
        width:"100%",
        display:"flex",
        alignItems:"center",
        backgroundColor: colors.main
    },
    Quiz_Head:{
        fontSize:40,
        color: colors.white
    },
    buttons:{
      display:"flex",
      flexDirection:"row",
      width:"100%",
      justifyContent:"space-between",
      marginTop:10,
      padding:5
    },
    subhead:{
      color: colors.white,
      fontSize:17,
      paddingVertical:10    
    },
    image:{
      width: 210,
      height: 210,
      paddingVertical:10,
    },
    buttonSubmit:{
      backgroundColor:colors.secondary,
      width:250,
      height:70,
      marginTop:30,
      alignItems:"center",
      justifyContent:"center",
      borderRadius:18
    },
    buttonSubmitText:{
      color:colors.white,
      fontSize:17
    }
   
})