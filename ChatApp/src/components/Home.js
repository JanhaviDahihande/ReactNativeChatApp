import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from 'react-native';

import {
    Actions
  } from 'react-native-router-flux';

class Home extends React.Component {
    state = {
        username: '',
    };

    render() {
        return (
            <View>
                <Text style={styles.title}>
                    Username
                </Text>
                <TextInput
                    style={styles.textInput}
                    placeholder='Enter your name here'
                    onChangeText= {(text) => {
                        this.setState({
                            username: text,
                        });
                    }}
                    value= {this.state.username}
                />
                <TouchableOpacity
                    onPress={() => {
                        Actions.chat({
                            username: this.state.username,
                        });
                    }}
                >
                    <Text>
                        Next
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    title: {
        marginTop: 20,
        marginLeft: 20,
        fontSize: 20
    },
    textInput: {
        height: 40,
        borderWidth: 2,
        borderColor: 'black',
        margin: 20
    }
});
export default Home;