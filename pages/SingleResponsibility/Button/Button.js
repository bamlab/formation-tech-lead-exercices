/* eslint-disable react-native/no-inline-styles */
/**
 * CRC Card
 *
 * Responsibilities
 * - Make a round button with a centered content that is clickable
 * - Render the Icon component if not an image
 * - Render a different design if the button contains an image
 * - Apply the correct colors depending on the variant
 *
 * Collaborators
 * - Icon component (imported)
 * - SingleReponsibility page (exported to)
 */
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Icon} from '../Icon';

const CIRCULAR_CONTAINER_SIZE = 40;
const HIT_SLOP_SIZE = 20;
const HIT_SLOP = {
  top: HIT_SLOP_SIZE,
  bottom: HIT_SLOP_SIZE,
  right: HIT_SLOP_SIZE,
  left: HIT_SLOP_SIZE,
};

const colorVariants = {
  primary: {
    enabled: {color: 'grey', backgroundColor: 'white'},
    disabled: {color: 'white', backgroundColor: 'grey'},
  },
  secondary: {
    enabled: {color: 'red', backgroundColor: 'papayawhip'},
    disabled: {color: 'papayawhip', backgroundColor: 'salmon'},
  },
};

export const Button = ({icon, colorVariant, isDisabled, onPress}) => {
  const {color, backgroundColor} =
    colorVariants[colorVariant][isDisabled ? 'disabled' : 'enabled'];

  // icon can be a component or a string (the name of the icon)
  let IconComponent;
  if (typeof icon === 'string') {
    IconComponent = <Icon name={icon} style={{color}} />;
  } else {
    IconComponent = icon;
  }

  return (
    <TouchableOpacity
      hitSlop={HIT_SLOP}
      disabled={!!isDisabled}
      onPress={onPress}
      style={{
        height: CIRCULAR_CONTAINER_SIZE,
        width: CIRCULAR_CONTAINER_SIZE,
        borderRadius: CIRCULAR_CONTAINER_SIZE,
        backgroundColor,
        borderWidth: 1,
        borderColor: typeof icon === 'string' ? 'rgba(0,0,0,0)' : color,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {IconComponent}
    </TouchableOpacity>
  );
};
