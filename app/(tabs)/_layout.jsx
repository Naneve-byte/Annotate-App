/* eslint-disable react/prop-types */
import { Image, View } from 'react-native';
import React from 'react';

import { Tabs } from 'expo-router';

import { icons } from "../../constants";

const TabIcon = ({ icon, color, name, focused}) => {
    return (
        <View className="items-center justify-center gap-2">
            <Image
                source={icon}
                resizeMode="contain"
                tintColor={color}
                className="w-6 h-6"
            />
            {/**<Text className={`${ focused ? 'font-psemibold' : 'font-pregular'} text-xs`} style={{ color:color }}>
                {name}
            </Text>**/}
        </View>
        
    )
}



const TabsLayout = () => {
    return (
        <>
            <Tabs screenOptions={{
                tabBarShowLabel:false,
                tabBarActiveTintColor: '#bdc5c3 ',
                tabBarInactiveTintColor: '#bdc5c3',
                tabBarStyle: {
                    backgroundColor: '#0c4ee7',
                    borderTopWidth: 1,
                    borderTopColor: '#232533',
                    height: 84,
                }
            }}
            >
                <Tabs.Screen
                name="home"
                options={{
                    title: 'Home',
                    headerShown: false,
                    tabBarIcon: ({ color, focused}) => (
                    <TabIcon 
                    icon={icons.home}
                    color={color}
                    name="Home"
                    focused={focused}
                    />
                    )
            }}
            />

                <Tabs.Screen 
                    name="camera"
                    options={{
                        title: 'Camera',
                        headerShown: false,
                        tabBarIcon: ({ color, focused}) => (
                            <TabIcon 
                                icon={icons.camera}
                                color={color}
                                name="Camera"
                                focused={focused}
                            />
                        )
                    }}
                    />
                <Tabs.Screen 
                    name="video"
                    options={{
                        title: 'Video',
                        headerShown: false,
                        tabBarIcon: ({ color, focused}) => (
                            <TabIcon 
                                icon={icons.video}
                                color={color}
                                name="Video"
                                focused={focused}
                            />
                        )
                    }}
                    />
                <Tabs.Screen 
                    name="gallery"
                    options={{
                        title: 'Gallery',
                        headerShown: false,
                        tabBarIcon: ({ color, focused}) => (
                            <TabIcon 
                                icon={icons.gallery}
                                color={color}
                                name="Gallery"
                                focused={focused}
                            />
                        )
                    }}
                    />
                <Tabs.Screen 
                    name="annotate"
                    options={{
                        title: 'Annotate',
                        headerShown: false,
                        tabBarIcon: ({ color, focused}) => (
                            <TabIcon 
                                icon={icons.annote}
                                color={color}
                                name="Annotate"
                                focused={focused}
                            />
                        )
                    }}
                    />

               

                    
        </Tabs>
        </>
        )
    }
    
export default TabsLayout
    
