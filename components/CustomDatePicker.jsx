import { useState } from 'react';
import DatePicker from 'react-native-neat-date-picker';
import CustomButton from './CustomButton';
import { Text, View, Modal } from 'react-native';
import formatDate from '../utils/fomatDate';
import { Calendar } from 'lucide-react-native';

const CustomDatePicker = ({onPickDate, initialDate}) => {
    const [showDatePickerSingle, setShowDatePickerSingle] = useState(false);
    const [date, setDate] = useState(initialDate || new Date());

    const openDatePickerSingle = () => setShowDatePickerSingle(true);

    const onCancelSingle = () => {
        setShowDatePickerSingle(false);
    };

    const onConfirmSingle = (output) => {
        setShowDatePickerSingle(false);
        onPickDate(output.dateString);
        setDate(output.dateString);
    };

    return (
        < >
            <CustomButton
              title={formatDate(date)}
              containerStyles="py-0 px-0 pr-8 bg-transparent border-r-2 rounded-none border-slate-300 "
              textStyles="text-slate-900 text-sm mx-1"
              icon={<Calendar size={20} className="text-slate-900" />}
              handlePress={openDatePickerSingle}
            />
            <Modal
                animationType="fade"
                transparent={true}
                visible={showDatePickerSingle}
                onRequestClose={onCancelSingle}
                statusBarTranslucent
            >
                <View>
                    <DatePicker
                        isVisible={true}
                        mode={'single'}
                        onCancel={onCancelSingle}
                        onConfirm={onConfirmSingle}
                        colorOptions={{ changeYearModalColor: '#EF497A', headerColor: '#EF497A', weekDaysColor: '#EF497A', selectedDateBackgroundColor: '#EF497A', confirmButtonColor: '#EF497A' }}
                    />
                </View>
            </Modal>
        </>
    );
};


export default CustomDatePicker;
