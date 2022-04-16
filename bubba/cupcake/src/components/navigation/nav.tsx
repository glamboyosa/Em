import { AvatarFallback, Root as Avatar } from '@radix-ui/react-avatar'
import { ArrowLeftIcon } from '@radix-ui/react-icons'
import { Root as Popover, Trigger, Content } from '@radix-ui/react-popover'
import styles from '../../styles/navigation.module.css'
const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ArrowLeftIcon className={styles.arrow} />
      <Avatar className={styles.avatar}>
        <Popover>
          <Trigger asChild>
            <AvatarFallback className={styles.avatarFallback}>
              TO
            </AvatarFallback>
          </Trigger>
          <Content className={styles.flex}>
            <div>Analytics 📈</div>
            <div>Custom Links 🔗</div>
            <div>Log out 🙁</div>
          </Content>
        </Popover>
      </Avatar>
    </nav>
  )
}

export default Nav
