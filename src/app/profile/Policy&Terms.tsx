'use Client'
import React, { useState } from 'react'
import PrivacyPolicy from './PrivacyPolicy'
import TermsOfUse from './TermsOfUse'


const PolicyAndTerms = () => {

    const [view, setview] = useState('policy')

    // const changeView =  () => {
    //     setview('terms')
    // }
    //  const changeView2 =  () => {
    //     setview('policy')
    // }

  return (
    <div>
        <div className='flex gap-5 px-10 py-5 text-2xl font-semibold border-b-2 border-black'>
            <h2 onClick={()=> setview('policy')} className='hover:cursor-pointer hover:underline'>Privacy Policy</h2>
            <h2 onClick={()=> setview('terms')} className='hover:cursor-pointer hover:underline'>Terms Of Use</h2>
        </div>
      {
        view === 'policy' ? 
        (
        <PrivacyPolicy/>
        ) 
        :
        (
        <TermsOfUse/>
        )
      }
    </div>
  )
}

export default PolicyAndTerms
