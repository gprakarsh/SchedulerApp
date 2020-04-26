import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import { useLocation, Link } from 'react-router-native';

export default function CreateTask() {
    const isActive = (routeName) => {
        const currentLocation = useLocation();
        if (routeName == currentLocation.pathname) {
            return 'white'
        }
        else {
            return 'rgb(100,100,100)'
        }
    }
    return (
        <View style={styles.container}>
            <Link to='/' component={TouchableOpacity} style={styles.iconCon}>
                    <MaterialIcons size={35} color={isActive('/')} name='home' />
                    <Text style={{ color: `${isActive('/')}`, fontSize:'12' }}>Home</Text>
            </Link>
            <Link to='/createTask' component={TouchableOpacity} style={styles.iconCon}>
                    <AntDesign size={32} color={isActive('/createTask')} name='plussquare' />
                    <Text style={{ color: `${isActive('/createTask')}`, fontSize:'12' }}>Create New</Text>
            </Link>
            <Link to='/getTask' component={TouchableOpacity} style={styles.iconCon}>
                    <MaterialIcons size={35} color={isActive('/getTask')} name='explore' />
                    <Text style={{ color: `${isActive('/getTask')}`, fontSize:'12' }}>Explore</Text>
            </Link>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        bottom: 0,
        width: '100%',
        height: '9%',
        backgroundColor: 'rgba(100,100,100,0.2)',
        flexDirection: 'row',
        // paddingHorizontal:'12%',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    iconCon: {
        justifyContent: 'center',
        alignItems: 'center',
    }
})