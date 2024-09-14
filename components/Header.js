import { useAppContext } from '../context/context'
import style from '../styles/Header.module.css'
import UserCard from './UserCard'
import WalletConnectBtn from './WalletConnectBtn'
const Header = () => {
  const { address, connectWallet, disconnectWalletHandler } = useAppContext()
  return (
    <div className={style.wrapper}>
      <div className={style.title}>Lottery DAPP 💰</div>
      {!address ? (
        <WalletConnectBtn connectWallet={connectWallet} />
      ) : (
        <UserCard address={address} disconnectWalletHandler={disconnectWalletHandler} />
      )}
    </div>
  )
}
export default Header
