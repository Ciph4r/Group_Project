import {React , useState} from 'react'
import '../css/user.scss'
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import PropTypes from 'prop-types';
import TextMaskCustom from '../helperFunctions/textMaskCuston'
import ImageUploading from 'react-images-uploading';
import { compressImageFile } from 'frontend-image-compress';



TextMaskCustom.propTypes = {
    inputRef: PropTypes.func.isRequired,
  };


export default function User(){
    const [userData,setUserData] = useState({})
    const [errMsg, setErrMsg] = useState('');
    const [images, setImages] = useState([{data_url: "https://groundrtr.s3.amazonaws.com/default/placeholder.png", name:'placeholder',file: null}]);
    const maxNumber = 1;

    const setDataHandler = (e) => {
        let newUserData = userData
        newUserData[e.name] = e.value
        setUserData({
           ...userData,newUserData
        })
    }

    const onChange = async (imageList, addUpdateIndex) => {
        // data for compression'
        const oldImageList = [...imageList]
        const file = oldImageList[addUpdateIndex].file;
        const compressedFile = await compressImageFile(file,.1)
        oldImageList[addUpdateIndex].file = compressedFile
        setImages(oldImageList);
      };
      const handleSubmit = () => {
          
      }

    //   useEffect(() => {
    //       effect
    //       return () => {
    //           cleanup
    //       }
    //   }, [input])

    return (
        <div className='content'>

                <ImageUploading
                            
                            multiple
                            value={images}
                            onChange={onChange}
                            maxNumber={maxNumber}
                            dataURLKey="data_url"
                        >
                            {({
                            imageList,
                            onImageUpload,
                            onImageRemoveAll,
                            onImageUpdate,
                            onImageRemove,
                            isDragging,
                            dragProps,
                            }) => (
                            <div className="upload__image-wrapper">
                                {imageList.map((image, index) => (
                                <div key={index} className='user-img'>
                                    <img src={image['data_url']} alt="" onClick={() => onImageUpdate(index)}/>
                                    <div className="image-item__btn-wrapper">
                                    </div>
                                </div>
                                ))}
                            </div>
                            )}
                </ImageUploading>  

            <div className='user-info'>
                <div className='name-input'>
                <TextField  label="First Name" name='firstName' value= {userData.firstName} onChange={(e)=>{setDataHandler(e.target)}}/>
                <TextField  label="Last Name"  name='lastName' value= {userData.lastName} onChange={(e)=>{setDataHandler(e.target)}}/>
                </div>
                <TextField id="filled-read-only-input" name='email' label="Email" defaultValue="JOHNDOE@GOOGLE.COM" variant="filled"InputProps={{readOnly:true}}/>
                
                <FormControl>
                    <InputLabel htmlFor="formatted-text-mask-input">react-text-mask</InputLabel>
                    <Input
                    value={userData.phone}
                    onChange={(e)=>{setDataHandler(e.target)}}
                    name="phone"
                    inputComponent={TextMaskCustom}
                    />
                </FormControl>

                <TextField  label="State" value= {userData.state} name='state' onChange={(e)=>{setDataHandler(e.target)}}/>
                <TextField  type="password" label="Password" name='password' value= {userData.password} onChange={(e)=>{setDataHandler(e.target)}}/>
                <TextField  type="password" label="New Password" name='newPassword' value= {userData.newPassword} onChange={(e)=>{setDataHandler(e.target)}}/>
            </div>
            <div className='submit-btn' onClick = {()=> {handleSubmit()}}>
                <h2>Submit</h2>
            </div>
        </div>
    )
}