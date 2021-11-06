import Item from "./Item";
import './Transaction.css'
const Transaction = ({ items }) => {

    return (
        <ul className="item-list">
            {items.map((element) => {
                return <Item {...element} key={element.id} />
            })}
        </ul>
    );
}

export default Transaction