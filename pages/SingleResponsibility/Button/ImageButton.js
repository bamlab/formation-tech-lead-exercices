/* eslint-disable react-native/no-inline-styles */
/**
 * CRC Card
 *
 * Responsibilities
 * - Apply style for the Image Button
 *
 * Collaborators
 * - SingleReponsibility page (exported to)
 */

import React from 'react';
import {BaseButton} from './BaseButton';

export const ImageButton = ({icon, colorVariant, isDisabled, onPress}) => {
  return (
    <BaseButton
      isDisabled={isDisabled}
      IconComponent={icon}
      onPress={onPress}
      style={{
        backgroundColor: 'papayawhip',
        borderColor: 'red',
        borderWidth: 1,
      }}
    />
  );
};
