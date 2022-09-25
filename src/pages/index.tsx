import EarthquakeInfoDesktop from '@/containers/home/earthquake-info/earthquake-info-desktop/earthquake-info-desktop'
import EarthquakeInfoMobile from '@/containers/home/earthquake-info/earthquake-info-mobile/earthquake-info-mobile'
import MainLayout from '@/containers/layouts/main-layout/main-layout'
import HomeContainer from '@/page-styles/home-style'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

const Home: React.FC = () => {
  return <HomeContainer>
    <MainLayout>
      <EarthquakeInfoMobile
        className='earthquake-info-mobile'
        magnitude='3.8 M(mb)'
        location={{
          region: 'Golfo de Cádiz',
          province: 'Andalucía',
          country: 'Spain'
        }}
        date='2022/08/18'
        time='09:24'
      />

      <section className="earthquake-info-section">
        <EarthquakeInfoDesktop
          className="article-selected-earthquake"
          magnitude='3.8 M(mb)'
          location={{
            region: 'Golfo de Cádiz',
            province: 'Andalucía',
            country: 'Spain'
          }}
          date='2022/08/18'
          time='09:24'
        />
      </section>


    </MainLayout>
  </HomeContainer>
}

export default Home
