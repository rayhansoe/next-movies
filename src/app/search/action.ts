'use server'
 
import { redirect } from 'next/navigation';
 
export default async function submit(formData: FormData) {
  redirect(`/search?q=${formData.get('q')}`)
}