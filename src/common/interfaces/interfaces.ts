export interface ButtonProps {
    variant: "text" | "outlined" | "contained" | undefined;
    title: string | undefined;
    onClick?: () => void;
    
}