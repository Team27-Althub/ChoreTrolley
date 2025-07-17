'use client'
import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'

type AuthenticationProps = {
  buttonType: string
}

const LoginTypeButton = ({ buttonType }: AuthenticationProps) => {
  
  return (
    <div>
      <Button variant={'loginMain'} className="text-[18px] rounded-2xl ">
        {buttonType}
      </Button>
    </div>
  )
}

export default LoginTypeButton
