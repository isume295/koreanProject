/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from "react";
export interface ITable {
  header: IHeader[];
  hasPagination?: boolean;
  title?: string;
  data: any[];
  buttonLabel?: string;
  buttonWidth?: string;
  buttonRadius?: string;
  onClick?: () => void;
}

export interface IHeader {
  label: string;
}

export interface IData {
  element: ReactNode | string;
}
