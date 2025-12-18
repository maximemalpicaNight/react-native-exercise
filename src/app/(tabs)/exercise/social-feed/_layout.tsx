import { Tabs } from 'expo-router';
import React from 'react';

export default function SocialFeedLayout() {
    return (
        <Tabs 
            screenOptions={{ 
            headerShown: false,
            tabBarIcon: () => null, 
            tabBarLabelStyle: {
                fontSize: 12,
                fontWeight: 'bold',
            }
            }}
        >
            <Tabs.Screen name="index" />
            <Tabs.Screen name="search" />
            <Tabs.Screen name="profile" options={{title: 'Profile'}}/>
        </Tabs>
    )
}
