import './Service.css';
const service={
    services:[{logo:'/train.jpg',name:'Journey',para:'A wonderful serenity has taken to the possession of my entire soul'},
        {logo:'/train.jpg',name:'Luxuries Hotel',para:'A wonderful serenity has taken to the possession of my entire soul.'},
        {logo:'/train.jpg',name:'Travel Guide',para:'A wonderful serenity has taken to the possession of my entire soul.'}
    ],
    
}
function Service(){
    return(
        <div>
            {
                <div className="service-item">
                    {
                        service.services.map((item)=>
                        <div className="items-s">
                           <center> <img src={item.logo} alt="" style={{width:'200px'}} /></center>
                            <center><h1>{item.name}</h1></center>
                            <p>{item.para}</p>
                        </div>   
                        )
                    }
                </div>
            }
        </div>
    );
}
export default Service;