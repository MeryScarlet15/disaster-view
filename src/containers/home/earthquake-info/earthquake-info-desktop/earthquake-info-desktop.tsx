import BodyText from '@/components/text/body-text';
import BodyTextMedium from '@/components/text/body-text-medium';
import Heading3 from '@/components/text/heading-3';
import React from 'react'
import EarthquakeInfoDesktopContainer from './earthquake-info-desktop-style'

interface EarthquakeInfoDesktop {
  magnitude: string;
  location: {
    region: string;
    province: string;
    country: string;
  }
  date: string;
  time: string;
  className?: string;
}

const EarthquakeInfoDesktop: React.FC<EarthquakeInfoDesktop> = (props: EarthquakeInfoDesktop) => {
  const {
    magnitude,
    location,
    date,
    time,
    className
  } = props

  return <EarthquakeInfoDesktopContainer
    className={className || ''}
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

      <div className="earthquake-info-element">
        <BodyTextMedium className="earthquake-info-label">
          <p>Date</p>
        </BodyTextMedium>

        <BodyText className="earthquake-info-text">
          <p>{date}</p>
        </BodyText>
      </div>

      <div className="earthquake-info-element">
        <BodyTextMedium className="earthquake-info-label">
          <p>Time</p>
        </BodyTextMedium>

        <BodyText className="earthquake-info-text">
          <p>{time}</p>
        </BodyText>
      </div>
    </div>
  </EarthquakeInfoDesktopContainer>
}

export default EarthquakeInfoDesktop