// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import { Dimensions } from 'react-native';


// const lartesiaMax = Dimensions.get("window").height; // height i ekranit te paisjes telefonike
// const gjeresiaMax = Dimensions.get("window").width;// width i ekranit te paisjes telefonike

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <View style={{width:"20%", height:100, backgroundColor:"red", justifyContent:"center",alignItems:"center"}}>1</View>
//       <View style={{width:"20%", height:100, backgroundColor:"blue", justifyContent:"center",alignItems:"center"}}>2</View>
//       <View style={{width:"20%", height:100, backgroundColor:"green", justifyContent:"center",alignItems:"center"}}>3</View>
//       <View style={{width:"20%", height:100, backgroundColor:"orange", justifyContent:"center",alignItems:"center"}}>4</View>
//     </View>
//   );
// }

// const styles= StyleSheet.create({
//   container:{
//     flex:1,
//     //flexWrap:"wrap",
//     flexDirection:"row",
//     justifyContent: "center",
//     alignItems: "center",// funksionon vetem atehere kur permbajtja eshte 1 rresht
//     alignContent:"center", // funksionon atehere kur permbajtja eshte 2 apo me shume rreshta apo eshte flexWrap:wrap
//     borderWidth:3,
//     borderRadius:20,
//     borderColor:"red",
//     backgroundColor:"yellow",
//     // height:lartesiaMax,
//     gap:20,
//     // rowGap:50, hapesira ndermjet rreshtave
//     // columnGap:50, hapesira ndermjet kolonave
//     padding:20
//     }
// });

// import React from 'react';
// import { View, StyleSheet } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <View style={styles.red}></View>
//       <View style={styles.blue}></View>
//       <View style={styles.green}></View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: "row",
//     flex: 1
//   },

//   red: {
//     flexBasis: 100,//gjendja fillestare
//     flexGrow: 1,// ratio i rritjes
//     flexShrink: 1,// ratio i zvogelimit
//     height: 100,
//     backgroundColor: "red"
//   },

//   blue: {
//     flexBasis: 100,
//     flexGrow: 2,
//     flexShrink: 1,
//     height: 100,
//     backgroundColor: "blue"
//   },

//   green: {
//     flexBasis: 100,
//     flexGrow: 1,
//     flexShrink: 2,
//     height: 100,
//     backgroundColor: "green"
//   }
// });


import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>

      {/* Titulli */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Dashboard</Text>
      </View>


      {/* Cards */}
      <View style={styles.dashboard}>

        <View style={styles.card}>
          <Text style={styles.cardNumber}>120</Text>
          <Text>Users</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardNumber}>75</Text>
          <Text>Orders</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardNumber}>32</Text>
          <Text>Products</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardNumber}>€540</Text>
          <Text>Revenue</Text>
        </View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 20
  },

  header: {
    alignItems: "center",
    marginBottom: 20
  },

  headerText: {
    fontSize: 28,
    fontWeight: "bold"
  },

  dashboard: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between"
  },

  card: {
    width: "48%",
    height: 120,
    backgroundColor: "lightgreen",
    borderRadius: 10,
    marginBottom: 15,
    justifyContent: "center",
    alignItems: "center"
  },

  cardNumber: {
    fontSize: 26,
    fontWeight: "bold",
    color: "white"
  }

});




















// import React from 'react';
// import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';

// //1. Duhet te importohet FlatList
// import {FlatList} from 'react-native';


// export default function App() {
// //2.0 Ndertojme nje matrice me elemente
//   const fruits = ["Apple", "Banana", "Orange", "Mango"];

// //Shembull tjeter:
//   const students = [
//     {id: "1", name: "Arben"},
//     {id: "2", name: "Sara"},
//     {id: "3", name: "Lira"}
//   ];

//   return (
//     <ScrollView>
//     <View style={styles.container}>
//       <Text>List Elements</Text>

//   {/*3. Shfaqim elementet e listes me ane te komponentit FlatList */}    
//     <FlatList
//         data={fruits}
//         renderItem={({item}) => (
//           <View>
//             <Text>{item}</Text>

//             <Button
//               title="Select"
//               onPress={() => alert(item)}
//             />

//           </View>
//         )}
//       />
// {/*Shfaqja Horizontale e elementeve te listes */}
//       <FlatList
//         data={fruits} /*Matrica nga i merr elementet e listes*/
//         horizontal /*Shfaqja ne forme horizontale e elementeve te listes */
//         renderItem={({item}) => <Text> {item} </Text>} /*Shfaqja e qdo elementi te listes */
//       />

//       <View>

//       <FlatList
//         data={students}
//         keyExtractor={(item) => item.id}/*Identifikimi i secilit element me ane te ID */
//         renderItem={({item}) => (
//           <Text>{item.name}</Text>
//         )}
//       />
//     </View>

//     <View>
//         <FlatList
//           data={fruits}
//           renderItem={({item}) => <Text>{item}</Text>}
//           ListHeaderComponent={<Text>Students</Text>}
//           ListFooterComponent={<Text>Finished</Text>}
//           ItemSeparatorComponent={() => (
//             <View style={{height:1, backgroundColor:"gray"}}
//           />)}
//     />
//     </View>

//     <View>
//       <FlatList
//         data={fruits}
//         numColumns={2}
//         renderItem={({item}) => (
//         <View style={{flex:1}}>
//           <Text>{item}</Text>
//         </View>
//         )}
//       />
//     </View>
//     </View>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center"
//   }
// });



























// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// //Duhet te instalohen dhe importohen keto dy
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";

// //Duhet te importohen Screens qe i kemi ndertuar
// import HomeScreen from "./screens/HomeScreen";
// import ProfileScreen from "./screens/ProfileScreen";
// import SettingsScreen from "./screens/SettingsScreen";

// //Duhet te krijohet Stack (objekt) i cila funksionon duke i vendosur screens njera mbi tjetren
// const Stack = createNativeStackNavigator();

// export default function App() {
//   return (

    
//     // <NavigationContainer> {/*Perdorur per te menaxhuar te gjitha faqet */}
//     //   <Stack.Navigator initialRouteName="Home"> {/* Perdoret per te ndertuar Stack dhe faqen kryesore e vendos Home kur te hapet aplikacioni  */} 
//     //     <Stack.Screen name="Home" component={HomeScreen} /> {/*Nje Screen me emrin e komponentit Home Screen dhe emrin Home */}
//     //     <Stack.Screen name="Profile" component={ProfileScreen} />
//     //     <Stack.Screen name="Settings" component={SettingsScreen} />
//     //   </Stack.Navigator>
//     // </NavigationContainer>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
