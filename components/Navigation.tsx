import Link from "next/link"
import styles from "@/styles/components/navigation.module.css"

export default function Navigation() {
  return (
    <div>
      <nav className={styles.nav}>
        <Link className={styles.navItem} href="/">
          Home
        </Link>
        <Link className={styles.navItem} href="/certifications">
          Certifications
        </Link>
        <Link className={styles.navItem} href="/projects">
          Projects
        </Link>
      </nav>
    </div>
  )
}
