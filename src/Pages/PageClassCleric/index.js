import { StyledContainer, StyledClasses } from '../../Styles/StyledContainer';
import ClassClericFemale from '../../Assets/Class_ClericFemale.png'
import ClassClericMale from '../../Assets/Class_ClericMale.png'
import { useState } from 'react';


export default function PageClassCleric() {
  const [gender, set_gender] = useState(true)
  const [section, set_section] = useState(1)
  
  const char = "Cleric"

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
            Items
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
              <img src={ClassClericFemale} onClick={changeImg}/>
              :
              <img src={ClassClericMale} onClick={changeImg}/>
            }
          </div>

          <div className='content_class_buttons'>
            <button onClick={openSection1}>Lore</button>
            <button onClick={openSection2}>Skills</button>
            <button onClick={openSection3}>Items</button>
          </div>

          <div className='content_class_roles'>
            <p style={{margin: "5px"}}> <strong>Role:</strong> X / Y </p>
            <p> Lorem  Lorem  Lorem  Lorem  Lorem  Lorem  Lorem  Lorem  Lorem  Lorem </p>
          </div>
        </div>

        <div className='content_right'>
          <div>
            <p className='content_class_title'> <spam style={{color: "yellow"}}>o</spam>) CLASSE </p>
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