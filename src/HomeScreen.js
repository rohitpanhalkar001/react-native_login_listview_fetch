import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    Image,
    ActivityIndicator,
    StatusBar
} from 'react-native'

import Header from '../src/Header';


export default class City extends React.Component {

    constructor() {
        super()
        this.state = {
            dataSource: [],
            isFetching: false
        }
    }


    renderItem = ({ item }) => {
        return (
            <View style={{ flex: 1, flexDirection: 'row', marginBottom: 3 }}>
                <Image style={{ width: 80, height: 80, margin: 5 }}
                    source={{ uri: item.image }} />

                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <Text style={{ fontSize: 18, color: 'green' }}>
                        {item.book_title}
                    </Text>

                    <Text>{item.author}</Text>
                </View>
            </View>

        )
    }

    componentDidMount() {

        this.setState({
            isFetching: true
        })

        const url = 'http://www.json-generator.com/api/json/get/ccLAsEcOSq?indent=1'
        fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                console.warn(responseJson.book_array)
                this.setState({
                    isFetching: false,
                    dataSource: responseJson.book_array
                })
            })
            .catch((error) => {
                console.warn("error is" + error)
            });

    }

    renderSeparator = () => {
        return (

            <View style={{ height: 1, width: '100%', backgroundColor: 'black' }}>
            </View>

        )
    }

    render() {
        return (
            <View style={{ flex: 1 }}>

                <StatusBar
                    backgroundColor="#003366"
                    barStyle="light-content"
                />
                <Header title="HomeScreen" />
                <View style={styles.container}>

                    <FlatList
                        data={this.state.dataSource}
                        renderItem={this.renderItem}
                        keyExtractor={(item, index) => index}
                        ItemSeparatorComponent={this.renderSeparator} />

                    <ActivityIndicator style={styles.activityLoader} size="large" animating={this.state.isFetching}></ActivityIndicator>
                </View>
            </View>


        );
    }

    // onNavigation =()=>{
    //     this.props.navigation.navigate("Screen1");
    //    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        justifyContent: 'center',

    },
    activityLoader: {
        flex: 1,
        backgroundColor: '#ffffff'
    }

})