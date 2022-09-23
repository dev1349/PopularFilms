 import MainStyledTemplate from "../templates/FlexMainTemplate";
import SidebarTemplate from "../templates/SidebarTemplate";
import FeedTemplate from "../templates/FeedTemplate";
import RightBarTemplate from "../templates/RightBarTemplate";
import Sidebar from "../Sidebar";
import Feed from '../Feed'

const HomePage = () =>{
    return(
        <MainStyledTemplate>
            <SidebarTemplate>
                <Sidebar/>
            </SidebarTemplate>
            <FeedTemplate>
                <Feed/>
            </FeedTemplate>
            <RightBarTemplate>
                lols
            </RightBarTemplate>
        </MainStyledTemplate>

    )
}
export default HomePage