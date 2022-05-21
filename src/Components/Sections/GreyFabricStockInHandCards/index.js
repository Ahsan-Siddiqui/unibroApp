import React from 'react';
import {View} from 'react-native'
import PoppinsRegular from '../../Text/PoppinsRegular';
import styles from './styles'

const GreyFabricStockInHand = (props) => {
    console.log('GreyFabStockInHand123131', props)
    return(
        <View style={styles.container} onPress={()=>props.onSuccess()}>
            <View style={styles.container2}> 
                <View style={{flexDirection:'row'}}>
                    <PoppinsRegular
                    numberOfLines={2}
                    style={styles.heading}>
                        Description: 
                    </PoppinsRegular>
                    <PoppinsRegular
                    numberOfLines={1}
                    style={styles.circularBoardStyle}
                    >
                    {props.stock.item.desc}
                    </PoppinsRegular>
                </View>
                <View style={{flexDirection:'row'}}>
                    <PoppinsRegular
                    numberOfLines={2}
                    style={styles.heading}>
                        Godown-1: 
                    </PoppinsRegular>
                    <PoppinsRegular
                    numberOfLines={1}
                    style={styles.circularBoardStyle}
                    >
                    {props.stock.item.godown1}
                    </PoppinsRegular>
                </View>
                <View style={{flexDirection:'row'}}>
                    <PoppinsRegular
                    numberOfLines={2}
                    style={styles.heading}>
                        Godown-2: 
                    </PoppinsRegular>
                    <PoppinsRegular
                    numberOfLines={1}
                    style={styles.circularBoardStyle}
                    >
                    {props.stock.item.godown2}
                    </PoppinsRegular>
                </View>
            </View>
            <View style={styles.container3}>
                <View style={{flexDirection:'row'}}>
                    <PoppinsRegular
                    numberOfLines={2}
                    style={styles.heading}>
                        Mending: 
                    </PoppinsRegular>
                    <PoppinsRegular
                    numberOfLines={1}
                    style={styles.circularBoardStyle}
                    >
                    {props.stock.item.mending}
                    </PoppinsRegular>
                </View>
                <View style={{flexDirection:'row'}}>
                    <PoppinsRegular
                    numberOfLines={2}
                    style={styles.heading}>
                        Bal Receivable: 
                    </PoppinsRegular>
                    <PoppinsRegular
                    numberOfLines={1}
                    style={styles.circularBoardStyle}
                    >
                    {props.stock.item.reserved}
                    </PoppinsRegular>
                </View>
                <View style={{flexDirection:'row'}}>
                    <PoppinsRegular
                    numberOfLines={2}
                    style={styles.heading}>
                        Stock In Hand: 
                    </PoppinsRegular>
                    <PoppinsRegular
                    numberOfLines={1}
                    style={styles.circularBoardStyle}
                    >
                    {props.stock.item.balance}
                    </PoppinsRegular>
                </View>
            </View>
        </View>
    )
}
export default GreyFabricStockInHand;