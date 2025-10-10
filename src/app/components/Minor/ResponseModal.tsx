import React from 'react'
import { useState, useEffect } from 'react'

type response = {
    responses: string
}

const ResponseModal = ({responses}:response) => {
    const [color, setColor] = useState('')

    useEffect(() => {
        if (responses == 'Product added successfully') {
        setColor('bg-green')
        } else {
            setColor('bg-red')
        }
    }, [])

  return (
    <div className={`text-white ${color} w-full text-center py-2`}>
        {responses}
    </div>
  )
}

export default ResponseModal
