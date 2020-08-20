import React from 'react';
import './style.css';

export default class TableHeaderBox extends React.Component{
    
    render(){
        let {imageName,countryName,score} = this.props;
        if(countryName !=="N/A"){
            
            imageName= <img src={require('./../../images/passport_images/'+imageName)}
            alt={"passport image of "+ countryName}
            style={{width: "88px", height: "125px", float: "left"}}
            />
            return(
                <th>
                    <div class="headerBox">
                        <div>{imageName}</div>
                        <div>
                            <div class="score">{score}</div>
                            <div class="mobilityScore">{countryName}</div>
                        </div>
                    </div>
                </th>
                )
        }
        else{
            return(
                <th>
                    <div class="headerBox">
                        <div></div>
                        <div>
                            <div class="score" style={{color:"grey"}}>N/A</div>
                            <div class="mobilityScore">Mobility Score</div>
                        </div>
                    </div>
                </th>
            )
        }
    }
}