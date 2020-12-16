import { set } from 'date-fns';
import { React, useState, useEffect } from 'react';
import Modal from 'react-modal';
// import { pushHistory } from '../../helperFunctions/localStorage';
import Card from '../Card';

export default function HistoryBar() {
  const dummyData = [
    {
      name: 'Mercades',
      img:
        'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iho0QqgeF4K8/v1/-1x-1.jpg',
      ppd: '$100',
    },
    {
      name: 'Mercades',
      img:
        'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iho0QqgeF4K8/v1/-1x-1.jpg',
      ppd: '$100',
    },
    {
      name: 'Mercades',
      img:
        'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iho0QqgeF4K8/v1/-1x-1.jpg',
      ppd: '$100',
    },
    {
      name: 'Mercades',
      img:
        'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iho0QqgeF4K8/v1/-1x-1.jpg',
      ppd: '$100',
    },
    {
      name: 'Mercades',
      img:
        'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iho0QqgeF4K8/v1/-1x-1.jpg',
      ppd: '$100',
    },
    {
      name: 'Mercades',
      img:
        'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iho0QqgeF4K8/v1/-1x-1.jpg',
      ppd: '$100',
    },
    {
      name: 'Mercades',
      img:
        'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iho0QqgeF4K8/v1/-1x-1.jpg',
      ppd: '$100',
    },


  ];

  const [openModal, setOpenModal] = useState(false);
  const closeModalHandler = () => setOpenModal(false);
  const openModalHandler = () => setOpenModal(true);
  const [history , setHistory] = useState([])



const pushHistory = (id) => {
  let history =  JSON.parse(localStorage.getItem("history"))

  if (history === null){
      history = []
      history.push(id)
      localStorage.setItem('history', JSON.stringify(history))
  }else{
      let newHistory = [...history]
      if(newHistory.length >= 6) {
          newHistory = newHistory.slice(0, 5)
      }
      newHistory.unshift(id)
      localStorage.setItem('history', JSON.stringify(newHistory))
  }
}



  //pull data from local storage

  useEffect(() => {
    const getHistory = JSON.parse(localStorage.getItem("history"))
    setHistory(getHistory)

  }, [])


  return (
    <div className="history-bar">
      <div className="content">
        <div className="items">
          <h3>You've Viewed</h3>
          {history.map((data, key) => (
            <div className="box" key={key} onClick={openModalHandler}>
              <img src={data.img} alt="Thumbnail" />
              <div className="info">
                <h3>{data.name}</h3>
                <h5>PPD: {data.ppd}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <Modal isOpen={openModal}>
        <button onClick={closeModalHandler}>close</button>
        {dummyData.map((data, key) => (
          <Card key={key} data={data} />
        ))}
      </Modal> */}
    </div>
  );
}
