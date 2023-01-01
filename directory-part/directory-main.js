import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity,Pressable } from 'react-native';

import {colors} from '../style/colors'



function Item({  item,navigation }) {
  return (
    <View style={styles.listItem}>
      <Image source={{uri:item.photo}}  style={{width:60, height:60,borderRadius:10}} />
      <View style={{alignItems:"center",flex:1}}>
        <Text style={{fontWeight:"bold", fontSize:17}}>{item.name}</Text>
        <Text style = {{fontSize:13}}>{item.position}</Text>
      </View>
      <Pressable onPress={()=> navigation.navigate("Стаття") } style={{height:50,width:60, justifyContent:"center",alignItems:"center"}}>
        <Text style={{color:"green"}}>Вивчати</Text>
      </Pressable>
    </View>
  );
}

const data = [
  {
      "name": "Флейта",
      "email": "miyah.myles@gmail.com",
      "position": "лабіальний духовий музичний інструмент",
      "photo": "https://images.unsplash.com/photo-1638317037996-f86e745cf657?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80"
  },
  {
      "name": "Фортопіано",
      "email": "june.cha@gmail.com",
      "position": "збірна назва класу струнних ударно-клавішних музичних інструментів",
      "photo": "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  },
  {
      "name": "Гітара",
      "email": "iida.niskanen@gmail.com",
      "position": "струнний музичний інструмент родини лютень",
      "photo": "https://images.unsplash.com/photo-1625838471903-9d675a6dfe39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  },
  {
      "name": "Скрипка",
      "email": "renee.sims@gmail.com",
      "position": "струнний музичний смичковий інструмент",
      "photo": "https://images.unsplash.com/photo-1612225330812-01a9c6b355ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  },
  {
      "name": "Саксофон",
      "email": "духовий музичний інструмент",
      "position": "духовий музичний інструмент",
      "photo": "https://images.unsplash.com/photo-1528143358888-6d3c7f67bd5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=741&q=80"
  },
  {
      "name": "Баян",
      "email": "sasha.ho@gmail.com",
      "position": "удосконалена хроматична гармонія",
      "photo": "https://images.unsplash.com/photo-1578841345191-037d88f2011c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
  },
  {
      "name": "Кларнет",
      "email": "abdullah.hadley@gmail.com",
      "position": "музичний інструмент сімейства дерев'яних духових",
      "photo": "https://images.unsplash.com/photo-1651232529481-3c3e8c29e9fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fENsYXJpbmV0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
      "name": "Шен",
      "email": "thomas.stock@gmail.com",
      "position": "китайський духовий язичковий музичний інструмент, губний орган",
      "photo": "https://images.unsplash.com/photo-1587050732883-8e8fde8e0c41?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGphcGFuZXNlJTIwbXVzaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
  },
  {
      "name": "Барабан",
      "email": "veeti.seppanen@gmail.com",
      "position": "назва ряду ударних музичних інструментів ",
      "photo": "https://images.unsplash.com/photo-1543443374-b6fe10a6ab7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fERydW1zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
  },

]

export default class DirectoryMainScreen extends React.Component {



  render(){
    return (
      <View style={styles.container}>
        <FlatList
          style={{flex:1}}
          data={data}
          renderItem={({ item }) => <Item item={item} navigation = {this.props.navigation}/>}
          keyExtractor={item => item.email}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightSecondary,
    // marginTop:60
  },
  listItem:{
    margin:10,
    padding:10,
    backgroundColor:colors.white,
    width:"90%",
    flex:1,
    alignSelf:"center",
    flexDirection:"row",
    borderRadius:5
  }
});