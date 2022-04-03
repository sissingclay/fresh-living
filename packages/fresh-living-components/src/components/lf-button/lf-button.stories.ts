import * as Utils from '../../stories/storybook-utils';
//
// SETUP
//
export default {
    title: 'Fresh Living/Button',
    parameters: {
        actions: {
            handles: ['tapped']
        }
    },
    decorators: [
    ]
};
//
// DEFINE PROPERTIES, ETC FOR COMPONENT
//
const PROPS = ['first', 'middle', 'last'];
const EVENTS = ['tapped'];
const CSS_VARS = [
    '--border-size',
    '--border-color'
];
const SLOTS = ['one', 'two'];
//
// TEMPLATE
//
const Template = args => {
    const el = document.createElement('lf-button');
    Utils.bindProps(el, PROPS, args);
    Utils.bindEvents(el, EVENTS, args);
    Utils.bindStyles(el, CSS_VARS, args);
    Utils.bindSlots(el, SLOTS, args);
    return el;
}
//
// STORIES
//
export const Primary = Template.bind({});
export const Secondary = Template.bind({});