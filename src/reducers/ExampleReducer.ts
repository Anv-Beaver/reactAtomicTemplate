import { SEARCH_SUCCESS } from "../pages/Example/ExampleActions";


export type TextState = {
        title: string,
        content: string
}

const initState: TextState = {
        title: "",
        content: ""
}



  export function ExampleReducer(state = initState, action:any) {
    
    switch (action.type) {
      case SEARCH_SUCCESS:
        console.log(action.payload);
        
        return (
            { 
                ...state,
                result: action.payload
            }
        );
        
      default:
        return   (
            { 
                ...state,
                result: state
            }
        );      
       
    }
  }
