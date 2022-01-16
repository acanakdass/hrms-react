import React from 'react'
import { Card, Divider, Header, Icon, List, Button } from 'semantic-ui-react';
import "./JobAdvertCard.css"
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { height } from 'dom-helpers';
import { useDispatch, useSelector } from 'react-redux';
import { addAdvertToFavourites, removeAdvertFromFavourites } from '../../redux/store/actions/favouritesActions';
import toast from 'react-hot-toast';
import * as Mui from '@mui/material'

function JobAdvertCard(props) {


   const dispatch = useDispatch()

   const handleAddToFavs = (advert) => {
      dispatch(addAdvertToFavourites(advert))
      toast.success('Successfully added to favorites!');
   }


   const handleRemoveFromFavs = (id) => {
      dispatch(removeAdvertFromFavourites(id))
      toast(' successfully removed from favorites!');
   }

   const { favoriteAdverts } = useSelector(state => state.favorites);

   const checkIfAddedToFavs = (id) => {
      let isExists = favoriteAdverts.find(c => c.id == id) != null;
      return isExists;
   }





   const handleDate = (dateString) => {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };

      var date = new Date(dateString);
      return date.toLocaleDateString('tr-TR', options);
   }




   return (
      <div style={{ width: "100%", marginTop: '2em' }}>
         <Card fluid style={{ padding: '2em 5em 2em 5em' }}>
            <div style={{ display: "flex", flexDirection: 'row', justifyContent: 'space-between' }}>
               <div style={{ display: 'flex', flexDirection: 'row' }}>
                  <span>
                     {props.advert.employer?.companyName}
                     <div>
                        <Icon name="linkify" />
                        <a href={`https://${props.advert.employer?.webAddress}`} style={{ color: 'gray' }}>{props.advert.employer?.webAddress}</a>
                     </div>
                  </span>
               </div>
               <div style={{ border: '0px solid' }}>
                  <Header as='h2' >
                     {props.advert.jobTitle?.title}
                  </Header>
               </div>

               <div>
                  <span>
                     <Icon name="map marker" />
                     {props.advert.city?.cityName}
                     <div>

                        {handleDate(props.advert.releaseDate)}
                     </div>
                  </span>
               </div>

            </div>
            <Divider />
            <div className="explain-bar">
               <div className="explain-contents">
                  <div className="explain-title">Pozisyon Sayısı</div>
                  <div className="explain-subtitle">{props.advert.quota}</div>
               </div>
               <div className="explain-contents">
                  <div className="explain-title">Çalışma Saatleri</div>
                  <div className="explain-subtitle">{props.advert.workTime?.title}</div>
               </div>
               <div className="explain-contents">
                  <div className="explain-title">Çalışma Türü</div>
                  <div className="explain-subtitle">{props.advert.workType?.title}</div>
               </div>
               <div className="explain-contents">
                  <div className="explain-title">Maksimum Ücret</div>
                  <div className="explain-subtitle">{props.advert.maxSalary} ₺ / Ay</div>
               </div>
               <div className="explain-contents">
                  <div className="explain-title">Minimum Ücret</div>
                  <div className="explain-subtitle">{props.advert.minSalary} ₺ / Ay</div>
               </div>
               <div className="explain-contents">
                  <div className="explain-title">Son Başvuru Tarihi</div>
                  <div className="explain-subtitle">{handleDate(props.advert?.expirationDate)}</div>
               </div>
            </div>

            <Divider />
            <div>
               <Header as='h3' >
                  İlan Açıklaması
               </Header>
               <span >{props.advert.description}</span>
            </div>
            <br />
            <div>


               {/* <Button.Group fluid>
                  <Button onClick={ } color='blue'>Favorilere Ekle</Button>
                  <Button color='blue'>Başvuru Yap</Button>
               </Button.Group> */}
               <Button.Group fluid>
                  <Button onClick={() => checkIfAddedToFavs(props.advert.id) ? handleRemoveFromFavs(props.advert.id) : handleAddToFavs(props.advert)} animated='vertical'>
                     <Button.Content style={{ color: checkIfAddedToFavs(props.advert.id) ? 'red' : 'rgb(34 133 208)' }} hidden> {checkIfAddedToFavs(props.advert.id) ? 'Remove from Favs' : 'Add to Favs'}</Button.Content>
                     <Button.Content visible>
                        <Icon color={checkIfAddedToFavs(props.advert.id) ? 'red' : 'blue'} name='favorite' />
                     </Button.Content>
                  </Button>
               </Button.Group>
            </div>
            <br />
            <Mui.Divider variant='middle' />
            <br />
            <div>
               <Mui.Button variant='contained' fullWidth size='large'>Başvuru Yap</Mui.Button>
            </div>
         </Card>
      </div>
   )
}

export default JobAdvertCard
