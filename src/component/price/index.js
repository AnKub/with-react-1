import './index.css';
import Box from '../box'
import ListItem from '../list-item'

export default function Price ({price, discount, currency, ...rest}){
return (
<Box shadow className='price'>
  <div className='price__header'>
    <span className={`price__value 
      ${discount ? "price__value--has-discount" :""}`} >
            {currency}
            {price}
    </span>
      {discount &&(
        <span className={`price__value`}>
          {currency}
          {discount}
        </span>
        )}
  </div>
  <List {...rest} currency={currency}/>
</Box>
);
}
function List({currency, cleaning = 0, service = 0, checkin, checkout}){
   return (
    <ul className='price__list'>
         <ListItem>
          <span>Pay for cleaning:</span>
          <span>
                {currency}
                {cleaning}
          </span>
         </ListItem>
         <ListItem>
          <span>For service:</span>
          <span>
                {currency}
                {service}
          </span>
          </ListItem>
          <ListItem>
          <span>Pay for cleaning:</span>
          <span>
                {currency}
                {service}
          </span>
          </ListItem>
          <ListItem>
          <span>Arrival date:</span>
          <span>
                {checkin}
          </span>
          </ListItem>
          <ListItem>
          <span>Departure date:</span>
          <span>
                {checkout}
          </span>
         </ListItem>
    </ul>
  );
}
