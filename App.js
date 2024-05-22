import { StyleSheet,  View } from 'react-native';
import MainNavigation from './view/main/MainNavigation';
import { NavigationContainer } from '@react-navigation/native';

const App=() =>{
  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );
}
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
