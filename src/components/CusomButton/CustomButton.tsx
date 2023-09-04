import { FC } from 'react';

import Button from '@mui/material/Button';
import {ButtonProps as ImportedButtonProps} from '../../common/interfaces/interfaces'
import '../../css/MenuBar.css'

interface ButtonProps extends ImportedButtonProps {
    isEditMode?: boolean
    applyNewOrder?: (value: number, index: number) => void
    index?: number
}

export const CustomButton: FC<ButtonProps> = ({isEditMode, onClick, variant, title, index, applyNewOrder} ) => {


    const leftOrRight = (value: number) => {
        applyNewOrder!(Math.round(value / 120), index!);
    }

    const myProps = isEditMode ? {
                 // @ts-ignore
                onDragEnd: (event: React.DragEvent<HTMLAnchorElement>) => leftOrRight(event.nativeEvent.layerX),
                href: "/" 
    } : {
        href: "" 
    }

      
    return(
       <>
            <Button
             {...myProps}
             onClick={!isEditMode ? onClick : () => {}}
             variant={variant}
             color={isEditMode ? 'error' : 'inherit'}
             className="button"
                 >        
                     {title} 
            </Button>
       </> 
    )
}