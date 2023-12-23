import React from 'react'

function InfoBox({children,title,tileIcon}) {
  return (
    // <div className="container mx-auto">
      <div className="w-[250px] h-min-[300px] max-h-full shadow-2xl rounded-md bg-opacity-90 border border-gray-200 flex flex-col gap-4 items-center overflow-hidden">
        <div className="p-4 bg-sky-800 text-white flex items-center justify-between w-full ">
          <h3 className="text-lg font-semibold font-tajawal font-extrabold leading-relaxed">
            {title}
          </h3>
          {tileIcon}
        </div>
        <div className='w-full'>{children}</div>
      </div>
    // </div>
  );
}

export default InfoBox
