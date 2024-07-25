import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

type ButtonProps = {
  isLoading: boolean;
  className?: string;
  children: React.ReactNode;
};
const SubmitButton = ({ isLoading, className, children }: ButtonProps) => {
  return (
    <div>
      <Button
        disabled={isLoading}
        type="submit"
        className={className ?? "shad-primary-btn w-full"}
      >
        {isLoading ? (
          <div className="flex ">
            <Image
              src="/assets/icons/loader.svg"
              alt="spinner"
              width={20}
              height={20}
              className="animate-spin"
            />
            Loading ...
          </div>
        ) : (
          children
        )}
      </Button>
    </div>
  );
};

export default SubmitButton;
