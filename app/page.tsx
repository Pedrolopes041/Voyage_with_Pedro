import { ArrowBigRight, MapPin, Calendar } from 'lucide-react'

const Home = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="px-6 text-center space-y-10 ">
        <div className='flex flex-col items-center gap-3'>
          <img src='' alt='Voyage with Pedro'/>
          <p className="text-zinc-300 text-lg">Convide seus amigos e planeje sua próxima viagem!</p>
        </div>



        <div className='h-16 bg-zinc-900 px-4 rounded-xl flex items-center gap-3'>

          <div className='flex items-center gap-2'>
            <MapPin className='size-5 text-zinc-400' />
            <input type='text' placeholder='Para onde você vai?' className='bg-transparent text-lg placeholder-zinc-400 outline-none' />
          </div>

          <div className='flex items-center gap-2'>
            <Calendar className='size-5 text-zinc-400' />
            <input type='text' placeholder='Para onde você vai?' className='bg-transparent text-lg placeholder-zinc-400 outline-none' />
          </div>

          <button className='bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400'>
            Continuar
            <ArrowBigRight className='size-5' />
          </button>

        </div>

        <p className="text-sm text-zinc-500">Ao planejar sua viagem pelo Voyage with Pedro você automaticamente concorda <br /> com o nossos <a className="text-zinc-300 underline">termos de uso</a> e <a className="text-zinc-300 underline">políticas de privacidade</a></p>
      </div>
    </div>

  );
}

export default Home
