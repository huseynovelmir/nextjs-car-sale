"use client"
import React from 'react'
import Image from 'next/image'
import { CustomButtonProps } from '@/types'

function CustomButton({ title, containerStyles, handleClick, btnType, rightIcon, textStyles }: CustomButtonProps) {
    return (
        <button
            disabled={false}
            type={btnType || "button"}
            className={`custom-btn ${containerStyles}`}
            onClick={handleClick}
        >
            <span className={`flex-1 ${textStyles}`}>{title}</span>
            { rightIcon && (
                <div className='relative w-6 h-6'>
                    <Image
                    className='object-contain'
                     src={rightIcon}
                     alt='Right Icon'
                     fill/>
                </div>
            )}
        </button>
    )
}

export default CustomButton