import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'setimmediate'


import Screen1 from "./screens/Screen1"
import Screen2 from "./screens/Screen2"
import Screen3 from "./screens/Screen3"

const Stack = createNativeStackNavigator({
    initialRouteName: 'Home',
    screens: {
        Home: Screen1,
        s2: Screen2,
    }
});

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="s1"
                    component={Screen1}
                    options={{
                        title: '',
                        headerStyle: {
                            backgroundColor: '#7777dd',
                            boxShadow: 'none',
                            border: 'none',
                        },
                    }} />
                <Stack.Screen name="s2" component={Screen2}  />
                <Stack.Screen name="s3" component={Screen3}  />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
