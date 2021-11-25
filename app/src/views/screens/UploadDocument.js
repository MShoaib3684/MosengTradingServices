import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Image, TouchableOpacity, StyleSheet, ImageBackground, ImageBackgroundBase } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/color';
import STYLES from '../../styles';
import { ScrollView } from 'react-native-gesture-handler';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import ImagePicker from 'react-native-image-crop-picker';

const UploadDocument = ({ navigation }) => {
    const [image, setImage] = useState('C:\Users\Muhammad Shoaib(FYP)\Desktop\MosengTradingServices\app\src\assets\preview.png');
    const takePhotoFromCamera = () => {
        ImagePicker.openCamera({
            compressImageMaxWidth: 300,
            compressImageMaxHeight: 400,
            cropping: true,
            compressImageQuality: 0.7,
        }).then(image => {
            console.log(image);
            setImage(image.path);
        });
    }
    const chooseFromLibrary = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true,
            compressImageQuality: 0.7,
        }).then(image => {
            console.log(image);
            setImage(image.path);
        });
    }

    return (
        <SafeAreaView
            style={{ paddingHorizontal: "2%", flex: 1, backgroundColor: COLORS.white }}>

            <View style={{ flex: 0.1, marginTop: 50, alignItems: 'center', backgroundColor: 'white' }}>
                <Text style={{ fontSize: 27, fontWeight: 'bold', color: COLORS.dark }}>
                    Upload Document
                </Text>

            </View>

            <View style={{ flex: 0.1, backgroundColor: 'white' }}>
                <Text style={{ fontSize: 16, fontWeight: '', color: COLORS.light, alignSelf: 'center', marginTop: "4%" }}>
                    We need to Verify your identity
                </Text>
            </View>

            <View style={{ flex: 0.3, backgroundColor: 'white', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>
                <View style={{}}>
                    <TouchableOpacity onPress={takePhotoFromCamera}>
                        <View style={styles.imagewrapper}>
                            <Icon
                                name="photo-camera"
                                color={COLORS.code}
                                size={50}
                                style={styles.inputIcon} />
                        </View>
                    </TouchableOpacity>
                </View>

                {/* <View style={{ flex: 0.5, backgroundColor: 'blue' }}>
                </View> */}

                <View style={{}}>
                    <TouchableOpacity onPress={chooseFromLibrary}>
                        <View style={styles.imagewrapper}>
                            <Icon
                                name="file-upload"
                                color={COLORS.code}
                                size={50}
                                style={styles.inputIcon} />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ flex: 1, backgroundColor: '', }}>
                <View style={{ flex: 1, backgroundColor: 'white', padding: 5, }}>

                    <View style={styles.imagewrapper1}>
                        <ImageBackground
                            source={{
                                uri: image,
                            }}
                            style={{ height: 200, width: 200 }}
                            imageStyle={{ borderRadius: 10 }}
                        />
                        {/* <Icon
                            name="remove-red-eye"
                            color={COLORS.light}
                            size={50}
                            style={styles.inputIcon} />
                        <Text style={{ fontSize: 20, fontWeight: "500" }}>Preview Will be Here</Text> */}

                    </View>
                </View>
            </View>

            <View style={{ flex: 0.2, backgroundColor: '' }}>
                <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                    <View style={{ flex: 1, }}>
                        <View style={STYLES.btnPrimary}>
                            <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 18 }}>
                                Submit
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>


        </SafeAreaView>
    );
};

export default UploadDocument;


const styles = StyleSheet.create({
    imagewrapper: {
        // width: "100%",
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 6,
        paddingHorizontal: 30,
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: COLORS.code,
    },
    imagewrapper1: {
        paddingVertical: 50,
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: COLORS.light,

    },
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
        // flexDirection: 'row'

    },
    inputIcon1: {
        position: 'relative',


    },
    inputIcon2: {
        position: 'relative',
        alignSelf: 'flex-start',

    },

})