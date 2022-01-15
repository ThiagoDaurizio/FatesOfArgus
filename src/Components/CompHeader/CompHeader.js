import { StyledContainer } from './styles';

import { useHistory } from "react-router-dom";
import { goToPage_Home, goToPage_Login } from '../../Router/routerGPS';

export const CompHeader = () => {
    const history = useHistory()

    return(
        <StyledContainer>
            <h2 onClick={() => goToPage_Home(history)}>ARGUS QUEST</h2>
            <button onClick={() => goToPage_Login(history)}>Login</button>
        </StyledContainer>
    )
}