import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      {/* <Drawer screenOptions={{drawerHideStatusBarOnOpen:true,drawerStyle:{paddingTop:40} }}> */}
      <Drawer screenOptions={{drawerStyle:{paddingTop:40} }}>
        <Drawer.Screen name='index' options={
          {drawerLabel:'Home',
        headerTitle:'Home',
        headerTitleAlign:'center'
      // headerStyle:{justifyContent:'center'}
    }
        }/>
        <Drawer.Screen name='profile' options={
          {drawerLabel:'Profile',
        headerTitle:'Profile',
        headerTitleAlign:'center'
      }
        }/>
         <Drawer.Screen name='news' options={
          {drawerLabel:'News',
        headerTitle:'News',
        headerTitleAlign:'center'
      }
        }/>
      </Drawer>
    </GestureHandlerRootView>
  );
}
