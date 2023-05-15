import { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import './App.css'

function App() {
  const [width, setWidth] = useState()
  const [height, setHeight] = useState()
  const [entity, setEntity] = useState({ gridWidth: 0, gridHeight: 0 })
  const [colors, setColors] = useState()

  const colorList = ["green", "red", "blue", 'yellow', 'purple', 'orange', 'voilate'].slice(0, colors)

  const randomArr = Array.from({ length: entity.gridWidth * entity.gridHeight }, () => Math.floor(Math.random() * colors))

  const colorArr = colorList.length ? randomArr.map((d) => colorList[d]) : []

  const mostOccurrenceElem = [...colorArr]

  const mode = (arr) => {
    return arr.sort((a, b) =>
      arr.filter(v => v === a).length
      - arr.filter(v => v === b).length
    ).pop();
  }

  const ResponsiveGrid = () => {
    return (
      <Box sx={{ flexGrow: 1, marginTop: '40px' }}>
        <Grid container spacing={{ xs: 0.5, md: 3 }} columns={{ xs: 16, sm: 8, md: 4 * entity.gridWidth }}>
          {colorArr && colorArr.map((col, index) => {
            return (
              <Grid item xs={2} sm={4} md={4} key={index}>
                <div id='ffff' className='className' 
                style={{
                  backgroundColor: col, 
                  width: '100%', 
                  height: 'auto', 
                  marginInline: 'auto', 
                  lineHeight: '29px',
                  textAlign: 'center',
                  paddingTop: '2px'
                }}>
                  {index}
                </div>
              </Grid>
            )
          })}
        </Grid>
      </Box>
    );
  }

  const onSubmit = () => {
    setEntity({ gridWidth: width, gridHeight: height })
  }


  return (
    <>
      <div style={{alignContent: 'center', marginInline: 'auto'}}>
      <span>width: </span><input label="hhfh" value={width} onChange={(e) => setWidth(e.target.value)} />
      <span>  height: </span><input value={height} onChange={(e) => setHeight(e.target.value)} />
      <span>  color: </span><input value={colors} onChange={(e) => (e.target.value > 7) ? setColors(7) : setColors(e.target.value)} />
        <button onClick={() => onSubmit()}>click Me!</button>
      </div>
      <h1 style={{textAlign: 'center'}}>Most Occurrence Color {'{'} <span style={{color:mode(mostOccurrenceElem)}}>{mode(mostOccurrenceElem)}</span> {'}'}</h1>

      <div className='randomClass' style={{ width: `${28 * entity.gridWidth}px`, marginInline: 'auto' }}>
        <ResponsiveGrid />
      </div>
    </>
  )
}

export default App
