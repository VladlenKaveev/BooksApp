import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import BooksScreen from '../books/ui/pages/BooksScreen';
import MyBooksScreen from '../books/ui/pages/MyBooksScreen';
import ProfileScreen from '../books/ui/pages/ProfileScreen';
import SelectedBook from '../books/ui/pages/SelectedBook';
import LoginScreen from '../auth/ui/pages/login';
import LoadingIndicator from '../books/ui/components/LoadingIndicator';
import {checkLogin} from '../auth/store/actions';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  isAuthLoadingSelector,
  isUserLoginSelector,
} from '../auth/store/selectors';
import * as S from './styles';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function Navigation() {
  const dispatch = useDispatch();
  const isAuthLoading: boolean = useSelector(isAuthLoadingSelector);
  const isUserLogin: boolean = useSelector(isUserLoginSelector);
  useEffect(() => {
    dispatch(checkLogin());
  }, [dispatch]);
  if (isAuthLoading) {
    return (
      <S.LoadingContainer>
        <LoadingIndicator />
      </S.LoadingContainer>
    );
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          {!isUserLogin ? (
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
