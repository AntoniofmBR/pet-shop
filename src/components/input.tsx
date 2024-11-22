import React from "react";
import { IconProps } from "@phosphor-icons/react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder: string
  type: string
  icon: React.ComponentType<IconProps>
}

export function Input({ type, icon: Icon, placeholder, ...rest }: InputProps) {
  return (
    <div className="flex bg-whites-white_200 items-center border rounded-lg w-full p-4 gap-2">
      <Icon
        className="text-blacks-black_500"
        size={30}
        weight='bold'
      />
      <input
        type={type}
        placeholder={placeholder}
        { ...rest }
        className="flex-1 bg-transparent border-none outline-none h-full w-full text-xl"
      />
    </div>
  );
};