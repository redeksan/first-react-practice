import '../../styles/LoginForm.css'

interface LoginFormModalPoprs {
  close: () => void
  errors: {
    nicknameE: string
    firstNameE: string
    lastNameE: string
    dateOfBirthE: string
    passwordE: string
  }
}

const LoginFormModal = (props: LoginFormModalPoprs) => {
  const errList = Object.values(props.errors)
  return (
    <div className="modal-backdrop">
      <div className="modal-box">
        <p>Modal</p>
        {errList.map((e, i) => {
          return <div key={i}>{e}</div>
        })}
        <button onClick={() => props.close()}>close modal</button>
      </div>
    </div>
  )
}

export default LoginFormModal
