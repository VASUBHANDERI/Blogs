import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { Context } from "../context/BlogContext";
import { Feather, Ionicons, EvilIcons } from "@expo/vector-icons";

const ShowScreen = ({ navigation }) => {
  const id = navigation.getParam("id");
  const { state } = useContext(Context);
  const currentBlogPosts = state.find(
    (currentBlogPosts) => currentBlogPosts.id === id
  );
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{currentBlogPosts.title}</Text>
      <View>
        <Text style={styles.content}>{currentBlogPosts.content}</Text>
      </View>
    </View>
  );
};

ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Edit", { id: navigation.getParam("id") })
        }
      >
        <Ionicons name="pencil" style={styles.plus} />
      </TouchableOpacity>
    ),
    headerTitleContainerStyle: {
      left: 35,
    },
  };
};

export default ShowScreen;

const styles = StyleSheet.create({
  plus: {
    fontSize: 30,
    color: "white",
  },
  title: { 
    fontSize: 30,
    fontWeight:'bold', 
    paddingLeft:5,
    marginBottom:10,
  },
  content: {
    fontSize:18,
    borderWidth:1,
    borderColor:'gray',
    padding:5,
    borderRadius:5,
    backgroundColor:"#ffeeff"
  },
  container: {
    padding:10,
    backgroundColor: 'white',
    flex:1,

  },
});
