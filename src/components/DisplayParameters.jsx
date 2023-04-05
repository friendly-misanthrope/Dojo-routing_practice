import { useParams } from 'react-router-dom';

const DisplayParameters = (props) => {

  const { hello, txtColor, bgColor } = useParams()

  return (
    <div>
      {
        isNaN(hello) ?
        <h3 style={
          txtColor ? 
          {color: txtColor, backgroundColor: bgColor}
          : null
        }>

          The word is: {hello}</h3>
        : <h3 style={
          txtColor ?
          {color:txtColor, backgroundColor:bgColor}
          :null
          
        }>The number is: {hello}</h3>
      }
    </div>
  );
}

export default DisplayParameters;
