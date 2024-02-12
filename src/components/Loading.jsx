  import React from 'react'

  const Loading = () => {
  return (
  <div className="flex items-center justify-center h-screen absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%]">
  <div className="relative">
      <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200"></div>
      <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-blue-500 animate-spin">
      </div>
  </div>
  </div>
  )
  }

  export default Loading

  