import {styled} from '@mui/system'
const RightBarTemplate = styled('div',{
    name: 'RightBarTemplate',
    slot: 'Root',
    overridesResolver: (props, styles) => [
        styles.root,
    ],
})(() => ({}))
export default  RightBarTemplate