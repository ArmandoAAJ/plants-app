import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Home} from '../screens/Home';
import {Plant} from '../screens/Plant';
import {Cart} from '../screens/Cart';

const stackRoutes = createStackNavigator();

export const Routes: React.FC = () => {
    return (
        <stackRoutes.Navigator headerMode="none">
            <stackRoutes.Screen name="Home" component={Home} />
            <stackRoutes.Screen name="Plant" component={Plant} />
            <stackRoutes.Screen name="Cart" component={Cart} />
        </stackRoutes.Navigator>
    );
};
