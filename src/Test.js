// import React, {component} from "react";
// import "./Test.css";
// import Test from "./Test";

import { Component } from "react";

// import { Component } from "react";

// const Test = () => {
//   return (
//     <>
//     <div> 
//         < Test Key={1} />
//         < Test Key={2} />
//         < Test Key={3} />
//         < Test Key={4} />
//         < Test Key={5} />
//         < Test Key={6} />
//         < Test Key={7} />      
//     </div>
//     </>
    
//   );
// };
// class Test extends React.Component {
    // render() {
    //     console.log("Hello");
    //     return (
    //         <div>
    //             <h1 id="Testid">Hello I am shruti</h1>
    //         </div>
    //     )
    //     };
    class Test extends Component {
        state = { isloggedIn: false };
    render() {
        return (
            <div> 
                {!this.state.isloggedIn ?(
                    <h1> you are not logged In!</h1>
                ) : (
                    <h1>Congratulation, you are logged In</h1>
                )}
                <button onClick={(e) => this.setState({ isloggedIn: true})}>
                    Login!
                </button>    
            </div>
        );
    }
}
export default Test;