import './intro.css';
import me from './../../img/xxx.png';

const Intro = () => {
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hello, my name is</h2>
                    <h1 className="i-name">Jason Statham</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Killer</div>
                            <div className="i-title-item">Mechanic</div>
                            <div className="i-title-item">Transporter</div>
                            <div className="i-title-item">Actor</div>
                            <div className="i-title-item">Content Creator</div>
                            <div className="i-title-item">Sportsman</div>
                        </div>
                    </div>
                    <div className="i-desc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo aut, 
                        nobis est nihil vero, eum nam ad necessitatibus mollitia accusantium 
                       
                    </div>
                </div>
            </div>





            <div className="i-right">
                <div className="i-bg"></div>
                <img src={me} className="i-img" />
            </div>
        </div>
    )
}
export default Intro;