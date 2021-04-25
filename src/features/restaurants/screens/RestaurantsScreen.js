import React, { useContext, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { ActivityIndicator, Colors } from 'react-native-paper';

import { SafeArea } from '../../../components/utility/safearea';
import { Spacer } from '../../../components/spacer/Spacer';
import { Text } from '../../../components/typography/text'
import { LocationContext } from '../../../services/location/location.context'
import { RestaurantsContext } from '../../../services/restaurants/restaurants.context';
import { Search } from '../components/Search';
import { RestaurantInfoCard } from '../components/RestaurantInfoCard';
import { FavouritesBar } from '../../../components/favourites/FavouritesBar';
import { FavouritesContext } from '../../../services/favourites/favourites.context';
import { RestaurantList } from '../components/RestaurantList.styles';
import { FadeInView } from '../../../components/animations/fade.animation';

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;
const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const RestaurantsScreen = ({ navigation }) => {
  const { error:locationError } = useContext(LocationContext);
  const { isLoading, restaurants, error } = useContext(RestaurantsContext);
  const { favourites } = useContext(FavouritesContext);
  const [isToggled, setIsToggled] = useState(false);
  
  const hasError = (!!error || !!locationError)

  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.blue300} />
        </LoadingContainer>
      )}
      <Search
        isFavouritesToggled={isToggled}
        onFavouritesToggle={() => setIsToggled(!isToggled)}
      />
      {isToggled && (
        <FavouritesBar
          favourites={favourites}
          onNavigate={navigation.navigate}
        />
      )}
  {hasError && (
                  <Spacer position='bottom' size='large'>

  <Text variant='error'>Something went wrong retrieving the data</Text>
  </Spacer>
  )}
      {!hasError && <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('RestaurantDetail', {
                  restaurant: item,
                })
              }>
              <Spacer position='bottom' size='large'>
                <FadeInView>
                  <RestaurantInfoCard restaurant={item} />
                </FadeInView>
              </Spacer>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />}
    </SafeArea>
  );
};
