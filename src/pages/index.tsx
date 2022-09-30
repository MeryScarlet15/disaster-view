import TableLastEarthquakes from '@/components/tables/table-last-earthquakes/table-last-earthquakes'
import EarthquakeInfoDesktop from '@/containers/home/earthquake-info/earthquake-info-desktop/earthquake-info-desktop'
import EarthquakeInfoMobile from '@/containers/home/earthquake-info/earthquake-info-mobile/earthquake-info-mobile'
import LastEarthquakes from '@/containers/home/last-earthquakes/last-earthquakes'
import MapEarthquakes from '@/containers/home/map-earthquakes/map-earthquakes'
import MainLayout from '@/containers/layouts/main-layout/main-layout'
import HomeContainer from '@/page-styles/home-style'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import styles from '../../styles/Home.module.css'

import disasterViewsApi from '../lib/disaster-views-api/disaster-views-api'

const DEFAULT_EARTHQUAKES = [{
  magnitude: '3.8 M(mb)',
  location: {
    region: 'Golfo de Cádiz',
    province: 'Andalucía',
    country: 'Spain'
  },
  date: '2022/08/18',
  time: '09:24'
},
{
  magnitude: '3.8 M(mb)',
  location: {
    region: 'Golfo de Cádiz',
    province: 'Andalucía',
    country: 'Spain'
  },
  date: '2022/08/18',
  time: '09:24'
},
{
  magnitude: '3.8 M(mb)',
  location: {
    region: 'Golfo de Cádiz',
    province: 'Andalucía',
    country: 'Spain'
  },
  date: '2022/08/18',
  time: '09:24'
},
{
  magnitude: '3.8 M(mb)',
  location: {
    region: 'Golfo de Cádiz',
    province: 'Andalucía',
    country: 'Spain'
  },
  date: '2022/08/18',
  time: '09:24'
},
{
  magnitude: '3.8 M(mb)',
  location: {
    region: 'Golfo de Cádiz',
    province: 'Andalucía',
    country: 'Spain'
  },
  date: '2022/08/18',
  time: '09:24'
}]

const getEarthquakes = async () => {
  const earthquakes = await disasterViewsApi.earthquakes.getEarthquakes(['id', 'magnitude'])
  console.log(earthquakes)
}

const Home: React.FC = () => {

  useEffect(() => {
    console.log('...', process.env.NEXT_PUBLIC_API_URL)

    getEarthquakes()
  }, [])

  return <HomeContainer>
    <MainLayout
      mainClassName='main-home'
    >
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

      <section className="section-earthquake-info">

        <LastEarthquakes
          className="article-last-earthquakes"
          lastEarthquakes={DEFAULT_EARTHQUAKES}
        />

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

      <section className="section-earthquake-map">
        <MapEarthquakes
          earthquakes={[]}
        />
      </section>


    </MainLayout>
  </HomeContainer>
}

export default Home
