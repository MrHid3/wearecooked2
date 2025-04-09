import {Text, View, FlatList, StyleSheet, Alert} from "react-native";
import {useEffect, useState} from "react";
import MyButton from "../components/MyButton";

const Screen2 = ({navigation}) => {
    let [people, setPeople] = useState({});
    async function request(){
        let res = await fetch("http://192.168.119.114:3000/getpeople");
        setPeople(await res.json());
    }
    function deletePerson(name){
        fetch("http://192.168.119.114:3000/deleteperson", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name
            })
        })
    }
    
    request();

    return(
        <View>
            <FlatList
            data={people}
            renderItem={({ item }) => 
            <View style={styles.container}>
                <Text style={styles.name}>{item.id}: {item.name}</Text>
                <MyButton text="Details" style={styles} onPress={() => navigation.navigate('s3', {person: item})}></MyButton>
                <MyButton text="Delete" style={styles} onPress={() => Alert.alert("Confirm", "Are you sure you want to delete " + item.name + "? This action cannot be undone", [
                    {
                        text: "Cancel"
                    },
                    {text: "OK", 
                        onPress: () => deletePerson(item.name)
                    },
                    ])}></MyButton> */
            </View>}>
            </FlatList>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#7777dd",
        padding: 5,
        borderRadius: 5,
    },
    buttonText: {
        color: "black"
    },
    container: {
        display: "flex",
        flexBasis: "50%",
        flexDirection: "row",
        width: "100%",
        height: 50,
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        margin: 5,
        height: "fitContent"
    },
    name: {
        textAlign: "center",
        flexBasis: "100%",
        padding: 10,
        display: "block"
    }
})

export default Screen2;
