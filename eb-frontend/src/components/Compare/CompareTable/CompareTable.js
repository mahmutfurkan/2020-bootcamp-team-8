import React from 'react';

import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.css';
import Selector from './Selector';
import TableHeaderBox from './TableHeaderBox';

export default class CompareTable extends React.Component{

    constructor(props){
        super(props);
        this.state ={ 
        selectorValue: null, selectorId:null,
        boxInfo0: {score:"Mobility Score",countryName:"N/A",imageName:"image"},
        boxInfo1: {score:"Mobility Score",countryName:"N/A",imageName:"image"},
        boxInfo2: {score:"Mobility Score",countryName:"N/A",imageName:"image"},
        boxInfo3: {score:"Mobility Score",countryName:"N/A",imageName:"image"},
        visas0: [],
        visas1: [],
        visas2: [],
        visas3: []
        
        };
        this.selectorCallBack.bind(this);

    };


    
    selectorCallBack = (selectorVal,id) =>{
    
        let selectedPassport = this.props.data.find((passport)=>{return passport.countryCode===selectorVal});
        
        if(id==="Selector0"){
            let boxInfo0 = {score:null,countryName:null,imageName:null};
            boxInfo0.score=selectedPassport.visaFree+selectedPassport.eta + selectedPassport.visaOnArrival;
            boxInfo0.countryName=selectedPassport.countryName;
            boxInfo0.imageName=selectedPassport.imageName;
            this.setState({
                visas0:this.props.relationList,
                boxInfo0: boxInfo0

            })
    
        }
        else if(id==="Selector1" ){
            let boxInfo1 = {score:null,countryName:null,imageName:null};
            boxInfo1.score=selectedPassport.visaFree+selectedPassport.eta + selectedPassport.visaOnArrival;
            boxInfo1.countryName=selectedPassport.countryName;
            boxInfo1.imageName=selectedPassport.imageName;
            this.setState({
                visas1:this.props.relationList,
                boxInfo1:boxInfo1

            })
        }
        else if(id==="Selector2"){
            let boxInfo2= {score:null,countryName:null,imageName:null};
            boxInfo2.score=selectedPassport.visaFree+selectedPassport.eta + selectedPassport.visaOnArrival;
            boxInfo2.countryName=selectedPassport.countryName;
            boxInfo2.imageName=selectedPassport.imageName;
            this.setState({
                visas2:this.props.relationList,
                boxInfo2:boxInfo2

            })
        }else if(id==="Selector3"){
            let boxInfo3 = {score:null,countryName:null,imageName:null};
            boxInfo3.score=selectedPassport.visaFree+selectedPassport.eta + selectedPassport.visaOnArrival;
            boxInfo3.countryName=selectedPassport.countryName;
            boxInfo3.imageName=selectedPassport.imageName;
            this.setState({
                visas3:this.props.relationList,
                boxInfo3:boxInfo3
            })

        }  
                    

    }

    


    render(){
        const {data} = this.props;
        let boxInfo0 = this.state.boxInfo0;
        let boxInfo1 = this.state.boxInfo1;
        let boxInfo2 = this.state.boxInfo2;
        let boxInfo3 = this.state.boxInfo3;
        
        return(
            <Table striped bordered hover responsive variant="ligth" size ="sm">
                <thead>
                <tr>
                    <th class="empty"></th>
                    <Selector data = {data} selectorCallBack={this.selectorCallBack} title ={"Select Passport:"} controlId = {"Selector0"} loadRelations={this.props.loadRelations} />
                    <Selector data = {data} title ={"Compare To:"} selectorCallBack={this.selectorCallBack} controlId = {"Selector1"} loadRelations={this.props.loadRelations}  />
                    <Selector data = {data} title ={"Compare To:"} selectorCallBack={this.selectorCallBack} controlId = {"Selector2"} loadRelations={this.props.loadRelations}/>
                    <Selector data = {data} title ={"Compare To:"} selectorCallBack={this.selectorCallBack} controlId = {"Selector3"} loadRelations={this.props.loadRelations}/>                      
                </tr>
                </thead>
                <thead>
                    <tr>
                        <th></th>
                        <TableHeaderBox imageName={boxInfo0.imageName} countryName={boxInfo0.countryName} score={boxInfo0.score}/>
                        <TableHeaderBox imageName={boxInfo1.imageName} countryName={boxInfo1.countryName} score={boxInfo1.score}/>
                        <TableHeaderBox imageName={boxInfo2.imageName} countryName={boxInfo2.countryName} score={boxInfo2.score}/>
                        <TableHeaderBox imageName={boxInfo3.imageName} countryName={boxInfo3.countryName} score={boxInfo3.score}/>

                    </tr>
                </thead>
                <tbody>
                 {data.map((passport,key) => {
                    let visa0 = "";
                    let visa1 = "";
                    let visa2 = "";
                    let visa3 = "";
                    let relation = null;
                    if(this.state.visas0.length !==0){
                        relation = this.state.visas0.find((rel) => {return rel.countryOfDestination === passport.countryCode});
                        if(relation !== undefined){
                            visa0 = relation.visaCode;
                        }
                    }
                    if(this.state.visas1.length !==0){
                        relation = this.state.visas1.find((rel) => {return rel.countryOfDestination === passport.countryCode});
                        if(relation !== undefined){
                            visa1 = relation.visaCode;
                        }
                    }
                    if(this.state.visas2.length !==0){
                        relation = this.state.visas2.find((rel) => {return rel.countryOfDestination === passport.countryCode});
                        if(relation !== undefined){
                            visa2 = relation.visaCode;
                        }
                    }
                    
                    if(this.state.visas3.length !==0){
                        relation = this.state.visas3.find((rel) => {return rel.countryOfDestination === passport.countryCode});
                        if(relation !== undefined){
                            visa3 = relation.visaCode;
                        }
                    }


                    return(
                        <tr>
                        <td>
                            <img src={require('./../../../images/png_128/'+passport.countryName.toLowerCase()+'.png')} 
                            width="50px" height ="40px" alt="flag"
                            
                            ></img>
                            <div style={{float: "right"}}>{passport.countryName}</div>
                        </td>
                        <td>{visa0}</td>
                        <td>{visa1}</td>
                        <td>{visa2}</td>
                        <td>{visa3}</td>
                        </tr>
                        
                    )})
                }

                    
                </tbody>
                </Table>
                

        )
    }
}