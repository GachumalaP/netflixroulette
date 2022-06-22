import NavBar from "../components/NavBar/NavBar";
import { Provider } from "react-redux";
import store from "../redux/store";

export default {
    title: 'Navbar Component',
    component: NavBar,
    decorators: [
        (Story) => (
            <Provider store={store}>
                <Story />
            </Provider>
        )
    ]
};

const Template = (args) => <NavBar {...args}/>

export const Navbar = Template.bind({});

Navbar.args ={
    title: '+Add Movie'
}

