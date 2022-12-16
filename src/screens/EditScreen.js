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

const EditScreen = ({ navigation }) => {
  const { state, editBlogPost } = useContext(Context);
  const id = navigation.getParam("id");
  const currentBlogPosts = state.find(
    (currentBlogPosts) => currentBlogPosts.id === id
  );

  return (
    <BlogPostForm
      label="Edit"
      onSubmit={(title, content) => {
        editBlogPost(id, title, content, () => navigation.pop());
      }}
      initialValues={{
        title: currentBlogPosts.title,
        content: currentBlogPosts.content,
      }}
    />
  );
};

EditScreen.navigationOptions = () => {
  return {
    headerTitleContainerStyle: {
      left: 30,
    },
  };
};

export default EditScreen;

const styles = StyleSheet.create({});
