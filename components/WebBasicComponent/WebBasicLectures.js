/** 
 * *
 * 티스토리 포스팅용 코드 
 * */

import React, {useState, useEffect} from 'react';
import { View, Text, ScrollView, FlatList, Button , StyleSheet,TouchableOpacity } from 'react-native';


const WebBasicLectures =({navigation}) => {
    const [ param , setParam ]  = useState('HTML');

    return( 
        <View style={style.wrap}>
            <View style={style.categoryWrap}>
                 <TouchableOpacity style={style.categoryBtn}  
                onPress={()=> setParam('1')}>
                    <Text>menu1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.categoryBtn}  
                onPress={()=> setParam('2')}>
                    <Text>menu2</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.categoryBtn}  
                onPress={()=> setParam('3')}>
                    <Text>menu3</Text>
                </TouchableOpacity>
     
            </View>
            <Text>{param}</Text>
            <ScrollView>
                <Text>*TODO FlatList in YouTube Data 222222</Text>
            </ScrollView>
        </View>
    );  
}

export default WebBasicLectures;

const style = StyleSheet.create({
    wrap: {
        flex:1 ,
        padding: 0.3,
        backgroundColor: "#FFFFFF"
    },
    categoryWrap:{
        flex:1,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        // justifyContent: 'space-between'
        
    },
    categoryBtn: {
        alignItems: 'center',
        margin: 0.5,
        paddingVertical: 10,
        width: '33%',
        borderRadius: 2, 
        borderWidth: 0.8,
        borderColor: '#dedede',
    }
})