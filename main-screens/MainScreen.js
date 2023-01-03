import { Pressable, StyleSheet,View, Text, ImageBackground} from "react-native";

import { colors } from "../style/colors";


const QuizImage = require("../assets/quest.jpg")
const AudioImage = require("../assets/audio.jpg")

 const MainScreen = ({navigation}) => {

        return (

             <View style={styles.container}> 

            <ImageBackground source = {QuizImage} style = {styles.image}>
                    <View style={styles.buttonContainer}>  
                    


                    <Pressable  
                        style = {styles.buttonMain} 
                        onPress={() => navigation.navigate("Опитування") }> 
                        <Text style = {styles.textMain}> Пройти опитування  </Text>   
                    </Pressable>
                    

                   </View>  

                </ImageBackground>
                <ImageBackground source = {AudioImage} style = {styles.image}>
                
                <View style={styles.buttonContainer}>  
                    <Pressable  
                        style = {styles.buttonMain} 
                        onPress={() => navigation.navigate("Вибір музичного інструменту")}>  

                        <Text style = {styles.textMain} > Вивчити щось нове </Text>  
                        
                    </Pressable>
                </View>  
                </ImageBackground>
            </View>  
        );  
    }  
 
    export default MainScreen
  
const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
        justifyContent: 'center',  
        backgroundColor:colors.dark
    },  

    buttonContainer: {  
        padding:20,
        margin: 20,  
        backgroundColor:colors.white,
        borderRadius:15,
        alignSelf:"center"
        
    },  
    multiButtonContainer: {  
        margin: 20,  
        flexDirection: 'row',  
        justifyContent: 'space-between'  
    }  ,
    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        // height:350,
        
      },


    buttonMain:{
        
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 1,
        backgroundColor:colors.white,
        activeOpacity:0.4,
        alignSelf: 'stretch',
        width:260,
        shadowColor:colors.dark,

        
    },

    textMain: {
        fontSize:18,
        backgroundColor:colors.white,

      }
   
})  