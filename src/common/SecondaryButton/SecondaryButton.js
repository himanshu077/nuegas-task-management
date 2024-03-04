import React from 'react'
import Image from "next/image"

const SecondaryButton = ({ src, alt, name }) => {
    return (
        <div>
            <button className='!flex lg:!gap-2 !border !border-[--Activity-body] !px-3 !py-[1.7vh] !rounded-md' ><Image src={src} alt={alt} /><span className='!text-[--Secondary-500] !text-xs !p-1'>{name}</span></button>
        </div>
    )
}

export default SecondaryButton
