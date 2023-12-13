import React from 'react'

function PageTitle({ title }) {
  return (
    <div className="bg-blue-400 w-full rounded-md  text-center py-2 shadow-lg mb-4 mt-1 text-base font-semibold ">
      {title}
    </div>
  );
}

export default PageTitle
