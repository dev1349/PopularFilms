import {styled} from '@mui/system'
const MainStyledTemplate = styled('div',{
    name: 'MainTemplateStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [
        styles.root,
    ],
})(() => ({}))
export default  MainStyledTemplate


