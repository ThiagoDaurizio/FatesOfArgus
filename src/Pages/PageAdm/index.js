import { useContext } from 'react';
import GlobalStateContext from '../../Global/GlobalStateContext';
import { StyledContainer } from '../../Styles/StyledContainer';
import { useForm } from '../../hooks/useForm';
import { post_NewClass, get_AllClasses } from '../../API/Request_Labefy';

export default function PageAdm() {
  const { states, setters } = useContext(GlobalStateContext)
  const { form, onChange, clearInputs } = useForm({ name: "" })

  const tryFormSubmit = (event) => {
    event.preventDefault()
    post_NewClass(form)
    clearInputs()
    get_AllClasses(setters.set_classes)
  }

  return (
    <StyledContainer>
      <form onSubmit={tryFormSubmit}>
        <input 
          placeholder={'Nome da Classe Nova'}
          name={'name'}
          value={form.name}
          onChange={onChange}
          required
          />
        <button type={'submit'}> Adicionar </button>
      </form>

        <button onClick={() => console.log("test", states.classes)}>INFO</button>
    </StyledContainer>
    )
}