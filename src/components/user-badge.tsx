import React from 'react'
import avatar from "../assets/avatar.png";
import { Avatar } from "flowbite-react";
export const UserBadge = () => {
  return (
    <div className='flex'> <Avatar img={avatar} className="px-2" />
    <div className="font-semibold text-sm text-gray-600">
      <span>john doe</span>
      <br />
      <span>johndoe@email.com</span>
    </div></div>
  )
}
