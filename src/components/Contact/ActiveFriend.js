import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Button, FlatList,ScrollView} from "react-native";
import FriendItem from "./FriendItem";


function ActiveFriend({ navigation }){

    const ListPeople = [
      {
        id: '1',
        partner: {
          id: 'u1',
          name: 'Nguyễn Quang Huy',
          imageUri: 'https://scontent.fhph1-3.fna.fbcdn.net/v/t1.6435-9/53839948_2350366775245449_2386366473418309632_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=JCpuHYnKrCIAX_qLiV5&_nc_ht=scontent.fhph1-3.fna&oh=4dbfeae767ccc626b491cf3f7c36a0c2&oe=619DD73B',
        },
        activate:0
      },
      {
        id: '2',
        partner: {
          id: 'u2',
          name: 'Nguyễn Văn Thanh',
          imageUri: 'https://scontent.fhph1-2.fna.fbcdn.net/v/t1.6435-1/s320x320/53419601_2187033871611868_5753282342814744576_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=7206a8&_nc_ohc=V9hgJhBl8d0AX_LU1ff&_nc_ht=scontent.fhph1-2.fna&oh=e2064a6dfd192328096fd915ac79ca1f&oe=619D31A5',
        },
        activate:1
      }, 
      {
        id: '3',
        partner: {
          id: 'u3',
          name: 'Bùi Việt Hoàng',
          imageUri: 'https://scontent.fhph1-3.fna.fbcdn.net/v/t1.6435-9/54524031_435375897022452_1255296843290509312_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=-Fh1ptSCHgwAX-oJCI7&_nc_ht=scontent.fhph1-3.fna&oh=782b737a7021379d0d5cc7c895f351b0&oe=619F8B7A',
        },
        activate:0
      }, 
      {
        id: '4',
        partner: {
          id: 'u4',
          name: 'Vũ Xuân Khánh',
          imageUri: 'https://scontent.fhph1-2.fna.fbcdn.net/v/t1.6435-1/p320x320/134994572_2626773770956391_4564113000548582004_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=7206a8&_nc_ohc=sVSICmD7zNQAX-jYb8v&_nc_ht=scontent.fhph1-2.fna&oh=25b50b4bba8b2bbe481329f8dacb2a6b&oe=619D398A',
        },
        activate:1
      }, 
      {
        id: '5',
        partner: {
          id: 'u5',
          name: 'Trần Quang Minh',
          imageUri: 'https://scontent.fhph1-2.fna.fbcdn.net/v/t1.6435-9/240530572_3042163572773692_5707998733869317352_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=hP1ksMyITCkAX_cT_Ic&_nc_ht=scontent.fhph1-2.fna&oh=6bf85a3b0bc5f8afff89103d499698df&oe=619DFDD6',
        },
        activate:1
        
      }
    ]

    const activePeople = ListPeople.filter(people => people.activate === 1)
    const sortPeople = ListPeople.sort((a,b)=>a.partner.name > b.partner.name)

    const upperCaseAlp = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    let arrSortPeople =[]
    const renderFriendByName = (sortPeople)=>{
        for(const i of upperCaseAlp){
          const listName = sortPeople.filter(item => item.partner.name[0] == i || item.partner.name[0].toUpperCase() ==i )
          if(listName.length!=0)
          arrSortPeople.push({
            startName:i,
            data:listName
          })
        }
    }
    renderFriendByName(sortPeople)

    return (
        
            <View style={styles.container}>
                <View style={styles.containerActivate}>
                  <Text style={styles.header}>Bạn bè mới truy cập</Text>

                  {
                    activePeople.map(item =>{
                      return (
                        <TouchableOpacity key ={item.id}  onPress={() =>
                          navigation.navigate('ChatScreen', {name: item.partner.name, imageUri: item.partner.imageUri})}>

                            <FriendItem name={item.partner.name} imageUri = {item.partner.imageUri} iconActivate={1} />
                        </TouchableOpacity>
                      )
                    })
                  }

                </View>

                <View>
                  <Text style={styles.header2}>Tất cả bạn bè</Text>
                  { 

                    arrSortPeople.map((item,index) =>{
                      return (
                        <View key ={index} style={styles.headerFriend}>
                          <Text style={styles.textCategory}>{item.startName}</Text>
                          {
                            item.data.map((data,index2)=>{
                              return (
                                <TouchableOpacity key ={index2} onPress={() =>
                                  navigation.navigate('ChatScreen', {name: data.partner.name, imageUri: data.partner.imageUri})}>
        
                                  <FriendItem name={data.partner.name} imageUri = {data.partner.imageUri}/>
                                </TouchableOpacity>
                              )
                            })
                          }
                        </View>
                      )
                    })
                  }
                </View>

            </View>

            
        
    )
}

export default ActiveFriend;

const styles = StyleSheet.create({
    container: {
      // marginBottom:'30%'
       
    },
    text: {
       
    },
    containerActivate:{
      borderBottomWidth:5 ,
      borderBottomColor: '#DCDCDC'

    },
    header:{
      fontSize:15,
      marginHorizontal:10,
      marginTop:5,
      fontWeight:'800',
    },
    header2:{
      fontSize:15,
      paddingHorizontal:10,
      marginTop:5,
      fontWeight:'800',
      borderBottomWidth:2 ,
      borderBottomColor: '#DCDCDC'

    },
    headerFriend:{
      borderBottomWidth:2 ,
      borderBottomColor: '#DCDCDC'
    },
    textCategory:{
      paddingLeft:10,
      // marginTop:1
    }
})