import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from '@expo/vector-icons';
import SearchScreen from "./src/screens/SearchScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={{
            headerLeft: () => (
              <Ionicons name="chevron-back" size={24} color="black" style={{ marginLeft: 10 }} />

            ),
            headerStyle: {
              backgroundColor: 'rgb(348,169,81)',
            },
            headerTitle: "Activities & Events",

          }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
