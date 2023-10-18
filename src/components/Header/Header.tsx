import '../../styles/Header.css'

interface HeaderProps {
  userNickname: string
}

const Header = (props: HeaderProps) => {
  // useEffect(() => {
  //   console.log('header', props.userNickname)
  // }, [props.userNickname])
  return (
    <>
      <div className="header-box">
        <h2>
          {props.userNickname !== ''
            ? `Hello, ${props.userNickname}`
            : 'Log in please'}
        </h2>
      </div>
    </>
  )
}

export default Header
