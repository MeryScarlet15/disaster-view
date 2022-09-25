import TableLastEarthquakes from '@/components/tables/table-last-earthquakes/table-last-earthquakes';
import Heading3 from '@/components/text/heading-3';
import React from 'react'
import LastEarthquakesContainer from './last-earthquakes-style'

interface LastEarthquakesProps {
  className?: string;
  lastEarthquakes: any[];
}

const LastEarthquakes: React.FC<LastEarthquakesProps> = (props: LastEarthquakesProps) => {
  const {
    className,
    lastEarthquakes
  } = props;

  return <LastEarthquakesContainer
    className={className || ''}
  >
    <Heading3>
      <h2 className="last-earthquakes-title">
        Last Earthquakes
      </h2>
    </Heading3>

    <TableLastEarthquakes
      rows={lastEarthquakes}
    />

  </LastEarthquakesContainer>
}

export default LastEarthquakes