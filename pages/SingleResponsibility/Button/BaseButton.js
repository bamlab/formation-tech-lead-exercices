/* eslint-disable react-native/no-inline-styles */
/**
 * CRC Card
 *
 * Responsibilities
 * - Make a round button with a centered content that is clickable
 *
 * Collaborators
 * - Button component (exported to)
 * - ImageButton component (exported to)
 */
import React from 'react';
import {TouchableOpacity} from 'react-native';

const CIRCULAR_CONTAINER_SIZE = 40;
const HIT_SLOP_SIZE = 20;
const HIT_SLOP = {
  top: HIT_SLOP_SIZE,
  bottom: HIT_SLOP_SIZE,
  right: HIT_SLOP_SIZE,
  left: HIT_SLOP_SIZE,
};

export const BaseButton = ({IconComponent, style, isDisabled, onPress}) => {
  return (
    <TouchableOpacity
      hitSlop={HIT_SLOP}
      disabled={!!isDisabled}
      onPress={onPress}
      style={[
        {
          height: CIRCULAR_CONTAINER_SIZE,
          width: CIRCULAR_CONTAINER_SIZE,
          borderRadius: CIRCULAR_CONTAINER_SIZE,
          justifyContent: 'center',
          alignItems: 'center',
        },
        style,
      ]}>
      {IconComponent}
    </TouchableOpacity>
  );
};
