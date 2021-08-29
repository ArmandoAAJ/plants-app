import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Home } from "../screens/Home";

const stackRoutes = createStackNavigator();

export const Routes: React.FC = () => {
  return (
    <stackRoutes.Navigator headerMode="none">
      <stackRoutes.Screen name="Home" component={Home} />
    </stackRoutes.Navigator>
  );
};
