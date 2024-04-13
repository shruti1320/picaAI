import { useState } from "react";
import "./rightgen.scss"

const RightSideCont = () => {
    const [selectedImages, setSelectedImages] = useState([]);
    //const selecteddata=(localStorage.getItem("uploadedImage"))||[];
    const handleImage = (e) => {
        const files = e.target.files;

        // Convert the FileList to an array
        const imagesArray = Array.from(files);

        // Update the state with the new array of images
        setSelectedImages([...selectedImages, ...imagesArray]);
    };
    const [files, setFiles] = useState([])

    const handleDrop = (event) => {
        event.preventDefault();
        const { files } = event.dataTransfer;
        if (files.length > 0) {
            setFiles([...files]);
            setSelectedImages([...selectedImages,...files])
        }
    }

    const handleDragOver = (event) => {
        event.preventDefault()
    }

    const handleDragStart = (event) => {
        event.dataTransfer.setData("text/plain", event.target.id)
    }
    console.log(selectedImages, "images that was selected");
    return (

        <div className="child">
            <div className="title">
                <div className="digit">
                    02
                </div>
                <div className="desc">
                    <div class="hightlight">Upload 6-30 close-up portraits of yourself.</div>
                    <div>With varied backgrounds and expressions for optimal results.</div>
                </div>
            </div>

            {selectedImages.length == 0 ?
                <div className="data" >
                    <div className="input-tag">
                        <div className="input">
                            <label htmlFor="imageInput" style={{ display: 'block', cursor: 'pointer' }}>
                                <span className="iconfont aigcicon-ic_gallery" style={{ fontSize: '24px' }}>

                                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" class="bi bi-images" viewBox="0 0 16 16" color="rgb(85, 72, 248)">
                                        <path d="M4.502 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                                        <path d="M14.002 13a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V5A2 2 0 0 1 2 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-1.998 2M14 2H4a1 1 0 0 0-1 1h9.002a2 2 0 0 1 2 2v7A1 1 0 0 0 15 11V3a1 1 0 0 0-1-1M2.002 4a1 1 0 0 0-1 1v8l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094l1.777 1.947V5a1 1 0 0 0-1-1z" />
                                    </svg>
                                </span>

                            </label>
                            <input
                                id="imageInput"
                                type="file"
                                accept="image/*"
                                multiple=""
                                style={{ display: 'none' }}
                                onChange={handleImage}
                            />
                        </div>
                        <div className="file-upload-div" onDrop={handleDrop} onDragOver={handleDragOver}>
                        <div style={{color:"white"}} draggable="true" onDragStart={handleDragStart}>
                            Drag and Drop image
                        </div>
                        {/* {
                            files.map((item,index)=>(
                                <div key={index}>
                                    <img src={URL.createObjectURL(item)}/>
                                </div>
                            ))
                        } */}
                    </div>
                    </div>
                    <div class="exampleTitle"><div>Example</div></div>
                    <div className='input-image exampleDemo'>
                        <div className="example">
                            <img src="https://static.pica-ai.com/_next/static/media/full face.10efbd71.png" alt="example" />
                            <span>Full face</span>
                        </div>
                        <div className="example">
                            <img src="https://static.pica-ai.com/_next/static/media/many people.4282aa5e.png" alt="example" />
                            <span>Multiple people</span>
                        </div>
                        <div className="example">
                            <img src="https://static.pica-ai.com/_next/static/media/blurring.400ae726.png" alt="example" />
                            <span>Blurring</span>
                        </div>
                        <div className="example">
                            <img src="https://static.pica-ai.com/_next/static/media/sheltered.e82b47a9.png" alt="example" />
                            <span>Sheltered</span>
                        </div>
                    </div>

                </div> :
                <div className="secected-image" >
                    <div class="title">🎉 Qualified</div>
                    <div className="selected">
                        {selectedImages && selectedImages.length > 0 ?

                            selectedImages.map((item, index) => (
                                <div className="imgdata" key={index}>
                                    <img src={URL.createObjectURL(item)} alt="image" />
                                </div>
                            ))

                            : <div>Loading.....</div>}


                    </div>
                    <div className="file-upload-div" onDrop={handleDrop} onDragOver={handleDragOver}>
                        <div style={{color:"white"}} draggable="true" onDragStart={handleDragStart}>
                            Drag and Drop image
                        </div>
                        {/* {
                            files.map((item,index)=>(
                                <div key={index}>
                                    <img src={URL.createObjectURL(item)}/>
                                </div>
                            ))
                        } */}
                    </div>
                    <div className="lableinput">
                        <label htmlFor="imageInput" style={{ display: 'block', cursor: 'pointer' }}>
                            <span className="iconfont aigcicon-ic_gallery" style={{ fontSize: '24px' }}>

                                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" class="bi bi-images" viewBox="0 0 16 16" color="rgb(85, 72, 248)">
                                    <path d="M4.502 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                                    <path d="M14.002 13a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V5A2 2 0 0 1 2 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-1.998 2M14 2H4a1 1 0 0 0-1 1h9.002a2 2 0 0 1 2 2v7A1 1 0 0 0 15 11V3a1 1 0 0 0-1-1M2.002 4a1 1 0 0 0-1 1v8l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094l1.777 1.947V5a1 1 0 0 0-1-1z" />
                                </svg>
                            </span>
                            <span>Change image</span>
                        </label>
                        <input
                            id="imageInput"
                            type="file"
                            accept="image/*"
                            multiple=""
                            style={{ display: 'none' }}
                            onChange={handleImage}
                        />
                    </div>
                </div>
            }
        </div>
    )
}

export default RightSideCont