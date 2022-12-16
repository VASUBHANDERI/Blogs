import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React, { useState } from "react";

const BlogPostForm = ({ onSubmit, initialValues , label}) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);

  return (
    <View style={{ marginTop: 10 }}>
      <Text style={styles.label}>{label} Title :</Text>
      <TextInput
        value={title}
        style={styles.titleInput}
        cursorColor="gray"
        onChangeText={(text) => setTitle(text)}
      />
      <Text style={styles.label}>{label} Content :</Text>
      <TextInput
        value={content}
        multiline={true}
        style={styles.contentInput}
        textAlignVertical="top"
        cursorColor="gray"
        onChangeText={(text) => setContent(text)}
      />
      <TouchableOpacity onPress={() => onSubmit(title, content)}>
        <View style={styles.ButtonView}>
          <Text style={styles.ButtonText}>Save</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

BlogPostForm.defaultProps = {
  initialValues: {
    title: "",
    content: "",
  },
};

export default BlogPostForm;

const styles = StyleSheet.create({
  label: {
    fontSize: 20,
    marginHorizontal: 5,
    marginBottom: 10,
  },
  titleInput: {
    marginHorizontal: 5,
    marginBottom: 15,
    padding: 5,
    borderColor: "black",
    borderRadius: 5,
    borderWidth: 1,
    fontSize: 18,
  },
  contentInput: {
    marginHorizontal: 5,
    marginBottom: 10,
    padding: 5,
    borderColor: "black",
    borderRadius: 5,
    borderWidth: 1,
    fontSize: 18,
    height: Dimensions.get("window").height * 0.23,
    backgroundColor:'#ffeeff'
  },
  ButtonView: {
    padding: 5,
    backgroundColor: "#03b0f7",
    alignSelf: "center",
    alignItems:"center",
    borderRadius: 5,
    paddingHorizontal: 15,
    width: Dimensions.get("window").width * 0.35,
  },
  ButtonText: {
    fontSize: 25,
    color: "white",
  },
});
