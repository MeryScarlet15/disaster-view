import { colors } from '@/public/colors/colors'
import styled from 'styled-components'

const TableLastEarthquakesContainer = styled.table`
  width: 100%; 
  .main-table-row {
    cursor: pointer;
    border-bottom: 1px solid ${colors.white};
    margin-bottom: 0px;
    text-align: left;

    .main-table-column {
      padding: 4px;
      color: ${colors.white};
    }

    &.main-table-column-title {
      font-weight: 700; 
      color: ${colors.white};

    }
  }

`

export default TableLastEarthquakesContainer