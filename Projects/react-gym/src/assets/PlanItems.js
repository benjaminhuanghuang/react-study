import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faCrown } from "@fortawesome/free-solid-svg-icons";
import { faMedal } from "@fortawesome/free-solid-svg-icons";

let PlanItems = [

    {
        id: 1,
        itemClasses: 'bg-light rounded-0 p-4',
        itemIcon: faHeart,
        iconColor: '#B197FC',
        itemTitle: 'Basic',
        itemPrice: 30,
        firstListItem: "First list item",
        secondListItem: "Second list item",
        thirdListItem: 'Third list item',
        btnClasses: 'btn btn-dark rounded-0 text-capitalize w-100'
    },
    {
        id: 2,
        itemClasses: 'bg-warning rounded-0 p-4',
        itemIcon: faCrown,
        iconColor: '#B197FC',
        itemTitle: 'Basic',
        itemPrice: 30,
        firstListItem: "First list item",
        secondListItem: "Second list item",
        thirdListItem: 'Third list item',
        btnClasses: 'btn btn-light rounded-0 text-capitalize w-100'
    },
    {
        id: 3,
        itemClasses: 'bg-purple rounded-0 p-4',
        itemIcon: faMedal,
        iconColor: '#B197FC', 
        itemTitle: 'Basic',
        itemPrice: 45,
        firstListItem: "First list item",
        secondListItem: "Second list item",
        thirdListItem: 'Third list item',
        btnClasses: 'btn btn-light rounded-0 text-capitalize w-100'
    }
];

export default PlanItems;