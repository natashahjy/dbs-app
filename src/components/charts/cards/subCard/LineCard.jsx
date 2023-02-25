import { LineChart } from "../../charts";
import React from "react";
import DropdownButton from "../../utility/DropdownButton";
import '../subCardCSS/LineCard.css';

const LineCard = ( { inputObject, colorData } ) => {
    return (
            <div className='line dashboard-card'>
                <div className='card-head'>
                    <div className='title'>{ inputObject.title }</div>
                    <DropdownButton defaultText={ "..." } onSelection={()=> {}} options={['wevqwe','wef','ewqew','qwev']}></DropdownButton>
                </div>

                <div className='card-body'>
                    <LineChart inputObject={ inputObject } colorData={ colorData }></LineChart>
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

export default LineCard;