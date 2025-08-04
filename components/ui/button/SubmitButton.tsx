import React from "react";
import Image from "next/image";

interface SubmitButtonProps {
  loading: boolean;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ loading }) => {
  return (
    <button
      type="submit"
      disabled={loading}
      className="w-[80vw] max-w-[350px] py-4 px-6 border border-accentColor flex justify-between text-base bg-accentColor text-white hover:opacity-70 flex items-center justify-center font-normal"
    >
      {loading ? "送信中..." : "送信する"}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <circle cx="12" cy="12" r="11.5" stroke="white" />
        <path d="M6.25 12H17.75" stroke="white" />
        <path d="M13.75 8L17.75 12L13.75 16" stroke="white" />
      </svg>
    </button>
  );
};

export default SubmitButton;
