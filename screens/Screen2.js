import {Text, View, FlatList} from "react-native";
import {useState} from "react";
import MyButton from "../components/MyButton";

const Screen2 = () => {
    const [people, setPeople] = useState({});
    async function request(){
        let res = await fetch("http://192.168.0.104:3000/getpeople");
        setPeople(await res.json());
    }
    function deletePerson(name){
        fetch("http://192.168.0.104:3000/deleteperson", {
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
    console.log(people);
    return(
        <View>
            <FlatList
            data={people}
            renderItem={({ person }) => <View>
                <Text>{person.name}</Text>
                <Text>{person.password}</Text>
                <MyButton text="Details" onPress={() => navigation.navigate('s3', {person: person})}></MyButton>
                <MyButton text="Delete" onPress={() => Alert.alert("Confirm", "Are you sure you want to delete " + person.name + "? This action cannot be undone", ["OK", "Cancel"])}></MyButton>
            </View>}>
            </FlatList>
        </View>
    )
}

export default Screen2;