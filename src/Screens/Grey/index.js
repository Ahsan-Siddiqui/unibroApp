import React from 'react';
import { FlatList, View, ActivityIndicator } from 'react-native';
import styles from './styles';
import GreyCards from '../../Components/Sections/GreyCards';
import { connect } from 'react-redux';
import actions from '../../redux/actions/index';
import { vh, vw } from '../../Utils/Units';

import MainInput from '../../Components/Input/MainInput';

class Grey extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      keyword: ''
    };
  }

  componentDidMount() {
    this.props.navigation.addListener('focus', this._getGreys);
  }

  componentWillUnmount() {
    this.props.navigation.removeListener('focus');
  }

  _getGreys = () => {
    this.props.getGreys(
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

      const search = await this.props.getGreys(data.keyword, success => { }, error => { });
    } catch (error) {
      showToast(error);
    }
  };

  _renderGrey = (item) => {

    console.log('gettgtttttt fabricsasad', item)
    return <GreyCards


      onSuccess={(id) => this.props.navigation.navigate('ViewReports', { id: id, role: 'Greish' })}
      stock={item}

    />;
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
            shadowOpacity: 0.35,
            shadowRadius: 6.27,

            elevation: 10,



            marginTop: 2 * vh
          }}>

          <MainInput
            placeholder=" Search Greigh"
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
          data={this.props.grey_fabric}
          renderItem={this._renderGrey}
          contentContainerStyle={{ paddingBottom: 10 * vh }}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('Employee state', state)
  return {
    activity_loading: state.GeneralReducer.activity_loading,

    grey_fabric: state.GeneralReducer.grey_fabric,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getGreys: (keyword, success, error) =>
      dispatch(actions.getGreys(keyword, success, error)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Grey);
