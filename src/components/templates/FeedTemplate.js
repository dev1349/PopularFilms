import {styled} from '@mui/system'
const FeedTemplate = styled('div',{
    name: 'FeedTemplate',
    slot: 'Root',
    overridesResolver: (props, styles) => [
        styles.root,
    ],
})(() => ({}))
export default  FeedTemplate