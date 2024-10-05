import React from 'react'
import Features from '../../components/features/Features'
import Chart from '../../components/Chart.jsx/Chart'
import './Home.css'
import WidgetSm from '../../components/widgetSm/WidgetSm'
import WidgetLg from '../../components/widgetLg/WidgetLg'
import {xAxisData} from '../../datas'
function Home() {
  return (
    <div className='home'>
      <Features/>
      <Chart grid title="Mounth Data" data={xAxisData} dataKey="Sale"/>
      <div className='homeWidgets'>
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
  )
}

export default Home
