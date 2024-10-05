import './WidgetLg.css'
import {transActions} from './../../datas'
function WidgetLg() {
    const Button=({type})=>{
        return <button className={"WidgetLgButton "+type}>{type}</button>
    }
    return ( 
        <div className='WidgetLg'> 
            <h3 className='WidgetLgTitle'>Latest TransActions</h3>
            <table className='WidgetLgTable'>
                <tr className='WidgetLgTr'>
                    <th className='WidgetLgTh'>Custumer</th>
                    <th className='WidgetLgTh'>Date</th>
                    <th className='WidgetLgTh'>Amount</th>
                    <th className='WidgetLgTh'>Status</th>
                </tr>
                {transActions.map((transAction)=>(
                   <tr className='WidgetLgTr'>
                   <td className='WidgetLgUser'>
                       <img src="./pics/react.png" alt="" className='WidgetLgImg'/>
                       <span className='WidgetLgName'>{transAction.customer}</span>
                   </td>
                   <td className='WidgetLgDate'>
                       {transAction.date}
                   </td>
                   <td className='WidgetLgAmount'>
                       {transAction.amount}
                   </td>
                   <td className='WidgetLgStatus'> 
                       <Button type={transAction.status}/>
                   </td>
               </tr> 
                ))}
            </table>
        </div>
    );
}

export default WidgetLg;