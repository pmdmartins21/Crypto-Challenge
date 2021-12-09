import React from 'react';
import './Tables/Tables.css'

const Row = ({ record })=>{
  const keys = Object.keys(record)
  return(
    <tr key={record.noun}>
      {
        keys.map( key => <td key={key}>{record[key]}</td>)
      }
    </tr>
  )
}
const Tables = ({ data }) => {
  const keys = Object.keys(data[0])
  return (  
    <table className='tableContainer'>
        <thead  className='TableTittle tableContainer'>
            <tr>
              {
                keys.map(key => <th key={key}>{key}</th>)
              }
            </tr>
        </thead>
        <tbody className='textcolor tableContainer'>
            {
                data.map(record => <Row record={record} />)
            }
        </tbody>

    </table>
  );
}
 
export default Tables;