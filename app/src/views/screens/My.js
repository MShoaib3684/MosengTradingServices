import * as React from 'react';
import { View, Text, ImageBackground, Pressable } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/color';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native';

const My = ({ navigation }) => {
    return (
        <SafeAreaView
            style={{ paddingHorizontal: "1%", paddingVertical: "1%", flex: 1, backgroundColor: COLORS.white }}>

            <View style={{ flex: 1, backgroundColor: '' }}>
                <View style={{ flex: 0.5, backgroundColor: '', alignItems: 'center', flexDirection: 'row', }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                        <Icon
                            name="arrow-back"
                            color={COLORS.code}
                            size={35}
                            style={styles.inputIcon}
                        />
                    </TouchableOpacity>
                    <View style={{ flex: 0.5, flexDirection: 'row', backgroundColor: '', justifyContent: 'space-between' }}>



                    </View>
                    <Pressable
                        onPress={() => navigation.navigate('EditProfile')}
                    >
                        <Text style={styles.editText}> Edit</Text>
                    </Pressable>
                </View>

                <View style={{ flex: 2, backgroundColor: '', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon
                        name="account-circle"
                        color={COLORS.code}
                        size={100}
                        style={styles.inputIcon1}
                    />
                    <Text style={styles.text}> John Deo</Text>
                    <Text style={styles.text1}> New Yourk City</Text>
                </View>

                <View style={{ flex: 1, backgroundColor: '', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon
                        name="emoji-events"
                        color={{}}
                        size={35}
                        style={styles.inputIcon1}
                    />
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}> My spend</Text>
                    <Text style={{ fontSize: 16, color: 'black' }}> 500$</Text>
                </View>

                <View style={{ flex: 0.5, backgroundColor: '', flexDirection: 'row' }}>

                    <View style={{ flex: 0.1, backgroundColor: '', justifyContent: 'center' }}>
                        <Icon
                            name="payment"
                            color={COLORS.light}
                            size={35}
                            style={styles.inputIcon} />
                    </View>
                    <View style={{ flex: 0.9, backgroundColor: '', justifyContent: 'center' }}>
                        <TouchableOpacity onPress={() => navigation.navigate('ManagePayment')}>
                            <Text style={{ fontSize: 20, color: 'black', fontWeight: '500' }} > Manage Payment Options</Text>
                        </TouchableOpacity>

                    </View>

                    <View style={{ flex: 0.1, backgroundColor: '', justifyContent: 'center' }}>
                        <Icon
                            name="navigate-next"
                            color={COLORS.light}
                            size={40}
                            style={{ position: 'relative', }}
                        />
                    </View>


                </View>

                <View style={{ flex: 0.5, backgroundColor: 'white', flexDirection: 'row' }}>

                    <View style={{ flex: 0.1, backgroundColor: '', justifyContent: 'center' }}>
                        <Icon
                            name="power-settings-new"
                            color={COLORS.light}
                            size={35}
                            style={styles.inputIcon} />
                    </View>
                    <View style={{ flex: 0.9, backgroundColor: '', justifyContent: 'center' }}>
                        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                            <Text style={{ fontSize: 20, color: 'black', fontWeight: '500' }} > Sign Out</Text>
                        </TouchableOpacity>

                    </View>

                    <View style={{ flex: 0.1, backgroundColor: '', justifyContent: 'center' }}>
                        <Icon
                            name="navigate-next"
                            color={COLORS.light}
                            size={40}
                            style={{ position: 'relative', }}
                        />
                    </View>

                </View>
                <View style={{ flex: 1, backgroundColor: '' }}>

                </View>


            </View>
        </SafeAreaView>

    )
}
export default My;

const styles = StyleSheet.create({
    textBox: {
        color: '#fff',
        backgroundColor: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        borderColor: '#fff',
        borderWidth: 2,
        paddingLeft: "10%",
        marginLeft: "-1%",
    },

    text: {
        color: 'black',
        fontSize: 30,
        fontWeight: 'bold',
    },
    text1: {
        color: 'black',
        fontSize: 20,
    },
    editText: {
        color: COLORS.code,
        fontSize: 25,
        fontWeight: 'bold',
        paddingLeft: "75%",
        alignSelf: 'center',
    },
    inputIcon: {
        position: 'relative',
        alignSelf: 'flex-start',
        marginTop: "4%",

    },
    inputIcon1: {
        position: 'relative',


    },
    inputIcon2: {
        position: 'relative',
        alignSelf: 'flex-start',

    },

})