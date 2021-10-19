import React, { useState } from 'react';
import { Text, View } from 'react-native';
import PageTitle from 'ui/components/data-display/PageTitle/PageTitle';
import TextInput from 'ui/components/inputs/TextInput/TextInput';
import  { TextInputMask } from 'react-native-masked-text'
import Button from 'ui/components/inputs/Button/Button';
import UserInformation from 'ui/components/data-display/UserInformation/UserInformation';

const EncontrarDiaristas: React.FC = () => {
    const [cep, setCep] = useState('');

    return (
        <View style={{paddingLeft: 7, paddingRight: 7,}}>
            <PageTitle
                title={'Conheça os profissionais'}
                subtitle={'Preencha seu endereço e veja todos os profissionais da sua localidade'}
            />
            
            <TextInputMask
                value={cep}
                onChangeText={setCep}
                type={'custom'}
                options={{
                    mask: '99.999-999'
                }}
                customTextInput={TextInput}
                customTextInputProps={{ 
                    label:'Digite seu CEP'
                }}
            />

            

            <Button mode={'contained'} style={{ marginTop: 32}} onPress={() => {}} >Buscar</Button>

            <UserInformation 
                name={'Antonio Vitor'}
                rating={4}
                picture={'https://github.com/tonipinguim.png'}
                description={'Espirito Santo'}
            />

        </View>
    );
};

export default EncontrarDiaristas;