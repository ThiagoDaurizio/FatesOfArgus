import { StyledContainer } from "./styles";
import { useHistory } from "react-router-dom";
import { useContext, useState } from "react";
import GlobalStateContext from "../../Global/GlobalStateContext";

import { 
    goToPage_Adm,
    goToPage_Home,
    goToPage_Guilds,
    goToPage_ClassWarrior,
    goToPage_ClassCleric,
    goToPage_ClassChoosen,
    goToPage_ClassDruid,
    goToPage_ClassWitcher,
        } from "../../Router/routerGPS";

export const CompSidebar = () => {
    // const { states, setters } = useContext(GlobalStateContext)

    const [menuClassOn, set_menuClassOn] = useState(false)
    const [menuOn, set_menuOn] = useState("sidebar-menu-item")
    const history = useHistory()


    const menuClassDrop = () => {
        set_menuClassOn(!menuClassOn)

        console.log(menuOn)

        if(menuClassOn){
            set_menuOn("sidebar-menu-item")
        }else{
            set_menuOn("sidebar-menu-item-open")
        }
    }
    return(
        <StyledContainer>
            <button className="sidebar-menu-item" onClick={() => goToPage_Home(history)}>
                HOME
            </button>

            <button className="sidebar-menu-item" onClick={() => goToPage_Guilds(history)}>
                GUILDAS
            </button>

            {
            menuClassOn ? 
                <>
                    <button className={menuOn} onClick={menuClassDrop}> CLASSES </button>

                    <button className="sidebar-menu-item-class" onClick={() => goToPage_ClassWarrior(history)}> Warrior </button>

                    <button className="sidebar-menu-item-class" onClick={() => goToPage_ClassCleric(history)}> Cleric </button>

                    <button className="sidebar-menu-item-class" onClick={() => goToPage_ClassChoosen(history)}> Choosen </button>

                    <button className="sidebar-menu-item-class" onClick={() => goToPage_ClassDruid(history)}> Druid </button>

                    <button className="sidebar-menu-item-class" onClick={() => goToPage_ClassWitcher(history)}> Witcher </button>
                </>
                    :
                <>
                    <button className={menuOn} onClick={menuClassDrop}> CLASSES </button>
                </>
            }

            <button className="sidebar-menu-item">
                ARTEFATOS
            </button>

            <button className="sidebar-menu-item" onClick={() => goToPage_Adm(history)}>
                ADM AREA
            </button>
        </StyledContainer>
    )
}