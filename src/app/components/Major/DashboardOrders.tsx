import React from 'react'
import { Button } from '@/components/ui/button'
import { useFetchResourceQuery } from '@/redux/api/crudApi'

const DashboardOrders = () => {

  const {data, isLoading, isError} = useFetchResourceQuery('/order')

  return (
                <div className='bg-white rounded-md py-3 mb-5 shadow-xl'>
                    <div className='flex justify-between px-4 py-3'>
                      <h2 className='text-2xl font-semibold'>Ongoing Orders</h2>
                      <p className='text-blue-700'>See all</p>
                    </div>
                    <div className='h-[1px] bg-[#7c7c7c] w-full'></div>
                    <div className='mt-5 px-4'>
                      {data?.data?.map((order:any) => {
                            return (
                              <div className='mb-7 '>
                                <div className='flex justify-between  mb-5'>
                                  <div>
                                    <h4 className='font-semibold text-lg'>{order.code}</h4>
                                    <p className='text-sm text-[#0000008e] '>{order.shippingMethod}</p>
                                  </div>
                                  <Button variant={order.status == 'Pending' ? 'statusPending' : order.status == 'inProgress' ? 'statusInProgress' : 'statusCompleted'}>
                                    {order.status}
                                  </Button>
                                </div>
                                <div className='h-[1px] bg-[#c7c7c7] w-full'></div>
                              </div>
                        )
                        })}
                    </div>
                  </div>
  )
}

export default DashboardOrders
