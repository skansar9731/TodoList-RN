import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";
import Task from "./Components/Task";
import React, {useState} from "react";


export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] =useState ([]);

  const handleAddTask=()=>{
    setTaskItems([...taskItems, task]);
    setTask(null);
  }
  const completeTask = (index) =>{
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }
  return (
    <>
      <View style={styles.container}>
        {/* today's Task */}
        <View style={styles.tasksWrapper}>
          <Text style={styles.sectionTitle}> Today's task</Text>
          <View style={styles.items}>
            {/* this is where the tasks will go! */}
            {
              taskItems.map((item, index)=>{
               return (
                <TouchableOpacity onPress={()=>completeTask(index)}>
                      <Task text={item}/>
                </TouchableOpacity>
               ) 
              })
            }
            {/* <Task text={"Task 1"} />
            <Task text={"Task 2"} /> */}
          </View>
        </View>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} placeholder={"write a task"} value={task} onChangeText={text=>setTask(text)}/>

        <TouchableOpacity onPress={()=> handleAddTask()}>
          <View style={styles.addWrapper}>

            <Text style={styles.addText}> + </Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    borderRadius: 60,
    borderColor: "#c0c0c0",
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 60,
    borderColor: "#c0c0c0",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  addText: {},
});
