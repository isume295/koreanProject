import { Button as NButton } from "@nextui-org/react";
import { IButton } from "./type";

export const Button = ({
  label,
  disabled = true,
  backgroundColor,
  borderRadius,
  textStyle,
  width,
  ...rest
}: IButton) => {
  return (
    <NButton
      disabled={disabled}
      className={`${borderRadius} py-[12px] px-[14px] ${
        width ? width : "w-full"
      } ${disabled ? "bg-[#ABAFB7]" : backgroundColor} ${textStyle}`}
      {...rest}
    >
      {label}
    </NButton>
  );
};
