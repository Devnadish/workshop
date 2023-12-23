import React from 'react'

function PageTitle({ title, icon, bgColor = "bg-sky-800" }) {
  return (
    <div
      className={`  w-full  shadow-lg mb-4 mt-1 h-14  flex items-center justify-center gap-4 `}
    >
      <div
        className={`text-xl font-bold ${bgColor} flex items-center justify-center gap-2 rounded  text-center py-1 px-3`}
      >
        <h1> {title}</h1>
        {icon}
      </div>
    </div>
  );
}

export default PageTitle
