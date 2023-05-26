import './Widget.css';
import InfoIcon from '@mui/icons-material/Info';
const Widget = () =>{
    return <>
        <div className="widget">
            <div className="widget_header">
            <h4>LinkedIn News</h4>
            <InfoIcon/>
            </div>
            <ul>
                <li>IT firm Infogain to hire 800
                    <span>3h</span>
                </li>
                <li>How India Inc is using generative AI</li>
                <li>More women enter IT workforce</li>
                <li>Millennials and their money habits</li>
            </ul>
        </div>
    </>
}

export default Widget;