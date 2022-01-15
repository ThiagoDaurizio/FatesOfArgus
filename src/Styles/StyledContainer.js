import styled from "styled-components"

export const StyledContainer = styled.div`
    background: var(--darker);
    color: var(--lighter);
    width: 100%;
    height: 92vh;
`

export const StyledClasses = styled.div`
    display: flex;
    margin-top: 10px;
    margin-left: 10px;

    .content_left{
        width: 225px;
        margin: 0;

        p{
            margin: 0
        }
    }

    .content_class_image{


            img{
            border: 3px solid var(--primary);
            border-radius: 5px;
            cursor: pointer;
            width: 225px;
            height: 375px;
            }
    }

    .content_class_buttons{
        display: flex;
        justify-content: space-around;
        margin: 10px;

        button{
            width: 50px;
            height: 25px;
            background-color: var(--darker);
            border: 1px solid var(--primary);
            transition: ease-in-out 0.5s;
            border-radius: 2px;
            cursor: pointer;
            color: var(--details);
            font-weight: bold;

            :hover{
                box-shadow: 0 0 15px var(--segundary);
                background-color: var(--segundary);
                color: var(--lighter);
            }

            :active{
                box-shadow: 0 0 15px var(--primary);
                background-color: var(--segundary);
                color: var(--primary);
            }
        }
    }

    .content_right{
        margin: 15px;
        width: 100%;
    }
    
    .content_class_title{
        margin: 0;
        margin-bottom: 5px;
        font-size: 1.2em;
        font-weight: bold;
    }
    .content_class_subtitle{
        font-style: italic;
        font-size: 0.9em;
        margin: 5px;
    }

    .sections_area{
        height: 95%;

    }
    
    .section1_lore{
        height: 95%;
        border: 2px solid var(--primary);
        border-radius: 10px;
        padding: 7px 5px;
    }

    .section2_skills{
        height: 95%;
        border: 2px solid var(--primary);
        border-radius: 10px;
        padding: 7px 5px;
    }

    .section3_items{
        height: 95%;
        border: 2px solid var(--primary);
        border-radius: 10px;
        padding: 7px 5px;
    }
`