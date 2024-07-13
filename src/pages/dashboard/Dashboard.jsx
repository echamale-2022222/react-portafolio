import { Navbar } from '../../components/navbar'
import { Inicio } from '../../components/inicio'
import { Sobremi } from '../../components/sobreMi'
import { Metas } from '../../components/metas'
import { Proyectos } from '../../components/proyectos'

export const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <Inicio />
      <Sobremi />
      <Metas />
      <Proyectos />
    </div>
  )
}
