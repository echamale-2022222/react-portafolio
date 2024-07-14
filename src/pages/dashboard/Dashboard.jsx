import Navbar from '../../components/navbar/Navbar'
import { Inicio } from '../../components/inicio'
import { Sobremi } from '../../components/sobreMi'
import { Metas } from '../../components/metas'
import  Proyectos  from '../../components/proyectos/Proyectos'

export const Dashboard = () => {
  return (
    <div className='bg-[#020617]'>
      <Navbar />
      <Inicio />
      <Sobremi />
      <Metas />
      <Proyectos />
    </div>
  )
}
