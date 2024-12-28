import { ButtonProps } from "@nextui-org/react";

export interface IButton extends ButtonProps {
  label: string;
  disabled?: boolean;
  backgroundColor: string;
  borderRadius: string;
  textStyle: string;
  width?: string;
}
