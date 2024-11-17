import React from 'react'
import { Button } from 'flowbite-react';
import {  HiShoppingCart } from "react-icons/hi";
export const CustomerDashboard = () => {
  return (
    <div><h2 className='.font-extrabold p-5'> <Button>
    <HiShoppingCart className="mr-2 h-5 w-5" />
    Buy now
  </Button></h2></div>
  )
}
