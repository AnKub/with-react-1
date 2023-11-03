import "./index.css";
import Heading from "../heading";
import Box from "../box";
import ListItem from "../list-item";
import { Fragment } from "react";

export default function Attractions({ title, attractions }) {
  return (
    <Box shadow className="attrac__block">
      <Heading>{title}</Heading>
      <img className="attrac__fun" alt="boo" src="https://i.giphy.com/media/hZkeJc5vrYpksAG5V0/giphy.webp" width={200}/>
      <div className="attrac__list">
        {attractions.map(({ id, ...rest }) => (
          <Fragment key={id}>
            <List {...rest} />
          </Fragment>
        ))}
      </div>
      
    </Box>
  );
}

function List({ name, link }) {
  return (
    <ul className="attrac__item">
       <ListItem>
        <a href={link}>{name}</a>
      </ListItem>
    </ul>
  );
}