
import { View } from "react-native";
import { StyleSheet,Image, Text, ScrollView } from "react-native";

import {colors}  from "../style/colors"
const img = require('../assets/music.jpg')

 const SinglePageDirectory = ({navigation}) => {
        return (
                <ScrollView style={styles.container}> 
                   <Text style = {styles.title}>Флейта</Text>
                   <Text style = {styles.textMain}>
                   Флейта – це дерев'яний духовий інструмент із чудовим звучанням, який може бути як частиною оркестру, так і виконувати самостійну партію. Флейта є найстарішим відомим музичним інструментом – перші флейти з'явилися 43000 років тому у деяких частинах Західної Європи. Так що якщо ви хочете стати частиною цієї великої музичної традиції та навчитися грати на флейті, почніть з описаної нижче інструкції.
                   </Text>

                   <View>
                        <Image style = {styles.image} source={img}/>
                   </View>
                <Text style = {styles.textMain}>
                Частина 1 - Підготовка
                </Text>
                <Text style = {styles.textMain}>
                        ____________________________________________
                       </Text>
                <Text style = {[styles.textMain, styles.footer]}>
                 Придбайте або орендуйте флейту у музичному магазині. При перших спробах гри на музичному інструменті краще взяти його в оренду, щоб бути впевненим, що він сподобається вам настільки, щоб його придбати.
                 Якщо ви впевнені, що вам подобається гра на флейті, ви можете взяти інструмент в оренду з правом викупу або придбати новий. Якщо ви берете уроки, проконсультуйтеся зі своїм учителем, яку флейту вам краще вибрати.
                 Ціна флейти може варіюватися від 100 до 1000 і більше доларів, але навчальні флейти гарної якості можна придбати і за 300. Початківцям краще купувати флейти шановного бренду з отворами, закритими клапанами, оскільки багато дешевих флейтів погано зроблено, і як результат – на них буде складно грати.
                 Дорогі професійні флейти з відкритими отворами переважно призначені для більш досвідчених флейтистів. На них часто важко грати, але з інших причин.
                 Перш ніж зробити покупку, попросіть поради інших флейтистів та/або вчителів, щоб вибрати найбільш підходящий інструмент.
                </Text>
            </ScrollView>  
        );  
    }  
 
  export default SinglePageDirectory
  
   const styles = StyleSheet.create({  
    container: {  
        margin:0,
        padding:10,
        flex: 1,  
        // justifyContent: 'center',  
        backgroundColor:colors.white
    },  

    textMain: {
        fontSize:18,
        backgroundColor:"transparent",

      },
      title: {
        fontSize:23,
        textAlign:"center",
        paddingVertical:10
      },
      image:{
        alignSelf:"center",
        width:220,
        height:220,
      },
      footer:{
        marginBottom:20
      }
   
})  