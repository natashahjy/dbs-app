import { BarChart } from "../../charts";
import React from 'react';
import DropdownButton from "../../utility/DropdownButton";
import '../subCardCSS/BarCard.css';

const BarCard = ({ inputObject, colorData}) => {
    return (
        <div className='bar dashboard-card'>
            <div className='card-head'>
                <div className='title'>{ inputObject.title }</div>
                <DropdownButton defaultText={ "..." } onSelection={()=> {}} options={['wevqwe','wef','ewqew','qwev']}></DropdownButton>
            </div>

            <div className='card-body'>
                <BarChart inputObject={ inputObject } colorData={ colorData }></BarChart>
                <div className='captions'>
                {
                inputObject.xdata.map((dataPoint) => (
                    <div className='caption'>
                        <div className='icon' style={{
                            backgroundColor: colorData[inputObject.xdata.indexOf(dataPoint)],
                            width: '20px',
                            height: '20px',
                            borderRadius: '50%'
                        }}></div>
                        <div className='description'>{ dataPoint}</div>
                        <div className='caption-bottom value'>{ inputObject.ydata[inputObject.xdata.indexOf(dataPoint)] }</div>
                    </div>
                ))
                }
                    
                </div>
            </div>
        </div>
)
}

export default BarCard;

