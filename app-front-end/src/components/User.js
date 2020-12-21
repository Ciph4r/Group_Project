import {React , useState,useEffect} from 'react'
import { useHistory } from 'react-router-dom';
import '../css/user.scss'
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import PropTypes from 'prop-types';
import TextMaskCustom from '../helperFunctions/textMaskCuston'
import ImageUploading from 'react-images-uploading';
import { compressImageFile } from 'frontend-image-compress';
import { useSelector, useDispatch } from 'react-redux'
import Alert from '@material-ui/lab/Alert';
import {userVailidation} from '../helperFunctions/inputValidation'
import {updateUser} from '../store/reducer/userReducer';
TextMaskCustom.propTypes = {
    inputRef: PropTypes.func.isRequired,
  };


export default function User(){
    const [userData,setUserData] = useState({})
    const [errMsg, setErrMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState('');
    const [images, setImages] = useState([{data_url: "https://groundrtr.s3.amazonaws.com/default/placeholder.png", name:'placeholder',file: null}]);
    const maxNumber = 1;
    
    const history = useHistory();
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
      const token = useSelector((state) => state.user.token)
      const dispatch = useDispatch();


      const handleSubmit = async() => {
          setSuccessMsg('')
        let validation = userVailidation(userData)
        if(validation === ''){
            setErrMsg('');
            const formData = new FormData();
            formData.append(
            'data',
            JSON.stringify(userData)
        )
        for (let i = 0; i < images.length; i++){
            if(images[i].file !== null){
                formData.append(
                    `images[${i}]`, 
                    images[i].file,
                    )
            }
        }
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/users/update`, {
            method: 'POST',
            headers: {
              Authorization: `Bearer ${token}`,
            },
            body: formData,
          });
      
          let jsonData = await response.json();
          if (jsonData.status === 'error') return setErrMsg(jsonData.message)
          
          setDataHandler({name:'password' , value: ''})
          setSuccessMsg(`Your Info Has Been Updated`)
          dispatch(updateUser({profilePic:jsonData.profilePic}))
        }else{
            setErrMsg(validation)
        }

      }

      const getUser = async()=>{
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/users`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },

          });
          let jsonData = await response.json();
          return jsonData
      }
      
      useEffect(() => {
        let mounted = true;
        getUser().then(user => {
        if(mounted) {
            const {firstName,lastName,email ,phone ,profilePic} = user.user
            let userState = {
                firstName,
                lastName,
                email,
                phone,
                profilePic
        }
            setUserData(userState)
            if(profilePic){
                setImages([{data_url: `${profilePic}`, name:'placeholder',file: null}])
            }
        }
      })
        return () => mounted = false;
      }, [])

      if(!token){
        history.push('/notFound')
      }
    return (
        <div className='content-user'>
            {errMsg && <Alert className ='error' severity="error">{errMsg}</Alert>}
            {successMsg && <Alert className ='success' severity="success">{successMsg}</Alert>}
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
                <TextField id="filled-read-only-input" name='email' label="Email" value= {userData.email} variant="filled"InputProps={{readOnly:true}}/>
                
                {/* <FormControl>
                    <InputLabel htmlFor="formatted-text-mask-input">react-text-mask</InputLabel>
                    <Input
                    value={userData.phone}
                    onChange={(e)=>{setDataHandler(e.target)}}
                    name="phone"
                    inputComponent={TextMaskCustom}
                    />
                </FormControl> */}

                {/* <TextField  label="State" value= {userData.state} name='state' onChange={(e)=>{setDataHandler(e.target)}}/> */}
                <TextField  type="password" label="New Password" name='newPassword' value= {userData.newPassword} onChange={(e)=>{setDataHandler(e.target)}}/>
                <TextField  type="password" label=" Retype New Password" name='retypeNewPassword' value= {userData.retypeNewPassword} onChange={(e)=>{setDataHandler(e.target)}}/>
            </div>
            <div>
            <TextField  style={{marginBottom: '50px' }}type="password" label="Current Password" name='password' value= {userData.password} onChange={(e)=>{setDataHandler(e.target)}}/>
            </div>
            <div className='submit-btn' onClick = {()=> {handleSubmit()}}>
                <h2>Submit</h2>
            </div>
        </div>
    )
}