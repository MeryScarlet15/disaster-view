import BodyTextMedium from '@/components/text/body-text-medium'
import LabelText from '@/components/text/label-text'
import React from 'react'
import TableLastEarthquakesContainer from './table-last-earthquakes-style'

interface TableLastEarthquakesProps {
  rows: any[]
}

const TableLastEarthquakes: React.FC<TableLastEarthquakesProps> = (props: TableLastEarthquakesProps) => {
  const { rows } = props;

  return <TableLastEarthquakesContainer>
    <thead>
      <tr className="main-table-row main-table-head">
        <th className="main-table-column main-table-column-title">
          <BodyTextMedium>
            <p>Magnitude.</p>
          </BodyTextMedium>
        </th>

        <th className="main-table-column main-table-column-title">
          <BodyTextMedium>
            <p>Date</p>
          </BodyTextMedium>
        </th>

        <th className="main-table-column main-table-column-title">
          <BodyTextMedium>
            <p>Location</p>
          </BodyTextMedium>
        </th>
      </tr>
    </thead>
    <tbody>
      {rows.map((row: any, index: number) => <tr
        className={`main-table-row`}
        key={index}
      >
        <td
          className="main-table-column"
        >
          <LabelText>
            <p>{row.magnitude}</p>
          </LabelText>
        </td>

        <td
          className="main-table-column"
        >
          <LabelText>
            <p>{row.date}</p>
          </LabelText>
        </td>

        <td
          className="main-table-column"
        >
          <LabelText>
            <p>{row.location.region} {row.location.province} {`(${row.location.country})`}</p>
          </LabelText>
        </td>
      </tr>
      )}
    </tbody>
  </TableLastEarthquakesContainer>
}

export default TableLastEarthquakes