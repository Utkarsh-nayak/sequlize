import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const App =  () => {

  const[data,setData]=useState([]);

  const getAPIData = async ()=>{
    //api call
    const url = "https://jsonplaceholder.typicode.com/posts";
    let result = await fetch(url);
    result = await result.json();
    setData(result);
  }
  useEffect(()=>{
    getAPIData()
  },[]);

  return(
    <ScrollView>
      <Text style={{fontSize: 30 }}>List With API call</Text>
      {data.length ?
    data.map((item)=><View style={{padding:10,borderBottomColor:'#ccc', borderBottomWidth:1}}>
  <Text style={{ fontSize: 30, backgroundColor:'#fff'}}> Id : {item.id}</Text>
  <Text style={{ fontSize: 30}}> Title: {item.title}</Text>
  <Text style={{ fontSize: 30}}> Body: {item.title}</Text>

  </View>
  ) 
   : 
   null
   }
    </ScrollView>
  )};
  export default App; ``