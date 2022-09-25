import BodyText from '@/components/text/body-text';
import BodyTextMedium from '@/components/text/body-text-medium';
import Heading3 from '@/components/text/heading-3';
import SwipeWrapper from '@/components/wrapper/swippe-wrapper/swipe-wrapper';
import React from 'react'
import EarthquakeInfoMobileContainer from './earthquake-info-mobile-style'

interface EarthquakeInfoMobile {
  magnitude: string;
  location: {
    region: string;
    province: string;
    country: string;
  }
  date: string;
  time: string;
}

const EarthquakeInfoMobile: React.FC<EarthquakeInfoMobile> = (props: EarthquakeInfoMobile) => {
  const {
    magnitude,
    location,
    date,
    time
  } = props

  return <EarthquakeInfoMobileContainer>
    <SwipeWrapper
      minHeight={60}
      maxHeight={240}
      isOnClick
      className='earthquake-info-swiper'
    >
      <Heading3 className="earthquake-info-title">
        <h2>Selected earthquake</h2>
      </Heading3>

      <div className="earthquake-info">
        <div className="earthquake-info-element">
          <BodyTextMedium className="earthquake-info-label">
            <p>Magnitude</p>
          </BodyTextMedium>

          <BodyText className="earthquake-info-text">
            <p>{magnitude}</p>
          </BodyText>
        </div>

        <div className="earthquake-info-element">
          <BodyTextMedium className="earthquake-info-label">
            <p>Datetime</p>
          </BodyTextMedium>

          <BodyText className="earthquake-info-text">
            <p>{date} {time}</p>
          </BodyText>
        </div>

        <div className="earthquake-info-element">
          <BodyTextMedium className="earthquake-info-label">
            <p>Location</p>
          </BodyTextMedium>

          <BodyText className="earthquake-info-text">
            <p>{location.region}</p>
          </BodyText>

          <BodyText className="earthquake-info-text">
            <p>{location.province}</p>
          </BodyText>

          <BodyText className="earthquake-info-text">
            <p>{location.country}</p>
          </BodyText>
        </div>


      </div>

    </SwipeWrapper>
  </EarthquakeInfoMobileContainer >
}

export default EarthquakeInfoMobile