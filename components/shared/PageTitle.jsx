import React from 'react'

function PageTitle({ title,icon }) {
  return (
    <div
      className="bg-blue-400 w-full rounded-md  text-center py-2
     shadow-lg mb-4 mt-1  flex items-center justify-center gap-4 "
    >
      <h1 className="text-xl font-bold"> {title}</h1>
      {icon}
    </div>
  );
}

export default PageTitle
