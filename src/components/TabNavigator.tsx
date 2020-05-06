import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BiographyScreen from "./BiographyScreen";
import SkillsScreen from "./SkillsScreen";
import AchievementsScreen from "./AchievementsScreen";
import AboutScreen from "./AboutScreen";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: "#e91e63",
        }}
      >
        <Tab.Screen
          name="Biography"
          component={BiographyScreen}
          options={{
            tabBarLabel: "Biography",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="account"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Skills"
          component={SkillsScreen}
          options={{
            tabBarLabel: "Skills",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="wrench" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Achievements"
          component={AchievementsScreen}
          options={{
            tabBarLabel: "Achievements",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="star" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="About"
          component={AboutScreen}
          options={{
            tabBarLabel: "About",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="information"
                color={color}
                size={size}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
