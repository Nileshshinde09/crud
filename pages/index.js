import CustomHead from '../components/head';
import Home from '@/components/home';
export default function Index() {
  return (
    <>
      <CustomHead/>
      <main  className='bg-white text-stone-900 h-auto'>
      <Home/>
      </main>
    </>
  )
}
