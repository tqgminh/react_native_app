import React from "react";
import { StyleSheet, Text, View, ScrollView,TouchableOpacity } from "react-native";
import Search from "../components/Search";
import SuggestFriendHeader from "../components/SuggestFriendHeader";
import SuggestFriendItem from "../components/SuggestFriendItem";

export default function SuggestFriendScreeb({ navigation }) {
    const ListPeople = [
        {
          id: '1',
          partner: {
            id: 'u1',
            name: 'Nguyễn Quang Huy',
            imageUri: 'https://scontent.fhph1-3.fna.fbcdn.net/v/t1.6435-9/53839948_2350366775245449_2386366473418309632_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=JCpuHYnKrCIAX_qLiV5&_nc_ht=scontent.fhph1-3.fna&oh=4dbfeae767ccc626b491cf3f7c36a0c2&oe=619DD73B',
            description:'Có thể bạn quen'
          }
        },
        {
          id: '2',
          partner: {
            id: 'u2',
            name: 'Nguyễn Văn Thanh',
            imageUri: 'https://scontent.fhph1-2.fna.fbcdn.net/v/t1.6435-1/s320x320/53419601_2187033871611868_5753282342814744576_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=7206a8&_nc_ohc=V9hgJhBl8d0AX_LU1ff&_nc_ht=scontent.fhph1-2.fna&oh=e2064a6dfd192328096fd915ac79ca1f&oe=619D31A5',
            description:'Có thể bạn quen'
          }
        }, 
        {
          id: '3',
          partner: {
            id: 'u3',
            name: 'Bùi Việt Hoàng',
            imageUri: 'https://scontent.fhph1-3.fna.fbcdn.net/v/t1.6435-9/54524031_435375897022452_1255296843290509312_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=-Fh1ptSCHgwAX-oJCI7&_nc_ht=scontent.fhph1-3.fna&oh=782b737a7021379d0d5cc7c895f351b0&oe=619F8B7A',
            description:'Có thể bạn quen'
          }
        }, 
        {
          id: '4',
          partner: {
            id: 'u4',
            name: 'Vũ Xuân Khánh',
            imageUri: 'https://scontent.fhph1-2.fna.fbcdn.net/v/t1.6435-1/p320x320/134994572_2626773770956391_4564113000548582004_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=7206a8&_nc_ohc=sVSICmD7zNQAX-jYb8v&_nc_ht=scontent.fhph1-2.fna&oh=25b50b4bba8b2bbe481329f8dacb2a6b&oe=619D398A',
            description:'Bạn cùng nhóm'
          }
        }
      ]
    return (
      <View style={styles.container}>
        <SuggestFriendHeader navigation={navigation}/>
        <ScrollView>
          {
            ListPeople.map(item =>{
                return (
                <TouchableOpacity key ={item.id}>
                    <SuggestFriendItem name={item.partner.name} imageUri = {item.partner.imageUri} iconActivate={1} description={item.partner.description}/>
                </TouchableOpacity>
                )
            })
          }
        </ScrollView>
      </View>
    );
  }
  
const styles = StyleSheet.create({
container: {
    // flex: 1,
    backgroundColor: "#fff",
    // alignItems: 'center',
    // justifyContent: 'center'
    marginBottom: "20%",
},
});
  