import React, {useEffect, useRef} from 'react';
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
import {useTranslation} from 'react-i18next';
import WelcomeScreen from '../welcome/ui/pages/WelcomeScreen';
import {hasOnboardedSelector} from '../welcome/store/selectors';
import {checkOnboarded} from '../welcome/store/actions';
import analytics from '../analytics/domain/firebase';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function Navigation() {
  const dispatch = useDispatch();
  const navigationRef = useRef();
  const routeNameRef = useRef();
  const hasOnboarded: boolean = useSelector(hasOnboardedSelector);
  const isAuthLoading: boolean = useSelector(isAuthLoadingSelector);
  const isUserLogin: boolean = useSelector(isUserLoginSelector);
  const handleAnalytic = async () => {
    const previousRouteName = routeNameRef.current;
    const currentRouteName = navigationRef.current.getCurrentRoute().name;
    if (previousRouteName !== currentRouteName) {
      await analytics().logScreenView({
        screen_name: currentRouteName,
        screen_class: currentRouteName,
      });
    }
  };
  useEffect(() => {
    dispatch(checkOnboarded());
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
      <NavigationContainer
        ref={navigationRef}
        onReady={() =>
          (routeNameRef.current = navigationRef.current.getCurrentRoute().name)
        }
        onStateChange={handleAnalytic}>
        <Stack.Navigator>
          {!hasOnboarded ? (
            <Stack.Screen
              name="Welcome"
              component={WelcomeScreen}
              options={{headerShown: false}}
            />
          ) : !isUserLogin ? (
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{headerShown: false}}
            />
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
  const {t} = useTranslation('Pages');
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={t('Books')}
        component={BooksScreen}
        options={{
          tabBarIcon: () => <Icon name="home" size={23} color="#384F7D" />,
        }}
      />
      <Tab.Screen
        name={t('MyBooks')}
        component={MyBooksScreen}
        options={{
          tabBarIcon: () => <Icon name="book" size={23} color="#384F7D" />,
        }}
      />
      <Tab.Screen
        name={t('Profile')}
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
