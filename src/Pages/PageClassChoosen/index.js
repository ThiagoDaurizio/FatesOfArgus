import { StyledContainer, StyledClasses } from '../../Styles/StyledContainer';
import ClassChoosenMale from '../../Assets/Class_ChoosenMale.png'
import ClassChoosenFemale from '../../Assets/Class_ChoosenFemale.png'
import { useContext, useState } from 'react';
import GlobalStateContext from '../../Global/GlobalStateContext';
import { useHistory } from 'react-router-dom';

export default function PageClassChoosen() {
  const { states } = useContext(GlobalStateContext)
  const [gender, set_gender] = useState(false)
  const [section, set_section] = useState(1)
  
  const char = "Choosen"

  const changeImg = () => {
    set_gender(!gender)
  }


  const openSection1 = () => {
    set_section(1)
  }

  const openSection2 = () => {
    set_section(2)
  }

  const openSection3 = () => {
    set_section(3)
  }

  const actualSection = () => {
    switch (section) {
      case 2:
        return(
          <div className='section2_skills'>
            Skills
          </div>)
      case 3:
        return(
          <div className='section3_items'>
            Itens
          </div>)
      default:
        return(
          <div className='section1_lore'>
            Lore
          </div>)
    }
  }

  return (
    <StyledContainer>
      <StyledClasses>
        <div className='content_left'> 
          <div className="content_class_image">
            {
              gender
              ?
              <img src={ClassChoosenFemale} onClick={changeImg}/>
              :
              <img src={ClassChoosenMale} onClick={changeImg}/>
            }
          </div>

          <div className='content_class_buttons'>
            <button onClick={openSection1}>Lore</button>
            <button onClick={openSection2}>Skills</button>
            <button onClick={openSection3}>Items</button>
          </div>

          <div className='content_class_roles'>
            <p style={{margin: "5px"}}> <strong>Função:</strong> Controle | DPS </p>
            <p> Lorem  Lorem  Lorem  Lorem  Lorem  Lorem  Lorem  Lorem  Lorem  Lorem </p>
          </div>
        </div>

        <div className='content_right'>
          <div>
            <p className='content_class_title'> <spam style={{color: "blue"}}>o</spam>) CLASSE </p>
            <spam className='content_class_subtitle'> "descrition text here" </spam>
          </div>

          <div className='sections_area'>
            {actualSection()}
          </div>
          
        </div>
      </StyledClasses>
    </StyledContainer>
    )
}

          {/* {states.classes && states.classes.filter((item) => {
            return char.toUpperCase() === item.name.toUpperCase()
          }).map((item) => {
            return <h3 key={item.id}> <spam>o)</spam> {item.name}</h3>
          })} */}