import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeScreen from "../screens/HomeScreen"

const Stack= createNativeStackNavigator()

export default function Navigation (){
return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="home">
            <Stack.Screen name="home" options={{headerShown: false}} component={HomeScreen} />
        </Stack.Navigator>
    </NavigationContainer>
)
    

}