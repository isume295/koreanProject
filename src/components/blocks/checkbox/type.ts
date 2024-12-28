export interface CheckboxProps {
    options: string[];
    selectedValues: string[];
    onChange: (selected: string[]) => void;
    alignment?: 'vertical' | 'horizontal'; // Alignment of checkboxes
    gap?: string;
    inputStyles?:string
    inputTextStyles?:string
  }
  