import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'

const Paging = () => {
  const { handlePageChange, page, totalPages } = useContext(AppContext);
  return (
    <div className='flex w-full hight-[40px] justify-center content-center bg-white shadow-zinc-950'>
      <div className=' w-[580px]  p-1 bg-white mt-[3rem] flex  justify-around fixed bottom-0 content-center'>

        <div className='flex gap-[2rem] font-semibold'>

          {
            page > 1 && (
              <button
              onClick={() => handlePageChange(page - 1)}
              className='text-black border p-1 rounded-lg'>Previus</button>
              )
            }
            
            {
              page < totalPages && (
                <button
                  className='text-black border p-1 rounded-lg'
                  onClick={() => handlePageChange(page + 1)}
                >Next</button>
              )
            }
        </div>

        <div className='text-sm font-mono from-neutral-500 my-auto '>
        {
          `page ${page} of ${totalPages}`
        }
        </div>
      </div>
    </div>
  )
}

export default Paging