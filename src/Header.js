import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';


const Header = props => {
    const title = props.title;
    const onNavigation = props.onNavigation;
    return (
        <View>
            <View style={{ height: 50, flexDirection: 'row', backgroundColor: '#0E4C8C' }}>

                {/* <View style={{ width: 40, marginLeft: 5 }}>
                    <TouchableOpacity onPress={onNavigation}>
                        <Icon name={'menu'} size={40} color={'#fff'} />
                    </TouchableOpacity>

                </View> */}
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ margin: 10, fontSize: 20, color: 'white' }}>{title} </Text>
                </View>
            </View>
            <View style={{ borderWidth: 2, borderColor: '#A8BC4C' }} />
        </View>
    );
}

export default Header;