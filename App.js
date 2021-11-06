import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import reproduzir from "./scream/reproduzir";
import pastas from "./scream/pastas";
import musicas from "./scream/musicas";
import { setStatusBarHidden } from "expo-status-bar";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Pastas">
                <Stack.Screen name="Reproduzir"
                    component={reproduzir}
                    options={{
                        title: '',
                        headerStyle: {
                            backgroundColor: '#0D1A25'
                        },
                        headerTintColor: '#00C2FF',
                    }} />
                <Stack.Screen
                    name="Pastas"
                    component={pastas}
                    options={{
                        title: 'Pastas',
                        headerStyle: {
                            backgroundColor: '#0D1A25',
                        },
                        headerTintColor: '#00C2FF',
                    }} />
                <Stack.Screen name="Musicas"
                    component={musicas}
                    options={{
                        title: '',
                        headerStyle: {
                            backgroundColor: '#0D1A25',
                        },
                        headerTintColor: '#00C2FF',
                    }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}