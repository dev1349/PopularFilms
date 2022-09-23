import {styled} from '@mui/system'
const SidebarTemplate = styled('div',{
    name: 'SidebarTemplate',
    slot: 'Root',
    overridesResolver: (props, styles) => [
        styles.root,
    ],
})(() => ({}))
export default  SidebarTemplate
