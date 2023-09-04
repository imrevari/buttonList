import { FC, useState, useEffect } from 'react';
import { ExtendButtonBase, ButtonTypeMap } from '@mui/material';
import { styled } from '@mui/material/styles';
import classNames from 'classnames';
import '../../css/MenuBar.css'
import {ButtonProps} from '../../common/interfaces/interfaces'

import {CustomButton} from '../CusomButton/CustomButton';

const StyledDiv = styled('div', {
    shouldForwardProp: (prop) => prop !== "justifyContent",
  })<{ justifyContent: 'left' | 'right' | 'center' }>(({justifyContent})=>({
    justifyContent: justifyContent,
    display: 'flex',
    paddingTop: '2%',
    paddingLeft: '2%',
    paddingRight: '2%'

}));

interface MenuBarProps {
    buttons: Array<ButtonProps>
    justifyContent: 'left' | 'right' | 'center'
    isEditMode?: boolean
}

  export const MenuBar: FC<MenuBarProps> = ({buttons, justifyContent, isEditMode}) => {

    const [buttonList, setButtonList] = useState(buttons)

    const applyNewOrder = (value: number, index: number) => {
        const newIndex = value > 0 ? index + value - 1 : index + value
        setButtonList(prevState =>
            {
                const tempArray = prevState.slice(0, index).concat(prevState.slice(index + 1))
                const newArray = tempArray.slice(0, newIndex).concat(prevState[index]).concat(tempArray.slice(newIndex))
                return(newArray)
            })
    }


    return(
        <>
            <StyledDiv className="box" justifyContent={justifyContent}>
                {buttonList.map( ({variant, title, onClick}, index) => 
                    <div
                    className="div"
                    key={index}
                    >
                        
                        <CustomButton 
                            onClick={onClick}
                            variant={variant}
                            title={title}
                            isEditMode={isEditMode}
                            applyNewOrder={applyNewOrder}
                            index={index}
                            />
                    </div>
                    )}
                
            </StyledDiv>
            <hr className="line"/>
        </>
    )

}