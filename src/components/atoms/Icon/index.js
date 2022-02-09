import Close from "./icons/close";
import Search from "./icons/search";

const Icon = (props) => {
    if (props.name) {
        switch (props.name.toLowerCase()) {
            case 'close':
                return <Close {...props} />
            case 'search':
                return <Search {...props} />
            default:
                return <div>Icon name not found or icon not imported in icnos/index.js</div>
        }
    } else { 
        return <div>No icon name passed to component</div>
    }
};

export default Icon;
