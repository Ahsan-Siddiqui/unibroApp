import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import {icons} from '../../assets/images';
import MenuButton from '../../Components/Buttons/MenuButton';

import { connect } from 'react-redux';
import actions from './../../redux/actions/index';
import { showToast } from './../../Utils/index';
import { vw } from '../../Utils/Units';
class MenuScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      showGarmentsPurchaseSubmenus:false,
      showProductionSubmenus:false,
      showExportSubmenus:false,
      showFabricInventorySubmenus:false,
    };
  }


  _onLogout = () =>{
    this.props.logOut((success) => {
      showToast("User Logout Successfully")
    

  }, (error) => { 

      showToast(error)
      this.close()
  })

  } 


  render() {
    return (
      <View style={styles.container}>
         {this.props.apcontrol != 1 ?  <MenuButton
          onPress={() => this.props.navigation.navigate('ApprovedDocuments')}
          title="ApprovedDocuments"
          icon={icons.right_arrow}
        /> : null}
        <MenuButton
          onPress={() => this.props.navigation.navigate('EmployeeEmails')}
          title="Employee Email"
          icon={icons.right_arrow}
        />
        {/* <MenuButton
          title="Employee Profile"
          // onPress={() => this.props.navigation.navigate('StreamsScreen')}
          icon={icons.streams}
        /> */}
        <MenuButton
          title="Stock In Hand"
          icon={icons.right_arrow}
          onPress={() => this.props.navigation.navigate('StockInHand')}
        />
       
        <MenuButton
          title="Fabric Inventory"
          // onPress={() => this.props.navigation.navigate('ContactUsScreen')}
          onPress={() =>this.setState({showFabricInventorySubmenus:!this.state.showFabricInventorySubmenus})}
          icon={this.state.showFabricInventorySubmenus ? icons.arrow_down :icons.right_arrow}
        />
        {this.state.showFabricInventorySubmenus ?
         <MenuButton
         title="- Greigh"
         style={{marginLeft:5*vw, width: 75 * vw,}}
         onPress={() => this.props.navigation.navigate('Grey')}
         icon={icons.right_arrow}
        />:null }
       {this.state.showFabricInventorySubmenus ?
         <MenuButton
          title="- Fabric in Process"
          style={{marginLeft:5*vw, width: 75 * vw,}}
          onPress={() => this.props.navigation.navigate('GreyFabricInProcess')}
          icon={icons.right_arrow}
        /> :null }
        {this.state.showFabricInventorySubmenus ?
         <MenuButton
          title="- Greigh Fabric Out Standing"
          style={{marginLeft:5*vw, width: 75 * vw,}}
          onPress={() => this.props.navigation.navigate('GreyFabricOutStanding')}
          icon={icons.right_arrow}
        /> :null }
        {this.state.showFabricInventorySubmenus ?
          <MenuButton
          title="- Greigh Fabric Stock In Hand"
          style={{marginLeft:5*vw, width: 75 * vw,}}
          onPress={() => this.props.navigation.navigate('GreyFabricStkInHnd')}
          icon={icons.right_arrow}
          />:null }
        <MenuButton
          title="Garments Purchase Stock"
          // onPress={() => this.props.navigation.navigate('ContactUsScreen')}
          onPress={() =>this.setState({showGarmentsPurchaseSubmenus:!this.state.showGarmentsPurchaseSubmenus})}
          icon={this.state.showGarmentsPurchaseSubmenus ? icons.arrow_down :icons.right_arrow}
        />

{this.state.showGarmentsPurchaseSubmenus ?
         <MenuButton
          title="- Purchase Order"
          style={{marginLeft:5*vw, width: 75 * vw,}}
          onPress={() => this.props.navigation.navigate('PurchasingOrders')}
          icon={icons.right_arrow}
        /> :null }

{this.state.showGarmentsPurchaseSubmenus ?
         <MenuButton
          title="- Outstanding PO"
          style={{marginLeft:5*vw, width: 75 * vw,}}
          onPress={() => this.props.navigation.navigate('OutstandingPurchasingOrders')}
          icon={icons.right_arrow}
        /> :null }




        <MenuButton
          title="Production"
          onPress={() =>this.setState({showProductionSubmenus:!this.state.showProductionSubmenus})}
          icon={this.state.showProductionSubmenus ?icons.arrow_down : icons.right_arrow}
        />

{this.state.showProductionSubmenus ?
         <MenuButton
          title="- Daily Production"
          style={{marginLeft:5*vw, width: 75 * vw,}}
          onPress={() => this.props.navigation.navigate('DailyProduction')}
          icon={icons.right_arrow}
        /> :null }

{this.state.showProductionSubmenus ?
         <MenuButton
          title="- Production Summary"
          style={{marginLeft:5*vw, width: 75 * vw,}}
          onPress={() => this.props.navigation.navigate('ProductionSummary')}
          icon={icons.right_arrow}
        /> :null }

        
{this.state.showProductionSubmenus ?
         <MenuButton
          title="- Inspection Report"
          style={{marginLeft:5*vw, width: 75 * vw,}}
          onPress={() => this.props.navigation.navigate('InspectionReport')}
          icon={icons.right_arrow}
        /> :null }

{this.state.showProductionSubmenus ?
         <MenuButton
          title="- Inspection Summary"
          style={{marginLeft:5*vw, width: 75 * vw,}}
          onPress={() => this.props.navigation.navigate('InspectionSummary')}
          icon={icons.right_arrow}
        /> :null }

        
{this.state.showProductionSubmenus ?
         <MenuButton
          title="- Running Orders"
          style={{marginLeft:5*vw, width: 75 * vw,}}
          onPress={() => this.props.navigation.navigate('PurchasingOrders')}
          icon={icons.right_arrow}
        /> :null }




<MenuButton
          title="Export"
          onPress={() =>this.setState({showExportSubmenus:!this.state.showExportSubmenus})}
          icon={this.state.showExportSubmenus ? icons.arrow_down:  icons.right_arrow}
        />


        
{this.state.showExportSubmenus ?
         <MenuButton
          title="- Booked Orders"
          style={{marginLeft:5*vw, width: 75 * vw,}}
          onPress={() => this.props.navigation.navigate('BookedOrders')}
          icon={icons.right_arrow}
        /> :null }

        
{this.state.showExportSubmenus ?
         <MenuButton
          title="- Buyers wise Export"
          style={{marginLeft:5*vw, width: 75 * vw,}}
          onPress={() => this.props.navigation.navigate('BuyersWiseExport')}
          icon={icons.right_arrow}
        /> :null }

{this.state.showExportSubmenus ?
         <MenuButton
          title="- Country wise Export"
          style={{marginLeft:5*vw, width: 75 * vw,}}
          onPress={() => this.props.navigation.navigate('CountryWiseExport')}
          icon={icons.right_arrow}
        /> :null }





        <MenuButton
          onPress={() => this._onLogout()}
          title="Logout"
          icon={icons.right_arrow}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {


  return {
      data: state.GeneralReducer.homeData,
      apcontrol: state.GeneralReducer.apcontrol,

  };
};

const mapDispatchToProps = dispatch => {
  return {
      logOut: (success, error) =>
          dispatch(actions.logOut(success, error)),

  };
};


export default connect(mapStateToProps,
  mapDispatchToProps)(MenuScreen)
