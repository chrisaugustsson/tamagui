import { memo } from 'react'
import type { NamedExoticComponent } from 'react'
import type { IconProps } from '@tamagui/helpers-icon'
import { Svg, Path } from 'react-native-svg'
import { themed } from '@tamagui/helpers-icon'

const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...otherProps}
    >
      <Path d="M12 20h.01" stroke={color} />
      <Path d="M2 8.82a15 15 0 0 1 20 0" stroke={color} />
      <Path d="M5 12.859a10 10 0 0 1 14 0" stroke={color} />
      <Path d="M8.5 16.429a5 5 0 0 1 7 0" stroke={color} />
    </Svg>
  )
}

Icon.displayName = 'Wifi'

export const Wifi: NamedExoticComponent<IconProps> = memo<IconProps>(themed(Icon))
