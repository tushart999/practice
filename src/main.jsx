import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Exercise from './Exercise.jsx'
import Demo from './Demo.jsx'
import { Second } from './Exercise.jsx'
import State from './State.jsx'
import Counter from './Counter.jsx'
import Toggle from './Toggle.jsx'
import MultipleToggle from './MultipleToggle.jsx'
import Props from './Props.jsx'
import DefaultPropss from './DefaultPropss.jsx'
import InputField from './InputField.jsx'
import Task1 from './task1.jsx'
import Checkbox from './Checkbox.jsx'
import Radio from './Radio.jsx'
import Loop from './loop.jsx'
import ReuseLoop from './ReuseLoop.jsx'
import Clock from './Clock.jsx'
import Dropdown from './Dropdown.jsx'
import CollegeNames from './CollegeNames.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Exercise />
    <Second/>
    <Demo/>
    <State/>
    <Counter/>
    <Toggle/>
    <MultipleToggle/>
    <DefaultPropss/>
    <InputField/>
    <Task1/> */}
    {/* <Checkbox/>
    <Radio/> */}
    {/* <Loop/>
    <ReuseLoop/> */}
    {/* <Clock/> */}
    <Dropdown/>
    <CollegeNames/>
  </StrictMode>,
)
