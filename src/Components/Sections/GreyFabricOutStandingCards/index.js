import React from 'react';
import { Image, View } from 'react-native';
import PoppinsRegular from '../../Text/PoppinsRegular';
import styles from './styles'

const GreyFabOutStandingCard = (props) => {
  console.log('GreyFabOutStandingCard1233', props)
  return (
    <View
      style={styles.container}
      onPress={() => props.onSuccess()}>

      <View style={styles.container2}>
        <View style={{ flexDirection: 'row' }}>
          <PoppinsRegular
            numberOfLines={2}
            style={styles.heading}>
            Contract :
          </PoppinsRegular>

          <PoppinsRegular
            style={styles.circularBoardStyle}
            numberOfLines={1}>
            {props.stock.item.contract}
          </PoppinsRegular>
        </View>

        <View style={{ flexDirection: 'row' }}>
          <PoppinsRegular
            numberOfLines={2}
            style={styles.heading}>
            Delivery Date :
          </PoppinsRegular>

          <PoppinsRegular
            style={styles.circularBoardStyle}
            numberOfLines={2}>
            {props.stock.item.deliveryDate}
          </PoppinsRegular>
        </View>


        <View style={{ flexDirection: 'row' }}>
          <PoppinsRegular
            numberOfLines={2}
            style={styles.heading}>
            Supplier :
          </PoppinsRegular>

          <PoppinsRegular
            style={styles.circularBoardStyle}
            numberOfLines={1}>
            {props.stock.item.supplier}
          </PoppinsRegular>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <PoppinsRegular
            numberOfLines={2}
            style={styles.heading}>
            Received Meters :
          </PoppinsRegular>

          <PoppinsRegular
            style={styles.circularBoardStyleExtended}
            numberOfLines={2}>
            {props.stock.item.receivedMeters}
          </PoppinsRegular>
        </View>



      </View>
      <View style={styles.container3}>
        <View style={{ flexDirection: 'row' }}>
          <PoppinsRegular
            numberOfLines={2}
            style={styles.heading}>
            Rate :
          </PoppinsRegular>

          <PoppinsRegular
            style={styles.circularBoardStyle}
            numberOfLines={1}>
            {props.stock.item.rate}
          </PoppinsRegular>
        </View>

       


        <View style={{ flexDirection: 'row' }}>
          <PoppinsRegular
            numberOfLines={2}
            style={styles.heading}>
            Order Meters :
          </PoppinsRegular>

          <PoppinsRegular
            style={styles.circularBoardStyle}
            numberOfLines={1}>
            {props.stock.item.orderMeters}
          </PoppinsRegular>
        </View>


        <View style={{ flexDirection: 'row' }}>
          <PoppinsRegular
            numberOfLines={2}
            style={styles.heading}>
            OutStanding :
          </PoppinsRegular>

          <PoppinsRegular
            style={styles.circularBoardStyleExtended}
            numberOfLines={2}>
            {props.stock.item.outstanding}
          </PoppinsRegular>
        </View>
      </View>



    </View>
  );
};
export default GreyFabOutStandingCard;
