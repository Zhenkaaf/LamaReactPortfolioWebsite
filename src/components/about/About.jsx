import './about.css';


const About = () => {
    return (
<div className="a">
    <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
            <img className='a-img' src="https://images.pexels.com/photos/6142293/pexels-photo-6142293.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
        </div>
    </div>
    <div className="a-right">
        <h1 className="a-title">About me</h1>
        <p className="a-sub">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, consequuntur cupiditate? 
Soluta vero sed, incidunt inventore
        </p>
        <p className="a-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id architecto
             voluptate ab quisquam ea soluta tempora minima enim quos, eius eos
              tenetur laboriosam corporis
             accusantium quibusdam! Tenetur voluptatem obcaecati repellendus.
        </p>
        <div className="a-award">
            <img className="a-award-img" src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/f6183c17165353.562b6a501a7ab.jpg" alt="" />
            <div className="a-award-texts">
                <h4 className="a-award-title">International Design</h4>
                <p className="a-award-desc">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                     Neque, ipsum deleniti. Eos repellat non provident fuga recusandae
                      iure aliquid quia sit enim libero praesentium 
                    perspiciatis cupiditate, saepe quo ipsum impedit.
                </p>
            </div>
        </div>
    </div>
</div>
    )
}
export default About;