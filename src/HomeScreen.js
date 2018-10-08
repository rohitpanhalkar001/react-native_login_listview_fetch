import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    Image,
    ActivityIndicator
} from 'react-native'

export default class City extends React.Component {

    constructor() {
        super()
        this.state = {
            dataSource: []

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
        const url = 'http://www.json-generator.com/api/json/get/ccLAsEcOSq?indent=1'
        fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                console.warn(responseJson.book_array)
                this.setState({
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
            <View style={styles.container}>
                <FlatList
                    data={this.state.dataSource}
                    renderItem={this.renderItem}
                    keyExtractor={(item, index) => index}
                    ItemSeparatorComponent={this.renderSeparator} />

                {/* <ActivityIndicator animating={this.state.isFetching}></ActivityIndicator> */}
            </View>


        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF'
    }
})