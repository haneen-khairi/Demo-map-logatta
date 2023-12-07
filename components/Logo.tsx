import { Image } from '@nextui-org/react'
import React from 'react'

export default function Logo({
    imageSrc,
    className,
    otherProps
}: {
    imageSrc: string,
    className?: string,
    otherProps?: any
}) {
  return <Image className={className} src={imageSrc} removeWrapper={true} {...otherProps} />
}
