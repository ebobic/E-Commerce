"use server"

export async function createProduct(formData: FormData) {
  
  const title = formData.get('title')
  const content = formData.get('description')
 
}