import React from 'react'

function PageTitle({ title, icon, bgColor = "bg-sky-800" }) {
  return (
    <div
      className={` ${bgColor} w-full rounded  text-center py-2
     shadow-lg mb-4 mt-1  flex items-center justify-center gap-4 `}
    >
      <h1 className="text-xl font-bold"> {title}</h1>
      {icon}
    </div>
  );
}

export default PageTitle
