/* eslint-disable react-native/no-inline-styles */
/**
 * CRC Card
 *
 * Responsibilities
 * - Render the Icon component
 * - Apply the correct colors depending on the variant
 *
 * Collaborators
 * - Icon component (imported)
 * - SingleReponsibility page (exported to)
 */
import React from 'react';
import {BaseButton} from './BaseButton';
import {Icon} from '../Icon';

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

  return (
    <BaseButton
      isDisabled={isDisabled}
      IconComponent={<Icon name={icon} style={{color}} />}
      onPress={onPress}
      style={{
        backgroundColor,
      }}
    />
  );
};
