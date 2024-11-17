import { Button,  Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";

export function AddProductModal({
  openModal,
  setOpenModal,
  onCloseModal,
}: {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  onCloseModal: () => void;
}) {
    const [productId, setProductId] = useState("");
    const [productName, setProductName] = useState("");
    const [image, setImage] = useState<string | null>(null); // Base64 string
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
          const reader = new FileReader();
          reader.onloadend = () => {
            setImage(reader.result as string); // Base64 string
          };
          reader.readAsDataURL(file);
        }
      };
      const handleSubmit = () => {
        const productPayload = {
          product_id: productId,
          product_name: productName,
          image, // Base64 string
          description,
          price: parseFloat(price),
        };}

  return (
    <>
      <Button onClick={() => setOpenModal(true)}>Toggle modal</Button>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
  <div className="space-y-6">
    <h3 className="text-xl font-medium text-gray-900 dark:text-white">
      Add Product
    </h3>

    {/* Product ID */}
    <div>
      <div className="mb-2 block">
        <Label htmlFor="productId" value="Product ID" />
      </div>
      <TextInput
        id="productId"
        placeholder="Enter product ID"
        value={productId}
        onChange={(e) => setProductId(e.target.value)}
        required
      />
    </div>

    {/* Product Name */}
    <div>
      <div className="mb-2 block">
        <Label htmlFor="productName" value="Product Name" />
      </div>
      <TextInput
        id="productName"
        placeholder="Enter product name"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
        required
      />
    </div>

    {/* Image Upload */}
    <div>
      <div className="mb-2 block">
        <Label htmlFor="image" value="Product Image" />
      </div>
      <input
        type="file"
        id="image"
        accept="image/*"
        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50"
        onChange={handleImageUpload}
        required
      />
    </div>

    {/* Description */}
    <div>
      <div className="mb-2 block">
        <Label htmlFor="description" value="Product Description" />
      </div>
      <TextInput
        id="description"
        placeholder="Enter product description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
    </div>

    {/* Price */}
    <div>
      <div className="mb-2 block">
        <Label htmlFor="price" value="Price" />
      </div>
      <TextInput
        id="price"
        placeholder="Enter product price"
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />
    </div>

    {/* Submit Button */}
    <div className="w-full">
      <Button onClick={handleSubmit}>Add Product</Button>
    </div>
  </div>
</Modal.Body>

      </Modal>
    </>
  );
}
