import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#383838ff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FF3CAC',
    marginTop: 20,
    marginBottom: 30,
    textAlign: 'center',
  },
  logoContainer: {
    width: 300,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 80,
    marginTop: 100,
  },
  inputContainer: {
    width: 350,
    marginVertical: 1,
    
  },
  checkBoxContainer: {
    marginTop: 10,
    marginBottom: 20,
  },
  sliderContainer: {
    alignItems: 'center',
    marginVertical: 15,
  },
  buttonsContainer: {
    width: '80%',
    marginTop: 10,
  },
checkBoxGroup: {
  width: '80%',        // pai com largura explícita — necessário para porcentagem funcionar
  marginVertical: 10,
  alignItems: 'center',
},
row: {
  flexDirection: 'row',
  justifyContent: 'space-between', // um no começo, outro no fim
  alignItems: 'center',
  width: '100%',                   // **use aspas**: '100%'
  marginBottom: 10,
},
checkboxItem: {
  width: '48%',   // cada item ocupa 48% do row -> ficam um à esquerda e outro à direita
},
});

export default styles;
