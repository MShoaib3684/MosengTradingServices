import * as React from 'react';
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { StyleSheet } from 'react-native';
import COLORS from '../../consts/color';
import { SafeAreaView } from 'react-native';
import { Image } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';


// export default ({ route }) => {
//     const { item } = route.params;
//     return (
//         <View>
//             <Text></Text>
//         </View>
//     )
// }

const FinalizeOrder = ({ navigation }) => {
    return (
        <SafeAreaView
            style={{ paddingHorizontal: "1%", flex: 1, backgroundColor: '' }}>

            <View style={{ flex: 1, backgroundColor: '' }}>

                <View style={{ flex: 1, backgroundColor: 'white', flexDirection: 'row', alignItems: 'center' }}>
                    <Icon
                        name="widgets"
                        color={COLORS.code}
                        size={30}
                        style={styles.inputIcon}
                    />
                    <Text style={styles.text}> Order # 112343 Completed</Text>
                </View>
                <View style={{ flex: 6, backgroundColor: '', alignItems: 'center', justifyContent: 'center' }}>

                    <Icon
                        name="account-circle"
                        color={COLORS.code}
                        size={100}
                        style={styles.inputIcon}
                    />
                    <Text style={styles.text}> Post Review:</Text>
                    <View style={{ flex: 0.2, flexDirection: 'row', backgroundColor: '' }}>
                        <Icon
                            name="star"
                            color={COLORS.orange}
                            size={40}
                            style={styles.inputIcon}
                        />
                        <Icon
                            name="star"
                            color={COLORS.orange}
                            size={40}
                            style={styles.inputIcon}
                        />
                        <Icon
                            name="star"
                            color={COLORS.orange}
                            size={40}
                            style={styles.inputIcon}
                        />
                        <Icon
                            name="star"
                            color={COLORS.orange}
                            size={40}
                            style={styles.inputIcon}
                        />
                        <Icon
                            name="star"
                            color={COLORS.orange}
                            size={40}
                            style={styles.inputIcon}
                        />
                    </View>
                    <Text style={styles.text}> You Spent:</Text>
                    <Text style={styles.text1}> 500 $</Text>
                </View>
                <View style={{ paddingHorizontal: "1%", flex: 1, backgroundColor: '' }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                        <View style={styles.btnPrimary}>
                            <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 20 }}>
                                Back to Home
                            </Text>
                        </View>
                    </TouchableOpacity>

                </View>
            </View>
        </SafeAreaView>

    )
}
export default FinalizeOrder;
const styles = StyleSheet.create({
    text: {
        marginTop: "1%",
        color: 'black',
        fontSize: 25,
        fontWeight: 'bold',

    },
    text1: {
        marginTop: "1%",
        color: 'gray',
        fontSize: 35,
        fontWeight: 'bold',

    },

    inputIcon: {

        position: 'relative',
        marginLeft: "2%",

    },

    btnPrimary: {

        backgroundColor: COLORS.code,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },


})

