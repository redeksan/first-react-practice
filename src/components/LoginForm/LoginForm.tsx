import '../../styles/LoginForm.css'
import { useState, FormEvent } from 'react'
import InputForm from './InputForm'
import LoginFormModal from './LoginFormModal'

const NICKNAME_REGEX = /^[A-z0-9-_,.]{2,20}$/
const FIRST_AND_LASTTNAME_REGEX = /^[A-z]{2,10}$/
const PASSWORWD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{12,40}$/
const DATE_REGEX =
  /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/

type UserType = {
  nickname: string
  firstName: string
  lastName: string
  dateOfBirth: Date
  password: string
}

interface LoginFormProps {
  setUsetNickname: React.Dispatch<React.SetStateAction<string>>
  setIsLogedIn: React.Dispatch<React.SetStateAction<boolean>>
}

const LoginForm = (props: LoginFormProps) => {
  const [user, setUser] = useState<UserType>({
    nickname: '',
    firstName: '',
    lastName: '',
    dateOfBirth: new Date(),
    password: '',
  })
  const [errors, setErrors] = useState({
    nicknameE: '',
    firstNameE: '',
    lastNameE: '',
    dateOfBirthE: '',
    passwordE: '',
  })
  const [modalOpen, setModalOpen] = useState(false)

  const openModal = () => {
    setModalOpen(true)
  }
  const closeModal = () => {
    setModalOpen(false)
  }

  const validate = () => {
    let nicknameErrMsg = ''
    let firstNameErrMsg = ''
    let lastNameErrMsg = ''
    let passwordErrMsg = ''
    let dateOfBirthErrMsg = ''

    if (!NICKNAME_REGEX.test(user.nickname)) {
      nicknameErrMsg =
        '"Nickname" field, validate so it could contain only english letters, dashes, underscores, periods and commas. 20 charactes max'
    }
    if (!FIRST_AND_LASTTNAME_REGEX.test(user.firstName)) {
      firstNameErrMsg = 'First Name" english letters, 10 charactes max'
    }
    if (!FIRST_AND_LASTTNAME_REGEX.test(user.lastName)) {
      lastNameErrMsg = 'Last Name" english letters, 10 charactes max'
    }
    if (!PASSWORWD_REGEX.test(user.password)) {
      passwordErrMsg =
        'Password" english letters, should contain uppercase and lowercase letters, special characters and numbers, use one should be at least 12 characters in length'
    }
    if (
      !DATE_REGEX.test(
        user.dateOfBirth.toString().split('-').reverse().join('-')
      )
    ) {
      dateOfBirthErrMsg = 'Your birth was INVALID'
    }
    setErrors({
      ...errors,
      nicknameE: nicknameErrMsg,
      firstNameE: firstNameErrMsg,
      lastNameE: lastNameErrMsg,
      passwordE: passwordErrMsg,
      dateOfBirthE: dateOfBirthErrMsg,
    })
    if (
      nicknameErrMsg ||
      firstNameErrMsg ||
      lastNameErrMsg ||
      passwordErrMsg ||
      dateOfBirthErrMsg
    ) {
      console.log(
        '-',
        nicknameErrMsg,
        lastNameErrMsg,
        firstNameErrMsg,
        passwordErrMsg,
        dateOfBirthErrMsg
      )
      openModal()
    } else {
      console.log('+')
      props.setUsetNickname(user.nickname)
      props.setIsLogedIn(true)
    }
  }

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    validate()
  }

  return (
    <>
      <form onSubmit={submitHandler} className="login-form-box">
        <InputForm
          type={'text'}
          title={'nickname'}
          setUser={setUser}
          user={user}
          inputValue={'nickname'}
        />
        <InputForm
          type={'text'}
          title={'firstName'}
          setUser={setUser}
          user={user}
          inputValue={'firstName'}
        />
        <InputForm
          type={'text'}
          title={'lastName'}
          setUser={setUser}
          user={user}
          inputValue={'lastName'}
        />
        <InputForm
          type={'date'}
          title={'dateOfBirth'}
          setUser={setUser}
          user={user}
          inputValue={'dateOfBirth'}
        />
        <InputForm
          type={'text'}
          title={'password'}
          setUser={setUser}
          user={user}
          inputValue={'password'}
        />

        <button type="submit">Login</button>
      </form>

      {modalOpen && <LoginFormModal close={closeModal} errors={errors} />}
      {/* <button onClick={() => setModalOpen(!modalOpen)}>test modal</button> */}
    </>
  )
}

export default LoginForm
