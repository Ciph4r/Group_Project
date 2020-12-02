import React, { useState } from 'react';
import '../css/listing.scss';
import 'react-calendar/dist/Calendar.css';
import {CreateListingModal} from './CreateListingModal'
import { useSelector, useDispatch } from 'react-redux'
import {ListingCard} from './listingCard'





export default function Listing(props) {
    const carData = useSelector((state) => state.car.cars)

    const [showCreateModal, setShowCreateModal] = useState(false);
    const [dataState , setData]= useState()
    // const [modalType , setModalType] = useState()
    
    // let modal = <CreateListingModal showCreateModal={showCreateModal} setShowCreateModal={setShowCreateModal} listingData={dataState} type = {'Create'} />


    // const modalType = (key) => {
    //   if (key ===false){
    //     setData({img:[]})
    //     modal = (
    //       <>
    //       <CreateListingModal showCreateModal={showCreateModal} setShowCreateModal={setShowCreateModal} listingData={dataState} type = {'Create'} />
    //       </>
    //     )
    //   }else{
    //     setData(carData[key])
    //     modal = (
    //       <>
    //       <CreateListingModal showCreateModal={showCreateModal} setShowCreateModal={setShowCreateModal} listingData={dataState} type = {'Edit'} />
    //       </>
    //     )
    //   }
    //   setShowCreateModal(true)
    // }
    const modalType = (id) => {
      setData(id)
      setShowCreateModal(true)
    }

    return (
        <div className='listing'>
            <div className="content">
                <div className='header'>
                  <h1> My Listing</h1>
                </div>           
                <div className='create-listing'>
                    <button onClick={()=> modalType(false)}>Create New Listing</button>
                    <CreateListingModal showCreateModal={showCreateModal} setShowCreateModal={setShowCreateModal} id={dataState}  />
                </div>
                <div className='main-content'>
                    {carData.map((data, key) => (
                        <ListingCard data={data} modalType = {modalType} key = {key} setShowCreateModal = {setShowCreateModal}/>
                    // ListingCard(data ,modalType ,key ,setShowCreateModal)
                    ))}
                </div>
            </div>
        </div>
      
    );
  }
  