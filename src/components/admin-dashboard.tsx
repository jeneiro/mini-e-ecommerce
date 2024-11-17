import React, {useState} from "react";
import { AddProductModal } from "./add-product-modal";
import { AdminProductsTable } from "./admin-products-table";
import { Button } from "flowbite-react";
import { UserBadge } from "./user-badge";
import { HiPlus } from "react-icons/hi";

export const AdminDashboard = () => {
    const [openModal, setOpenModal] = useState(false);

    function onCloseModal() {
      setOpenModal(false);
    }
  return (
    <div className="px-5">
      <div className="flex items-center justify-between p-4 bg-blue-50">
        <p className="text-lg font-semibold">Admin Dashboard</p>
        <div className="flex">
          <Button onClick={() => setOpenModal(true)}>
            <HiPlus className="mr-2 h-5 w-5" />
            Add Product
          </Button>
          <UserBadge></UserBadge>
        </div>
      </div>
      <AddProductModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        onCloseModal={onCloseModal}
      />
      <AdminProductsTable></AdminProductsTable>
    </div>
  );
};
