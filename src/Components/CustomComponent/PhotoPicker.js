import {Alert, Button, Image, StyleSheet, View} from "react-native";
import {useState} from "react";
import * as ImagePicker from 'expo-image-picker';
import Theme from "../../theme";


const PhotoPicker = ({onPick}) => {

    const [image, setImage] = useState(null)
    const [photo, requestPhoto] = ImagePicker.useCameraPermissions();
    const [library, requestLibrary] = ImagePicker.useMediaLibraryPermissions();

    const askPerm = async () => {
        await requestPhoto()
        await requestLibrary()
        if (!photo.granted) {
            Alert.alert("You don't allow to use Camera")
            return false
        }
        if (!library.granted) {
            Alert.alert("You don't allow to use Library")
            return false
        }
        return true
    }

    const takePhoto = async () => {
        const permGranted = await askPerm()
        if (!permGranted) {
            return
        }
        let result = await ImagePicker.launchCameraAsync({
            allowsEditing: false,
            aspect: [16, 9],
            quality: 1,
        })
        setImage(result.uri)
        onPick(result.uri)
    }
    const addPhoto = async () => {
        const permGranted = await askPerm()
        if (!permGranted) {
            return
        }
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: false,
            aspect: [16, 9],
            quality: 1,
        })
        setImage(result.uri)
        onPick(result.uri)
    }

    return (
        <View style={styles.container}>
            <View style={styles.buttons}>
                <Button title={'Take Photo'}
                        onPress={takePhoto}/>
                <Button title={'Add Photo'}
                        onPress={addPhoto}/>
            </View>

            { image && <Image source={{uri: image}} style={styles.image}/>}
            { image && <Button title={'Clear'}  onPress={() => setImage(null)} color={Theme.DANGER_COLOR} />}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 10
    },
    buttons: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
    },
    image: {
        width: '100%',
        height: 200,
        marginTop: 10,
        marginBottom: 10
    },
})

export default PhotoPicker