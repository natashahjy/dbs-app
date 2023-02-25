import { PieChart } from "../../charts";
import React from 'react';
import DropdownButton from "../../utility/DropdownButton";
import '../subCardCSS/PieCard.css';

const PieCard = ( { inputObject, colorData } ) => {
    return (
            <div className='pie dashboard-card'>
                <div className='card-head'>
                    <div className='title'>{ inputObject.title }</div>
                    <DropdownButton defaultText={ "..." } onSelection={()=> {}} options={['wevqwe','wef','ewqew','qwev']}></DropdownButton>
                </div>

                <div className='card-body'>
                    <PieChart inputObject={ inputObject } colorData={ colorData }></PieChart>
                    <div className='captions'>
                    {
                    inputObject.xdata.map((dataPoint) => (
                        <div className='caption'>
                            <div className='icon' style={{
                                backgroundColor: colorData[inputObject.xdata.indexOf(dataPoint)],
                                width: '20px',
                                height: '20px',
                                borderRadius: '50%',
                                boxSizing: 'border-box'
                            }}></div>
                            <div className='description'>{ dataPoint }</div>
                            <div className='caption-bottom value'>{ inputObject.ydata[inputObject.xdata.indexOf(dataPoint)] }</div>
                        </div>
                    ))
                    }
                        
                    </div>
                </div>
            </div>
    )
}

export default PieCard;