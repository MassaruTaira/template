import React from 'react';
import { FormContainer, Input, TextArea } from './styles';
import { useForm } from 'react-hook-form';

export default function FormItem() {
    return (
        <FormContainer>
          <Input placeholder="Name" required
            onChange={e => console.log(e)}
          />
          <Input placeholder="E-mail" type="email" required />
          
          <TextArea placeholder="Message" required/>
          <button type="submit">Send</button>
        </FormContainer>
    )
}

// type Profile = {
//   firstname: string
//   errors: string
// }

// function App() {
//   const {register, handleSubmit, errors} = useForm<Profile>();

//   const onSubmit = handleSubmit((data) => {
//     alert(JSON.stringify(data))
//   })

//   return (
//     <form onSubmit={onSubmit}>
//       <div>
//         <label htmlFor="firstname">First Name</label>
//         <input ref={register({ required: true })} id="firstname" name="firstname" type="text"/>
//         {
//           errors.firstname && <div className="error">Enter your name</div>
//         }
//       </div>
//     </form>
//   )
// }