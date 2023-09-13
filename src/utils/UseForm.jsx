import React from 'react'
import { useState } from 'react'

export const UseForm = (initObj = {}) => {
  const [form, setForm] = useState(initObj)

  const changed = ({ target }) => {
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value
    })
  }

  return { form, changed }
}