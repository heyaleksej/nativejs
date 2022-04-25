import {ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import OnOff from "./OnOff";
import {action} from "@storybook/addon-actions";


export default {
    title: 'Native/OnOff',
    component: OnOff,
    argTypes:{
        on:{
            description:'OnOff value is changed'
        },
        setOn: {
            description: 'SetOnOff value is changed'
        }
    }


} as ComponentMeta<typeof OnOff>

const Template: ComponentStory<typeof OnOff> = (args) => <OnOff {...args} />;

export const OnOffStory = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
OnOffStory.args = {

    setOn: action('SetOnOff value is changed')
    // onChange: action('Star value is changed')
    //для описание что происходит экш и не описывать колбек
};



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
