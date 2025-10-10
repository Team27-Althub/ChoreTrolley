'use client'
import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'

type AuthenticationProps = {
  buttonType: string
}

const MenuButton = ({ buttonType }: AuthenticationProps) => {
  const [variant, setVariant] = useState<'default' | 'outline'>('default')

  useEffect(() => {
    setVariant(buttonType === 'Login' ? 'default' : 'outline')
  }, [buttonType])

  return (
    <div>
      <Button variant={variant} className="text-[18px] p-2 rounded-md hover:cursor-pointer">
        {buttonType}
      </Button>
    </div>
  )
}

export default MenuButton
