import React from 'react';
import { FlatList, View, ActivityIndicator } from 'react-native';
import styles from './styles';
import GreyFabOutStandingCard from '../../Components/Sections/GreyFabricOutStandingCards';
import { connect } from 'react-redux';
import actions from '../../redux/actions/index';
import { vh, vw } from '../../Utils/Units';
import MainInput from '../../Components/Input/MainInput';

class GreyFabOutStanding extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      keyword: '',
    };
  }

  componentDidMount() {
    this.props.navigation.addListener('focus', this._getGreyFabOutStanding);
  }

  componentWillUnmount() {
    this.props.navigation.removeListener('focus');
  }

  _getGreyFabOutStanding = () => {
    this.props.getGreyFabOutStanding(
      this.state.keyword,
      (success) => {
        if (success) {
          this.setState({
            refreshing: false,
          });
        }
      },
      (error) => {
        this.setState({
          refreshing: false,
        });
      },
    );
  };

  _renderGreyFabOutStanding = (item) => {
    return <GreyFabOutStandingCard
      stock={item}

    />;
  };

  onStateChange = (type, text) => {
    this.setState({
      [type]: text,
    }, () => this._search());
  };
  _search = async () => {
    try {
      let data = {
        keyword: this.state.keyword,
      };

      const search = await this.props.getGreyFabOutStanding(data.keyword, success => { }, error => { });
    } catch (error) {
      showToast(error);
    }
  };


  render() {

    return (
      <View style={styles.container}>
        <View
          style={{
            height: 6 * vh,
            width: 90 * vw,
            borderRadius: 2 * vw,
            backgroundColor: '#FFFFFF',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 5 * vw,
            alignItems: 'center',
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 5,
            },
            shadowOpacity: 0.34,
            shadowRadius: 6.27,
            
            elevation: 10,


            marginTop: 2 * vh
          }}>

          <MainInput
            placeholder=" Search Grey Fabric Out Standing"
            style={styles.inputField}
            onChangeText={(keyword) => this.onStateChange('keyword', keyword)}
          />

          {/* <TouchableOpacity onPress={this._search}>
            <Image
              resizeMode="contain"
              style={{ height: 5 * vh, width: 5 * vw }}
              source={icons.searchBlue}
            />
          </TouchableOpacity> */}
        </View>
        {this.props.activity_loading ? <ActivityIndicator size="small" color="#012c65"
          style={{ paddingVertical: 3 * vh }}
        /> : null

        }
        <FlatList
          showsVerticalScrollIndicator={false}
          data={this.props.grey_fabric_outstanding}
          renderItem={this._renderGreyFabOutStanding}
          contentContainerStyle={{ paddingBottom: 10 * vh }}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {

  return {
    activity_loading: state.GeneralReducer.activity_loading,

    grey_fabric_outstanding: state.GeneralReducer.grey_fabric_outstanding,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getGreyFabOutStanding: (keyword, success, error) =>
      dispatch(actions.getGreyFabOutStanding(keyword, success, error)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GreyFabOutStanding);
