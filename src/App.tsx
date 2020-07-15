import React, {Component} from 'react';
import {IonApp} from '@ionic/react';
import * as FlexmonsterReact from 'react-flexmonster';


export default class App extends Component {

  private flexmonsterRef: any;

  constructor(props: any) {
    super(props);
    this.flexmonsterRef = React.createRef<FlexmonsterReact.Pivot>();
  }

  reportCompleteHandler = () => {
    if (this.flexmonsterRef !== null && this.flexmonsterRef.current !== null) {
      console.log(">>>>>>", this.flexmonsterRef.current.flexmonster.getReport());
    }
  }

  render = () => {
    return ( <IonApp>
      <FlexmonsterReact.Pivot 
      ref = {this.flexmonsterRef}
      toolbar = {true}
      report = "https://cdn.flexmonster.com/reports/report.json"
      width = "100%"
      reportcomplete = {this.reportCompleteHandler}
      /> 
      </IonApp>
    );
  }
}