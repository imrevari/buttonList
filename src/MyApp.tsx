import { FC } from 'react';

import { MenuBar } from './components/menuBar/MenuBar';

interface MyAppProps {
    isEditMode: boolean
}


export const MyApp: FC<MyAppProps> = ({isEditMode}) => {

    return(
        <>
                <MenuBar buttons={[{variant: 'contained', title: 'Pista 1', onClick: () => console.log('Pista 1 clicked')},
            {variant: 'contained', title: 'Pista 2 Pista Pista PistaPi staPista'},
            {variant: 'contained', title: 'Pista 3'},
            {variant: 'contained', title: 'Pista 4'},
            {variant: 'contained', title: 'Pista 5', onClick: () => console.log('Pista 5 clicked')},
            {variant: 'contained', title: 'Pista 6'},
            {variant: 'contained', title: 'Pista 7'}
            ]}
            justifyContent={'left'}
            isEditMode={isEditMode}
            />
        </>
    )
}