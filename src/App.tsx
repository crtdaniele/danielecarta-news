import React, { Suspense } from 'react';
import 'react-notifications-component/dist/theme.css'
import 'animate.css/animate.css'
import styles from './App.module.scss'
import ReactNotification from 'react-notifications-component'
import { useTheme } from './hooks/useTheme'

const App = () => {

  const { theme } = useTheme()!;
  const DarkModeButton = React.lazy(() => import("./compontents/elements/darkModeButton/DarkModeButton"));
  const Header = React.lazy(() => import("./compontents/structure/header/Header"));
  const Listing = React.lazy(() => import("./compontents/structure/listing/Listing"));
  const Footer = React.lazy(() => import("./compontents/structure/footer/Footer"));
  const SocialButtonLinkedin = React.lazy(() => import("./compontents/elements/socialButton/SocialButtonLinkedin/SocialButtonLinkedin"));
  
  return (
    <div className={theme === "light" ? styles.App : `${styles.App} ${styles["App--dark"]}`}>
      <ReactNotification />
      <Suspense fallback="">
        <DarkModeButton></DarkModeButton>
        <Header></Header>
        <Listing></Listing>
        <Footer></Footer>
        <SocialButtonLinkedin></SocialButtonLinkedin>
      </Suspense>
    </div>
  );
}

export default App;
