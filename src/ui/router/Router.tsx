import React from 'react';
import  { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationTheme } from 'ui/themes/app-theme';
import Index from 'pages';
import EncontrarDiaristas from 'pages/encontrar-diarista';
import Logo from '@assets/img/logos/e-diaristas-logo.png';
import { Image } from 'react-native';

const Stack = createStackNavigator();

export type RootStackParamList = {
    Index: undefined;
    EncontrarDiaristas: undefined;
}

const Router: React.FC = () => {
    return(
        <NavigationContainer theme={NavigationTheme}>
            <Stack.Navigator>
            
            <Stack.Screen 
                    name={'Index'} 
                    component={Index}
                    options={{
                        headerTitleAlign: 'center',
                        headerTitle: () => <Image style={{width: 150, height: 50, resizeMode: 'contain',}} source={Logo} />,
                    }} 
                />
                <Stack.Screen name={'EncontrarDiaristas'} component={EncontrarDiaristas} />
                
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Router;