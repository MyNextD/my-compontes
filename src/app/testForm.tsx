"use client";
import React, { useState } from "react";
import InputField from "./components/inputField";

function TestForm() {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    email: "",
    password: "",
  });
  const [formDataList, setFormDataList] = useState<any[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.id) {
      // Update existing item
      setFormDataList(formDataList.map((item, index) => (index === parseInt(formData.id) ? formData : item)));
    } else {
      // Add new item
      setFormDataList([...formDataList, { ...formData, id: formDataList.length }]);
    }
    console.log(formData);
    alert(`Name: ${formData.name}\nEmail: ${formData.email}\nPassword: ${formData.password}`);
    setFormData({ id: "", name: "", email: "", password: "" }); // Reset form after submission
  };

  const handleEdit = (index: number) => {
    const itemToEdit = formDataList[index];
    setFormData(itemToEdit); // Set the form data to the item being edited
  };

  const handleDelete = (index: number) => {
    setFormDataList(formDataList.filter((_, i) => i !== index));
  };

  return (
    <div className="flex flex-cols-2 items-center justify-center p-4 bg-gray-900 h-screen gap-4">
      <div className="flex flex-col items-center justify-center p-4 bg-gray-900 w-[50%] h-[40rem] gap-4">
        <form className="flex flex-col bg-gray-700 rounded-lg p-4 gap-4" onSubmit={handleSubmit}>
            {Object.keys(formData).filter(key => key !== 'id').map((key) => (
                <InputField 
                  key={key} 
                  type={key as keyof typeof formData}
                  placeholder={key} 
                  onChange={(e) => setFormData({ ...formData, [key]: e.target.value })} 
                  value={formData[key as keyof typeof formData]}
                  name={key} 
                />
            ))}
          
          <button type="submit">{formData.id ? "Update" : "Submit"}</button>
        </form>
      </div>
      <div className="flex flex-col items-center justify-center p-4 bg-blue-900 w-[50%] h-full gap-4">
        <div className="flex flex-col bg-gray-900 p-4 rounded-lg items-center justify-center w-full gap-4">
          {formDataList.map((item, index) => (
            <div className="flex flex-row items-center justify-between p-[2px] px-4 bg-gray-500 w-full rounded-lg gap-4" key={index}>
              <div className="flex flex-row items-center w-full gap-4">
                <h1>{index + 1}</h1>
                <h1>{item.name}</h1>
                <h1>{item.email}</h1>
                <h1>{item.password}</h1> 
              </div>
              <button className="bg-green-500 text-white text-sm rounded-lg p-2" onClick={() => handleEdit(index)}>Edit</button>
              <button className="bg-red-500 text-white text-sm rounded-lg p-2" onClick={() => handleDelete(index)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TestForm;
