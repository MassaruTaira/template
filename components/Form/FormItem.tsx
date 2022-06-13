import React from 'react';
import { FormContainer, Input, TextArea } from './styles';
import { useForm } from 'react-hook-form';

// export default function FormItem() {
//     return (
//         <FormContainer>
//           <Input placeholder="Name" required
//             onChange={e => console.log(e)}
//           />
//           <Input placeholder="E-mail" type="email" required />
          
//           <TextArea placeholder="Message" required/>
//           <button type="submit">Send</button>
//         </FormContainer>
//     )
// }

type Profile = {
  nickname: string
  nicknamelabel:string
  strength: number
  intelligence: number
  agility: number
  resistance: number
  aura: number
  errors: string
}

export default function FormItem() {
  const {register, handleSubmit, getValues, setValue, formState:{errors}} = useForm<Profile>()

  const onSubmit = handleSubmit((form) => {
    alert(JSON.stringify(form))
  })

  return (
      <form onSubmit={onSubmit}>
        <FormContainer>
        <Input {...register('nickname',{maxLength: 8 , required: true })} placeholder="Nick Name" id="nickname" name="nickname" type="text"/>
          {
          errors.nickname && <div className="error">Enter your nick name</div>
          }
        {/* <label htmlFor="nickname">Intelligence (1 ~ 5)</label> */}
        <Input {...register('strength',{ required: true })} placeholder="Strength (1 ~ 5)" id="strength" name="strength" type="number" />
          {
          errors.strength && <div className="error">Enter only number 1 ~ 5</div>
          }
        <Input {...register('intelligence',{ required: true })} placeholder="Intelligence (1 ~ 5)" id="intelligence" name="intelligence" type="number"/>
          {
          errors.intelligence && <div className="error">Enter only number 1 ~ 5</div>
          }
        <Input {...register('agility',{ required: true })} placeholder="Agility (1 ~ 5)" id="agility" name="agility" type="number" />
          {
            errors.agility && <div className="error">Enter only number 1 ~ 5</div>
          }
        <Input {...register('resistance',{ required: true })} placeholder="Resistance (1 ~ 5)" id="resistance" name="resistance" type="number"/>
          {
            errors.resistance && <div className="error">Enter only number 1 ~ 5</div>
          }
        <Input {...register('aura',{ required: true })} placeholder="Aura (1 ~ 5)" id="aura" name="aura" type="number"/>
          {
            errors.aura && <div className="error">Enter only number 1 ~ 5</div>
          }
      {/* <button type="button" onClick={() => {
        //const nick = getValues("nickname")
        var nick:string = getValues("nickname")
        const str = getValues("strength")
        const int = getValues("intelligence")
        const agi = getValues("agility")
        const res = getValues("resistance")
        const au = getValues("aura")
        //melhorar*
      }}> */}
      <button type="button" onClick={onSubmit}>
        Submit
      </button>
      {/* <Input {...register('nicknamelabel',{ required: true })} placeholder="Nick Name" id="nicknamelabel" name="nicknamelabel" type="text"/>
      {
          errors.nicknamelabel && <div className="error">Enter your nick name</div>
      } */}
      <div>
        {getValues('nickname')}
      </div>
      <button type="button" onClick={() => {
        setValue("nicknamelabel", "Nick")
      }}>
        Show
      </button>
      </FormContainer>
    </form>
  )
}

// function discovery( str, int, agi, res, au ) : number{

//   let classRPG: string

//   return(
//     if (str === 5){
//      classRPG = "Warrior"
//     }
//   )
// }