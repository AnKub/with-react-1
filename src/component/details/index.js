import Box from '../box'
import ListItem from '../list-item'; 
import Heading from '../heading'
import bedIc from './beds.svg'
import bedroomIc from './bedroom.svg'
import guestIc from './guest.svg'
import bathIc from './baths.svg'
import './index.css';

export default function Details({title, property_details}){
      return (
            <Box shadow className='details__block'>
                  <Heading border>{title}</Heading>
                  <List {...property_details}/>
            </Box>
            );
}
function List ({guests=0, bedrooms =0, beds=0, baths=0}){
return(
      <ul className="details__list">
      <ListItem imageSrc={guestIc}>
        <span>{guests}</span>
        <span>- guests</span>
      </ListItem>
      <ListItem imageSrc={bedroomIc}>
        <span>{bedrooms}</span>
        <span>- bedrooms</span>
      </ListItem>
      <ListItem imageSrc={bedIc}>
        <span>{beds}</span>
        <span>- beds</span>
      </ListItem>
      <ListItem imageSrc={bathIc}>
        <span>{baths}</span>
        <span>- baths</span>
      </ListItem>
    </ul>
      );
}


// export default function Details ({list}){
//  return (
//  <div className='room__block'>
//       <Heading border>Type of apartments</Heading>

//       <div className='room__list'>
//             {list.map(({id, ...rest}) => (
//                   <Fragment key={id}>
//                         <Item {...rest}/>
//                   </Fragment>
//                   ))}
//       </div>
//  </div>
//  );
// }

// function Item({type, pricePerNight: price, currency, capacity}){
// return (
//       <Box className='room'>
//              <span className='room__title'>{type}</span>
//              <span className='room__info'>Total number of guests: {capacity}</span>
//              <span className='room__price'>
//                   {currency}
//                   {price}
//              </span>
//       </Box>
//       );
// }