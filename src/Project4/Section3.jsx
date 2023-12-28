
import SubSection3 from "./SubSection3";

export default function section3({arr1,decrementCount}){

    let seasonsList = [];
    
    arr1.forEach((season, index) => {
        seasonsList.push(<SubSection3 key={index} arr1i={season} decrementCount={decrementCount}/>);
    });
    
      return (
        <div>
          <div>{seasonsList}</div>
        </div>
      );
    }
    
