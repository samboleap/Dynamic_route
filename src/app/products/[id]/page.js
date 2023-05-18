import React from 'react'

async function fetchProducts(id){
  const resp = await fetch(`https://fakestoreapi.com/products/${id}`)
  return resp.json()
}

export async function generateMetadata({params}){
  const product = await fetchProducts(params.id)
  return{ 
  title: product.title,
  description: product.description,
  thumbnail: product.image,
  metadataBase: new URL('https://istad.co'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE',
    },
  },
  openGraph: {
    image: product.image,
    title: product.title,
    description: product.description
  },
  }
}

export default async function ProductDetail({params}) {
    const{id} = params
    const product = await fetchProducts(id)
  return (
    <div>
    <h1>Product Detail: {product.title}</h1>
    <img src={product.image} alt={product.title}/>
    </div>
  )
}