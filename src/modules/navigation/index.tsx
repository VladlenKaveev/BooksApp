import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import BooksScreen from '../books/ui/pages/BooksScreen';
import MyBooksScreen from '../books/ui/pages/MyBooksScreen';
import ProfileScreen from '../books/ui/pages/ProfileScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import SelectedBook from '../books/ui/pages/SelectedBook';
import LoginScreen from '../auth/ui/pages/LoginScreen';
import {useDispatch, useSelector} from 'react-redux';
import {authTokenSelector, isLoadingSelector} from '../auth/store/selectors';
import LoadingIndicator from '../books/ui/components/LoadingIndicator';
import {Container} from 'native-base';
import {StyleSheet} from 'react-native';
import {getToken} from '../auth/store/actions';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function Navigation() {
  const dispatch = useDispatch();
  const isLoading = useSelector(isLoadingSelector);
  const authToken = useSelector(authTokenSelector);
  useEffect(() => {
    dispatch(getToken());
  }, [dispatch]);
  if (isLoading) {
    //setTimeout(() => {},2000)
    return (
      <Container style={styles.loading}>
        <LoadingIndicator />
      </Container>
    );
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          {authToken == null ? (
            <>
              <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{headerShown: false}}
              />
            </>
          ) : (
            <>
              <Stack.Screen
                name="Tabs"
                component={BottomTab}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="SelectedBook"
                component={SelectedBook}
                options={{headerShown: false}}
              />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

function BottomTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Books"
        component={BooksScreen}
        options={{
          tabBarIcon: () => <Icon name="home" size={23} color="#384F7D" />,
        }}
      />
      <Tab.Screen
        name="MyBooks"
        component={MyBooksScreen}
        options={{
          tabBarIcon: () => <Icon name="book" size={23} color="#384F7D" />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: () => (
            <Icon name="user-circle-o" size={23} color="#384F7D" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  loading: {
    justifyContent: 'center',
  },
});

export default Navigation;
