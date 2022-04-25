import {ComponentMeta, ComponentStory} from '@storybook/react';
import React, {useState} from 'react';

import {action} from "@storybook/addon-actions";
import Accordion from "./Accordion";


export default {
    title: 'Native/Accordion',
    component: Accordion,
    argTypes: {
        collapsed: {
            description: 'acc  is collapsed'
        },
        titleValue: {
            defaultValue: 'proverks',
            description: 'acc value is str'
        },
        setCollapsed: {
            description: 'acc  is SETcollapsed'

        },
        items:{
            defaultValue: [],

            description: 'acc  item'

        },
        onClick:{
            description: 'acc  is onclick'

        }
    }


} as ComponentMeta<typeof Accordion>

const Template: ComponentStory<typeof Accordion> = (args) => <Accordion {...args} />;

export const AccordionStory = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
AccordionStory.args = {


    setCollapsed: action('acc  is SETcollapsed')
    // onChange: action('Star value is changed')
    //для описание что происходит экш и не описывать колбек
};

export const ModeChangingStory: ComponentStory<typeof Accordion> = (args) => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion {...args}
                      setCollapsed={() => setValue(!value)}
                      collapsed={value}


    />
}

ModeChangingStory.args = {
    titleValue: 'Users',
    items: [
        {title: 'ddd', age: 24},
        {title: 'ddffd', age: 254},
        {title: 'dfdfdd', age: 524},
        {title: 'ye', age: 243}
    ],


    onClick: (age) => {
        alert(`user with id${age} should be happy`)
    }

}


// export const StarStory = (props: any) => {
//     return <div>
//         <Star selected={props.value > 0} onClick={props.onClick} value={1}/>
//     </div>
// }


// export const Stars0 =()=><Rating value={0} onClick={x=>x}/>
// export const Stars1 =()=><Rating value={1} onClick={x=>x}/>
// export const Stars2 =()=><Rating value={2} onClick={x=>x}/>
// export const Stars3 =()=><Rating value={3} onClick={x=>x}/>
// export const Stars4 =()=><Rating value={4} onClick={x=>x}/>
// export const Stars5 =()=><Rating value={5} onClick={x=>x}/>
