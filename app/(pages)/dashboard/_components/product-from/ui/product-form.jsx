'use client'

import { useState } from "react"

export const ProductForm = () => {
  const [id, setId] = useState('')
  const [title,setTitle] = useState('')
  const [description,setDescription] = useState('')
  const [price,setPrice] = useState('')




  const onSubmit = async (e) => {
    e.preventDefault()
    const data = {
      id,
      title,
      description,
      price
    }
    const response = await fetch('https://a4ddb814deba66b5.mokky.dev/products', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    })
  }

  return <form onSubmit={onSubmit} method="POST">
    <input type="text" name='id' placeholder="Id" value={id} onChange={(e) => setId(e.target.value)} />
    <input type="text" name='title' placeholder="Название" value={title} onChange={(e) => setTitle(e.target.value)}/>
    <textarea type="text" name='description' placeholder="Описание" value={description} onChange={(e) => setDescription(e.target.value)}/>
    <input type="text" name='price' placeholder="Цена" value={price} onChange={(e) => setPrice(e.target.value)}/>
    <button type="submit">Создать товар</button>
  </form>
}