import {ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import {action} from "@storybook/addon-actions";
import Accordion from "./Accordion";
import UncontrolledAccordion from "./UncontrolledAccordion";


export default {
    title: 'Native/UncontrolledAccordion',
    component: UncontrolledAccordion,
    argTypes:{
        collapsed:{
            description:'acc  is collapsed'
        },
        titleValue: {
            defaultValue: 'proverks',
            description: 'acc value is str'
        }
    }


} as ComponentMeta<typeof UncontrolledAccordion>

const Template: ComponentStory<typeof UncontrolledAccordion> = (args) => <UncontrolledAccordion {...args} />;
const callback = action('acc  is SETcollapsed')
export const UncontrolledAccordionStory = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
UncontrolledAccordionStory.args = {
    // titleValue: action('acc  is SETcollapsed')
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
