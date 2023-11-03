import ListItem from '../list-item';
import Ava from './dis2.png'
import './index.css';

export default function Contact({
name,
title,
image,
response_rate,
response_time,
info,
phone,
}) 
{
return (
  <div className='title'>
     <ListItem  >
     
      <h1 className='title__text'>{title}</h1> <img className = 'title__ava' src={Ava} alt={name} height={32}/>
    </ListItem>     
      <p className='title__hh'>"{info}"</p>
    <div className='title__sub-block'>
      <span className='title__sub-value'>Rating: {response_rate} </span>
      <span className='title__sub-value'>Resp-time: {response_time}</span>
      <span className='title__sub-value'>Phone: {phone}</span>
      </div>
     
  </div>
  );
}
