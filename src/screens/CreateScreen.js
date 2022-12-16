import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React, { useState, useContext } from "react";
import { Context } from "../context/BlogContext";
import BlogPostForm from "./../components/BlogPostform";

const CreateScreen = ({ navigation }) => {
  const { addBlogPost } = useContext(Context);

  return (
    <BlogPostForm
      label="Enter"
      onSubmit={(title, content) => {
        addBlogPost(title, content, () => navigation.navigate("Index"));
      }}
    />
  );
};

CreateScreen.navigationOptions = () => {
  return {
    headerTitleContainerStyle: {
      left: 30,
    },
  };
};

export default CreateScreen;

const styles = StyleSheet.create({});
