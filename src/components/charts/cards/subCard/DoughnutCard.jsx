import { DoughnutChart } from '../../charts';
import DropdownButton from "../../utility/DropdownButton";
import React from 'react';
import '../subCardCSS/DoughnutCard.css';

const DoughnutCard = ( { inputObject, colorData } ) => {
    return (
            <div className='doughnut dashboard-card'>
                <div className='card-head'>
                    <div className='title'>{ inputObject.title }</div>
                    <DropdownButton defaultText={ "..." } onSelection={()=> {}} options={['wevqwe','wef','ewqew','qwev']}></DropdownButton>
                </div>

                <div className='card-body'>
                    <DoughnutChart inputObject={ inputObject } colorData={ colorData }></DoughnutChart>
                    <div className='captions'>
                        <div className='captions-inner-container'>
                        {
                        inputObject.captions.map((caption) => (
                            <div className='caption'>
                                <div className='description'>{ caption }</div>
                                <div className='caption-bottom value'>{ inputObject.captionValues[inputObject.captions.indexOf(caption)] }</div>
                            </div>
                        ))
                        }
                        </div>
                        
                    </div>
                </div>
            </div>
    )
}

export default DoughnutCard;