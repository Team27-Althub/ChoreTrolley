import React from 'react'
import bowl from '../../../../public/1.svg'
import milk from '../../../../public/milk.png'
import juice from '../../../../public/juice.svg'
import lemon from '../../../../public/lemon.svg'
import cake from '../../../../public/cake.svg'
import meat from '../../../../public/meat.svg'
import Image from 'next/image'

const GroceriesCategories = () => {
  return (
            <div className='bg-white  rounded-md py-3 shadow-xl'>
                <div className='flex justify-between px-7 pb-3'>
                  <h2 className='text-2xl font-semibold'>Available Groceries categories</h2>
                </div>
                <div className='h-[1px] bg-[#7c7c7c] w-full'></div>
                <div className='my-5 px-7 gap-5 grid grid-cols-2 md:grid-cols-3'>
                  <div className='p-2 h-36 rounded-md  flex  shadow-lg justify-between border-[1px]'>
                    <h2 className='text-xl self-start font-medium'>Fresh <br/> Produce</h2>
                    <Image src={lemon} alt="" className='h-10 md:h-15  self-end '/>
                  </div>
                  <div className='p-2 h-36 rounded-md  flex  shadow-lg justify-between border-[1px]'>
                    <h2 className='text-xl self-start font-medium'>Pantary <br/> Staples</h2>
                    <Image src={bowl} alt="" className='h-10 md:h-15  self-end '/>
                  </div>
                  <div className='p-2 h-36 rounded-md  flex  shadow-lg justify-between border-[1px]'>
                    <h2 className='text-xl self-start font-medium'>Fozen <br/> Foods</h2>
                    <Image src={juice} alt="" className='h-10 md:h-15  self-end '/>
                  </div>
                  <div className='p-2 h-36 rounded-md  flex  shadow-lg justify-between border-[1px]'>
                    <h2 className='text-xl self-start font-medium'>Dairy & <br/> Eggs</h2>
                    <Image src={milk} alt="" className='h-10 md:h-15  self-end '/>
                  </div>
                  <div className='p-2 h-36 rounded-md  flex  shadow-lg justify-between border-[1px]'>
                    <h2 className='text-xl self-start font-medium'>Meat &<br/> SeaFoods</h2>
                    <Image src={meat} alt="" className='h-10 md:h-15  self-end '/>
                  </div>
                  <div className='p-2 h-36 rounded-md  flex  shadow-lg justify-between border-[1px]'>
                    <h2 className='text-xl self-start font-medium'>Baked <br/> Goods</h2>
                    <Image src={cake} alt="" className='h-10 md:h-15  self-end '/>
                  </div>
                </div>
              </div>
  )
}

export default GroceriesCategories
