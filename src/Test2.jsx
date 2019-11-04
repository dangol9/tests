import React, { Component } from "react";
import {TiHeartFullOutline} from "react-icons/ti";

class Test2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: 0
    };
  }

IncrementLikes = () => {
  this.setState ({ likes : this.state.likes + 1});
}




render() {
  return (
    <div>
      <div className={"description"}>
        Ülesanne 2:
        <p>
          Rakendus peab arvet pidama mitu korda on südame ikooni klikitud ning vastava numbri <code>likes:</code> järel kuvama.
        </p>
      </div>

      <div style={{display:"flex", alignItems: "center"}}>
        <div>
          Likes: {this.state.likes}
        </div>
        <TiHeartFullOutline onClick={this.IncrementLikes}> </TiHeartFullOutline>
        <div>Click me</div>
      </div>
    </div>
  );
}
}

export default Test2;
