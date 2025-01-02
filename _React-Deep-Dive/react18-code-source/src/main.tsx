import {jsx} from './react/jsx';



const App: any = () => {    
    return (
        <h1>
            <h2>
                <h3>333</h3>
            </h2>
        </h1>
    )
}


console.log(App);
const app = App();
console.log(app);


import ReactDom from '@/react-dom';
const root = document.getElementById('root');
console.log('ReactDom', ReactDom);
ReactDom.createRoot(root).render(App);
console.log('222');
