import React from 'react';
import { TransitionPresets } from '@react-navigation/stack';
import { StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import headerBackground from './headerBackground';

import IconButton from '../Components/Buttons/IconButton';
import { icons } from '../assets/images';
export const getNavigationOptions = (props) => {
  var activeRouteName = props.route.state
    ? props.route.state.routes[props.route.state.index].name
    : props.route.name;
  return {
    ...defaultOptions(activeRouteName, props.navigation),
    ...TransitionPresets.SlideFromRightIOS,
    headerShown: shouldHeaderBeShown(activeRouteName),


    headerTitle: getTitle(activeRouteName),
    headerBackground: headerBackground,
  };
};
export const setStatusBar = (activeRouteName, settings) => {
  StatusBar.setBackgroundColor('rgba(255,255,255,0.13)', true);
  StatusBar.setTranslucent(true);
  StatusBar.setBarStyle('light-content', true);
};
export const shouldHeaderBeShown = (activeRouteName) => {

  console.log('activeRouteName', activeRouteName)

  setStatusBar(activeRouteName);
  switch (activeRouteName) {
    case 'ApprovedDocuments':
    case 'Dashboard':
    case 'EmployeeProfile':
    case 'MenuScreen':
    case 'BookedOrders':
    case 'EmployeeEmails':
    case 'BuyersWiseExport':
    case 'ChangePasswordScreen':
    case 'CountryWiseExport':
    case 'OutstandingPurchasingOrders':
    case 'Grey':
    case 'GreyFabricOutStanding':
    case 'GreyFabricInProcess':
    case 'GreyFabricStkInHnd':
    case 'StockInHand':
    case 'DailyProduction':
    case 'PurchasingOrders':
    case 'ProductionSummary':
    case 'InspectionReport':
    case 'InspectionSummary':
    case 'ViewReports':
      return true;
    default:
      return false;
  }
};
export const getTitle = (activeRouteName) => {

  switch (activeRouteName) {
    case 'ApprovedDocuments':
      return 'Approved Documents';

    case 'Dashboard':
      return 'Dashboard';

    case 'BookedOrders':
      return 'Booked Orders';

    case 'OutstandingPurchasingOrders':
      return 'Outstanding Purchase Order';

    case 'CountryWiseExport':
      return 'Country Wise Export';
    
    case 'Grey':
      return 'Greigh';
  
    case 'GreyFabricInProcess':
        return 'Greigh Fabric In Process';
  
    case 'GreyFabricOutStanding':
      return 'Greigh Fabric Out Standing'

    case 'GreyFabricStkInHnd':
      return 'Greigh Fabric Stock In Hand'
    case 'BuyersWiseExport':
      return 'Buyer Wise Export';

    case 'DailyProduction':
      return 'Daily Production';
    case 'ProductionSummary':
      return 'Production Summary';

    case 'InspectionSummary':
      return 'Inspection Summary'

    case 'InspectionReport':
      return 'Inspection Report';
    case 'PaymentDetail':
      return 'Payment Detail';

    case 'StreamDetail':
      return 'Stream Detail';

    case 'StockInHand':
      return 'Stock In Hand';

    case 'EmployeeProfile':
      return 'Employee Profile';

    case 'EmployeeEmails':
      return 'Employee Emails';

    case 'MySubscriptionScreen':
      return 'My Subscriptions';

    case 'ChangePasswordScreen':
      return 'Change Password';

    case 'InspectionSummary':
      return 'Inspection Summary';

    case 'PurchasingOrders':
      return 'Purchase Orders';

    case 'ViewReports':
      return 'PDF reports';

    default:
      return 'Menu';
  }
};


export const showHeaderRight = (activeRouteName, navigation, onBackPress) => {
  switch (activeRouteName) {
    case 'HomeScreen': {
      return null;
    }
  }
};

const renderBackButton = (activeRouteName, navigation) => {
  return (
    <IconButton
      style={{}}
      icon={icons.backWhite}
      onPress={() => navigation.pop()}
    />
  );
};
const renderMenuButton = (activeRouteName, navigation) => {
  return null;
};
export const showHeaderLeft = (activeRouteName, navigation, onBackPress) => {
  // return renderBackButton(activeRouteName, navigation);


  console.log('activeRouteName', activeRouteName)


  switch (activeRouteName) {
    case 'EmployeeEmails':
    case 'StockInHand':
    case 'Grey':
    case 'GreyFabricInProcess':
    case 'GreyFabricOutStanding':
    case 'GreyFabricStkInHnd':
    case 'ApprovedDocuments':
    case 'PurchasingOrders':
    case 'OutstandingPurchasingOrders':
    case 'DailyProduction':
    case 'ProductionSummary':
    case 'InspectionReport':
    case 'InspectionSummary':
    case 'BookedOrders':
    case 'ViewReports':
    case 'BuyersWiseExport':
    case 'CountryWiseExport':
      return renderBackButton(activeRouteName, navigation);
    default:
      return null;
  }

  return null;
};
export const defaultOptions = (activeRouteName, navigation) => {
  return {


    ...TransitionPresets.SlideFromRightIOS,
    headerRight: () => showHeaderRight(activeRouteName, navigation),
    headerLeft: () => showHeaderLeft(activeRouteName, navigation),
    headerTitleAlign: 'center',
    headerTitleStyle: styles.defaultHeaderTitleStyle,
    headerTitleContainerStyle: styles.defaultHeaderTitleContainerStyle,
    headerRightContainerStyle: styles.defaultHeaderRightContainerStyle,
    headerLeftContainerStyle: styles.defaultHeaderLeftContainerStyle,
    headerStyle: styles.deafultHeaderStyle,

  };
};
