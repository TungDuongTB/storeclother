import { StyleSheet,  View } from 'react-native';
import {MainNavigation} from './view/main/MainNavigation';

const App=() =>{
  return (
        <MainNavigation />
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
