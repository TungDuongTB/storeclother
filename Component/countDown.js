import { useState } from "react"
import CountDouwn from 'react-native-countdown-component'
import colors from "./colors"

export default countDouwn =()=>{
   const time = 2;
   return(
      <CountDouwn
         until={time*60*60}
         size={19}
         digitStyle={{backgroundColor:colors.blue}}
         timeToShow={['H','M','S']}
         timeLabels={{h:null,m:null,s:null}}
         digitTxtStyle={{color:'white'}}
         showSeparator
      />
   )
}
