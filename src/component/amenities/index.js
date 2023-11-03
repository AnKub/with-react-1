import Box from '../box'
import ListItem from '../list-item'; 
import Heading from '../heading'

import Pool from './poolIc.svg'
import Animals from './animIc.svg'
import Fitness from './fitIc.svg'
import Kids from './kidIc.svg'
import Kons from './konsIc.svg'
import Eat from './moreatIc.svg'
import Parking from './parkIc.svg'
import RoomServ from './roomservIc.svg'
import Transfer from './transfIc.svg'
import WiFi from './wifiIc.svg'

import './index.css';

export default function Amenities({title, amenities}){
      return (
            <Box shadow className='amen__block'>
                  <Heading border>{title}</Heading>
                  <List {...amenities}/>
            </Box>
            );
}
function List ({
  hasPool=false,
  hasGym=false,
  hasFreeBreakfast=false,
  hasFreeWiFi=false,
  hasParking=false,
  hasPetsAllowed=false,
  hasAirportShuttle=false,
  hasConciergeService=false,
  hasRoomService=false,
  hasChildFriendly=false,
})
  {
return(
  <ul className="amen__list">
  {hasPool && (
    <ListItem imageSrc={Pool}>
      <span>Pool</span>
    </ListItem>
  )}
  {hasGym && (
    <ListItem imageSrc={Fitness}>
      <span>СFitness studio</span>
    </ListItem>
  )}
  {hasFreeBreakfast && (
    <ListItem imageSrc={Eat}>
      <span>Free breakfast</span>
    </ListItem>
  )}
  {hasFreeWiFi && (
    <ListItem imageSrc={WiFi}>
      <span>Free Wi-Fi</span>
    </ListItem>
  )}
  {hasParking && (
    <ListItem imageSrc={Parking}>
      <span>Free parking place</span>
    </ListItem>
  )}
  {hasPetsAllowed && (
    <ListItem imageSrc={Animals}>
      <span>Pets allowed</span>
    </ListItem>
  )}
  {hasAirportShuttle && (
    <ListItem imageSrc={Transfer}>
      <span>Transfer to the airport</span>
    </ListItem>
  )}
  {hasConciergeService && (
    <ListItem imageSrc={Kons}>
      <span>Concierge</span>
    </ListItem>
  )}
  {hasRoomService && (
    <ListItem imageSrc={RoomServ}>
      <span>Room servis</span>
    </ListItem>
  )}
  {hasChildFriendly && (
    <ListItem imageSrc={Kids}>
      <span>Suitable for children</span>
    </ListItem>
  )}
</ul>
);
}
