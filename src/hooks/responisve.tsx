import { ReactNode } from 'react'
import { useMediaQuery } from 'react-responsive'

interface Reponsive {
  children: ReactNode
}

export function useResponsive() {
  const Desktop = ({ children }: Reponsive) => {
    const isDesktop = useMediaQuery({ minWidth: 992 })
    return isDesktop ? children : null
  }
  const Tablet = ({ children }: Reponsive) => {
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
    return isTablet ? children : null
  }
  const Mobile = ({ children }: Reponsive) => {
    const isMobile = useMediaQuery({ maxWidth: 767 })
    return isMobile ? children : null
  }
  const Default = ({ children }: Reponsive) => {
    const isNotMobile = useMediaQuery({ minWidth: 768 })
    return isNotMobile ? children : null
  }

  return {
    Desktop,
    Tablet,
    Mobile,
    Default,
  }
}
