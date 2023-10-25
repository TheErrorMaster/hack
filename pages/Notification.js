import { Text, View, TouchableOpacity } from 'react-native';
import { ScrollView, Image } from '@gluestack-ui/themed'
import { appointments } from '../utils';
import { SafeAreaView } from 'react-native-safe-area-context';

export const NotificationPage = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Text style={{ fontSize: 30, paddingLeft: 10, textAlign: 'center' }}>Appointments</Text>
            <ScrollView style={{ margin: 10 }} refreshControl={() => console.log("hello")}>
                {
                    appointments?.map((x,i) => {
                        return (
                            <View key={i} style={{ flex: 1, borderRadius: 5, padding: 10, marginTop: 10, backgroundColor: 'white', shadowColor: '#171717', shadowOffset: { width: -2, height: 4 }, shadowOpacity: 0.2 }}>
                                <TouchableOpacity onPress={() => { console.log("hello") }}>
                                    <View style={{ flexDirection: 'row', height: 50, alignItems: 'center' }}>
                                        <Image source={{ uri: x?.image }} size="xs" style={{ borderRadius: 50 }} alt={"image goes here"} />
                                        <Text style={{ fontSize: 20, paddingLeft: 10 }}>{x?.name}</Text>
                                    </View>
                                    <View style={{ flex: 1, }}>
                                        {(x?.city !== undefined) ? (<Text style={{ fontSize: 15 }}>Location: {x?.street}, {x?.city}, {x?.state}</Text>) : null}
                                        <Text style={{ fontSize: 15 }}>Specialties: {x?.specialties.join(", ")}</Text>
                                        <Text style={{ fontSize: 15 }}>Appointment: {x?.appoitment}</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        )
                    })
                }
            </ScrollView>
        </SafeAreaView>
    );
}