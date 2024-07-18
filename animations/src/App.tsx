import './App.css'
import AnimeJs from './components/AnimeJs/AnimeJs'
import CssAnimations from './components/css/CssAnimations'
import FramerMotion from './components/framer-motion/FramerMotion'
import ReactSpring from './components/ReactSpring/ReactSpring'
import ReactTransitionGroup from './components/ReactTransitionGroup/ReactTransitionGroup'

function App() {
  return (<>
    <CssAnimations />
    <hr />
    <ReactTransitionGroup />
    <hr />
    <FramerMotion />
    <hr />
    <AnimeJs />
    <hr />
    <ReactSpring />
  </>)
}

export default App
