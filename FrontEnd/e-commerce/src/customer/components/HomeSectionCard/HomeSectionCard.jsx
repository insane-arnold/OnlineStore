import React from 'react'

const HomeSectionCard = () => {
  return (
    <div className='cursor-pointer flex flex-col item-center bg-white rounded-lg shadow-lg overflow-hidded w-[15rem] mx-3'>

        <div className='h-[13rem] w-[10rem]'>
            <img className='object-cover object-top w-full h-full' src='https://m.media-amazon.com/images/I/61JJFR2Dm4L._AC_UL480_FMwebp_QL65_.jpg' alt=''/>
        </div>

        <div className='p-4'>
            <h3 className='text-lg font-medium text-gray-900'>Nike</h3>
            <p className='mt-2 text-sm text-gray-500'>Premium Essential Cotton T-Shirt</p>

        </div>
      
    </div>
  )
}

export default HomeSectionCard
