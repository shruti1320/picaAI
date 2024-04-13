import { useState } from 'react'

import './generator.scss'
import GeneratoreNavbar from "../GeneratoreNav/index";
import LeftSideImageCont from '../LeftGenAl';
import RightSideCont from '../RightGenAi';
const imagedata = [
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSykLSiAnKaXd7Xy_i8f5GVnbho4B9F5T5nOA&usqp=CAU',
        package: 'Female Package #1'

    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQiGEC4xEN6j_4HQMabI0iiXaDDkNerl9qCw&usqp=CAU',
        package: 'Female Package #2'

    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKvhn5PpmXvd2FiWP9xPu5K_a8RXWC-Gy_6Q&usqp=CAU',
        package: 'Female Package #3'

    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvlusQ7Z7GYA8vuOZXIeQYgvvES1TUqLjqTA&usqp=CAU',
        package: 'Female Package #4'

    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS7-N31MEUFL6N79K_pf7I_O4Exq2kUhekDA&usqp=CAU',
        package: 'Male Package #1'

    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm5Gk3msbkKG9kamMHGWYku72z7s5aHYxe2g&usqp=CAU',
        package: 'Male Package #2'

    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRudDbHeW2OobhX8E9fAY-ctpUAHeTNWfaqJA&usqp=CAU',
        package: 'Male Package #3'

    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIHFCsq41CBUdojTV0X-XIFKPEir7H7d6Bsw&usqp=CAU',
        package: 'Male Package #4'

    }
]
const AiGeneratoreHeadshot = () => {
    const handleCustomImageChange = () => {

    }
    return (
        <div className='aihead'>
            <GeneratoreNavbar/>
            {/* <GeneratoreNavbar/> */}
            {/* <div class="cover" style="background: url(&quot;https://img.mobiuspace.com/image/aigc/dbe890456d6dc691e58211ef4c8324b6.webp&quot;) center center / cover;"></div>
                 <div class="cover" style="background: url(&quot;https://img.mobiuspace.com/image/aigc/67cb903964d3f3c1889136467e3bfb67.webp&quot;) center center / cover;"></div>
                 <div class="cover" style="background: url(&quot;https://img.mobiuspace.com/image/aigc/83137282b32ff28f6cd16220c3b129ed.webp&quot;) center center / cover;"></div>
            */}
            <div className='main'>
                 <LeftSideImageCont props={imagedata}/>
                 <RightSideCont/>
            </div>
            <div className="btngen"><span class="">Generate Now</span></div>
          </div>  
    )
}
export default AiGeneratoreHeadshot