import Card from "../../../components/UI/Card/Card";
import { Icon } from "semantic-ui-react";

// Build Cards in JSX (Render UI/Card.js)
export function buildCollectionsCard(collections) {
    return collections.map((collection) => {
        return (<Card
        key={collection.id}
        image={`/assets/nft/${collection.image}`}
        name={collection.name}
        price_sol={collection.price_sol}
        price_usd={collection.price_usd}/> 
    )});
};
  
  // Build Tags in JSX (Render UI/Tag.js)
  export function buildTagsButton(tags) {
    return tags.map((tagText) => {
        return (
        <button
        key={tagText}
        className='tags--tag'>
        {tagText}
        <Icon className='tags--delete' name='close' size='small' />  
        </button>
    )});
};