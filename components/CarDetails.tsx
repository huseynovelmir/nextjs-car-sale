import { CarProps } from '@/types'
import {Fragment} from 'react'
import Image from 'next/image'
import { Dialog,Transition } from '@headlessui/react'


interface CarDetailsProps{
    isOpen:boolean,
    closeModal: () => void,
    car: CarProps

}

function CarDetails({ isOpen, closeModal, car }: CarDetailsProps ) {
  return (
    <>
    {/* <Transition>
        
    </Transition> */}
    </>
  )
}

export default CarDetails