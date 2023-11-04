import './index.css';

export default function Photo({src, name}) {
return (
<div>
<img src={src} alt ={name} className='photo'/>;
<img className="attrac__fun" alt="boo" src="https://i.giphy.com/media/hZkeJc5vrYpksAG5V0/giphy.webp" width={200}/>
</div>
);
}