import { Button as NButton } from "@nextui-org/react";
import { IButton } from "./type";

export const Button = ({
  label,
  disabled = true,
  backgroundColor,
  textStyle,
  width,
  ...rest
}: IButton) => {
  return (
    <NButton
      disabled={disabled}
      className={`rounded-[6px] py-[12px] px-[14px] ${
        width ? width : "w-full"
      } ${disabled ? "bg-[#ABAFB7]" : backgroundColor} ${textStyle}`}
      {...rest}
    >
      {label}
    </NButton>
  );
};
