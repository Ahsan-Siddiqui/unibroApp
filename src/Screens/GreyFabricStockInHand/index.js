import React from 'react';
import {View,FlatList,ActivityIndicator} from 'react-native';
import MainInput from '../../Components/Input/MainInput';
import { vh,vw } from '../../Utils/Units';
import styles from './styles';
import { connect } from 'react-redux';
import actions from '../../redux/actions';
import GreyFabricStockInHandCards from '../../Components/Sections/GreyFabricStockInHandCards'

class GreyFabricStockInHand extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            keyword:''
        }
    }
    componentDidMount(){
        this.props.navigation.addListener('focus',this._getGreyFabStockInHand)
    }
    componentWillUnmount(){
        this.props.navigation.removeListener('focus')
    }
    _getGreyFabStockInHand = () => {
        this.props.getGreyFabricStockInHand(
            this.state.keyword,
            (success) => {
                if(success){
                    this.setState({
                        refreshing:false
                    })
                }
            },
            (error)=>{
                this.setState({
                    refreshing:false
                })
            }
        )
    }
    _renderGreyFabStkInHand = (item) => {
        return <GreyFabricStockInHandCards stock={item}/>
    }
    onStateChange = (type,text) => {
        this.setState({
            [type]:text,
        },()=>this._search())
    }
    _search = async () => {
        try {
            let data = {
                keyword : this.state.keyword,
            }
            const search = await this.props.getGreyFabricStockInHand(data.keyword, success => { }, error => { });
            // const search = await this.props.getGreyFabricStockInHand(data,keyword)
        } catch (error){
            showToast(error)
        }
    }
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.searchInput}>
                    <MainInput
                    placeholder="Search Grey Fabric Stock In Hand"
                    style={styles.inputField}
                    onChangeText={(keyword)=>this.onStateChange('keyword',keyword)}
                    />
                </View>
                {this.props.activity_loading ? <ActivityIndicator size="small" color="#012c65"
                style={{paddingVertical:3*vh}}
                />:null
                }
                <FlatList
                showsVerticalScrollIndicator={false}
                data={this.props.grey_fabric_stock_in_hand}
                renderItem={this._renderGreyFabStkInHand}
                contentContainerStyle={{ paddingBottom: 10 * vh }}
                />
            </View>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        activity_loading:state.GeneralReducer.activity_loading,
        grey_fabric_stock_in_hand:state.GeneralReducer.grey_fabric_stock_in_hand
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getGreyFabricStockInHand: (keyword,success,error) =>
        dispatch(actions.getGreyFabricStockInHand(keyword,success,error))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(GreyFabricStockInHand)