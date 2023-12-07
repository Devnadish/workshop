"use client"
import { Button } from '@/components/ui/button';
import { Delete, Edit, Trash, View } from 'lucide-react';
import React from 'react'

function CardAction({Cid,onEdit,onDelete}) {
  return (
    <div className="flex  px-6 pt-4 pb-2 w-full items-center justify-center gap-4">
      <Button
        onClick={() => onEdit(Cid)}
        className="bg-gray-300/20  hover:bg-blue-200 text-blue-500 py-2 px-4 rounded-md flex items-center gap-3"
      >
        تعديل
        <Edit className="text-blue-500"/>
      </Button>
      <Button
        onClick={() => onDelete(Cid)}
        className="bg-gray-300/20  hover:bg-red-200 text-red-600 py-2 px-4 rounded-md ml-2 flex items-center gap-3"
      >
        حذف
        <Trash className="text-red-600"/>
      </Button>
      <Button
        onClick={() => onDelete(id)}
        className="bg-gray-300/20 text-green-600  hover:bg-green-200  py-2 px-4 rounded-md ml-2 flex items-center gap-3"
      >
        التفاصيل
        <View className="text-green-600"/>
      </Button>
    </div>
  );
}

export default CardAction
