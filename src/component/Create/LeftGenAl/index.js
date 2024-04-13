import GeneratoreButtor from '../GeneratoreButton'
import "./leftgen.scss"
const LeftSideImageCont=({props})=>{
    const imagedata=props
    return (
        <div className='child'>
                <div className="title">
                    <div className="digit">
                        01
                    </div>
                    <div className="desc">
                        <div class="hightlight">Select the styles you want.</div>
                        <div>You can choose up to 8 styles.</div>
                    </div>
                </div>
                <div className='content'>
                    {
                        imagedata != undefined && imagedata.length > 0 ? imagedata.map((items, index) => (
                            <div className='ipwPnL' key={index}>
                                <div className='cover' style={{background:`url(${items.image}) center center / cover`}}>
                                    {/* <img src={items.image} alt='image' /> */}
                                </div>
                                <div className='package radioBar'>
                                    <GeneratoreButtor />
                                    <div className='label'>{items.package} </div>
                                </div>
                            </div>
                        )) : <div>Loading</div>
                    }
                </div>
            </div>
    )
}
export default LeftSideImageCont