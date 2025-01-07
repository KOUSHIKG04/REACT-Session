import React from 'react'
import { Controller } from 'react-hook-form'
import { Label } from './ui/label'
import { Editor } from '@tinymce/tinymce-react'


const RTE = ({name , control, label, defaultValue = ""}) => {

  return (
    <div className='w-full'>
      {
        label && <Label className="inline-block mb-2 text-sm pl-1"></Label>
      }
      <Controller />
    </div>
  )
}

export default RTE
