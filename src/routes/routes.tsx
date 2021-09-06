import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Home} from '../screens/Home';
import {Plant} from '../screens/Plant';

const stackRoutes = createStackNavigator();

export const Routes: React.FC = () => {
    return (
        <stackRoutes.Navigator headerMode="none">
            <stackRoutes.Screen name="Home" component={Home} />
            <stackRoutes.Screen name="Plant" component={Plant} />
        </stackRoutes.Navigator>
    );
};
