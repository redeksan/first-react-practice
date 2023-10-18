import { ChangeEvent } from 'react'

type UserType = {
  nickname: string
  firstName: string
  lastName: string
  dateOfBirth: Date
  password: string
}

interface InputFormProps {
  type: string
  title: string
  user: UserType
  setUser: React.Dispatch<React.SetStateAction<UserType>>
  inputValue: string
}

const InputForm = (props: InputFormProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    props.setUser({ ...props.user, [props.inputValue]: e.target.value })
  }

  return (
    <>
      <label htmlFor={props.inputValue} className="inputForm-lable">
        {props.title}
      </label>
      <input
        id={props.inputValue}
        type={props.type}
        onChange={handleChange}
        className="inputForm-input"
      />
    </>
  )
}

export default InputForm
