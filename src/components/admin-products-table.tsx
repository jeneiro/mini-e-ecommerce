import React from 'react'
import { Table , Button} from "flowbite-react";
export const AdminProductsTable = () => {
  return (
    <div className='p-5'><div className="overflow-x-auto">
    <Table striped>
      <Table.Head>
        <Table.HeadCell>Product name</Table.HeadCell>
        <Table.HeadCell>Color</Table.HeadCell>
        <Table.HeadCell>Category</Table.HeadCell>
        <Table.HeadCell>Price</Table.HeadCell>
        <Table.HeadCell>
        Action
        </Table.HeadCell>
      </Table.Head>
      <Table.Body className="divide-y">
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            {'Apple MacBook Pro 17"'}
          </Table.Cell>
          <Table.Cell>Sliver</Table.Cell>
          <Table.Cell>Laptop</Table.Cell>
          <Table.Cell>$2999</Table.Cell>
          <Table.Cell>
          <Button.Group outline>
        <Button color="info">Update</Button>
        <Button  color="" className='dark:bg-red-800'>Delete</Button>
      </Button.Group>
         
          </Table.Cell>
        </Table.Row>
       
      </Table.Body>
    </Table>
  </div></div>
  )
}






