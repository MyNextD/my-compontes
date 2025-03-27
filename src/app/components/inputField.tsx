import React from 'react'

function InputField({ type, placeholder, onChange, value, name }: { type: string, placeholder: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void, value: string, name: string }) {
  return (
    <div>
        <input 
        className='bg-gray-700 text-white dark:text-black dark:bg-gray-300 dark:border-gray-300 rounded-lg p-2' 
        onChange={onChange} 
        type={type} 
        value={value}
        name={name}
        placeholder={placeholder} />
    </div>
  )
}

export default InputField;