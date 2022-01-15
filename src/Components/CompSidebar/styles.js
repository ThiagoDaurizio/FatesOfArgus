import styled from "styled-components";

export const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: var(--primary);
    width: 175px;
        button{
            color: var(--lighter);
            transition: 0.5s;
            :hover{
                font-weight: bold;
            }
        }
    
    .sidebar-menu-item{
        display: inherit;
        justify-content: center;
        place-items: center;
        text-align: center;
        clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
        background: var(--segundary);
        width: 130px;
        height: 30px;
        margin: 0.5rem;
        transition: 0.7s;
        cursor: pointer;
        border: 1px solid yellow;

        :hover{
            background: var(--text1);
        }
    }

    .sidebar-menu-item-open{
        display: inherit;
        justify-content: center;
        place-items: center;
        text-align: center;
        clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
        background: var(--text1);
        width: 130px;
        height: 30px;
        margin: 0.5rem;
        transition: 0.7s;
        cursor: pointer;
        border: 1px solid yellow;

        :hover{
            background: var(--details);
        }
    }

    .sidebar-menu-item-class{
        display: inherit;
        justify-content: center;
        place-items: center;
        text-align: center;
        clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
        background: var(--segundary);
        width: 100px;
        height: 30px;
        margin: 0.5rem;
        transition: 0.7s;
        cursor: pointer;
        border: 1px solid yellow;


        :hover{
            background: var(--details);
        }
    }
`