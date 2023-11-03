import "./index.css";
import Heading from "../heading";
import Box from "../box";
import ListItem from "../list-item";

export default function Properties({ title, properties }) {
  return (
    <Box shadow className="properties__block">
      <Heading border>{title}</Heading>
      <List {...properties} />
    </Box>
  );
}

function List({
  house_rules = "",
  cancellation_policy = "",
  local_transportation = "",
  host_languages,
  special_offers,
  "check-in_instructions": checkin,
}) {
  host_languages = host_languages.join(", ");

  return (
    <ul className="properties__list">
      {house_rules && (
        <ListItem title="House rules">
          <span>{house_rules}</span>
        </ListItem>
      )}
      {cancellation_policy && (
        <ListItem title="Cancellation policy">
          <span>{cancellation_policy}</span>
        </ListItem>
      )}
      {local_transportation && (
        <ListItem title="Local transport">
          <span>{local_transportation}</span>
        </ListItem>
      )}
      {host_languages && (
        <ListItem title="Language host">
          <span>{[...host_languages]}</span>
        </ListItem>
      )}
      {special_offers && (
        <ListItem title="Special offers">
          <span>{special_offers}</span>
        </ListItem>
      )}
      {checkin && (
        <ListItem title="Instructions about registration">
          <span>{checkin}</span>
        </ListItem>
      )}
    </ul>
  );
}
