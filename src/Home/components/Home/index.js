import React, { useState } from 'react';
import Logo from '../../images/logo.png'
import Footer from '../../images/footer.png'
import Banner from '../../images/banner.png'
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { TextField, IconButton, InputAdornment } from "@material-ui/core";
import Search from "@material-ui/icons/Search"
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Email from '@material-ui/icons/Email';
import HeadsetMic from '@material-ui/icons/HeadsetMic';
import Field from '../Field'

import './Home.css'



const Home = (props) => {
  var [itemCart, setItemCart] = useState(0);
  var cartItem = localStorage.getItem('cartItem')

  function qtdItemCart() {
    var cartItem = localStorage.getItem('cartItem')
    return cartItem ? <div className="info-cart">{cartItem}</div> : <></>;
  }

  function incrementCart() {
    let cartItem = localStorage.getItem('cartItem');
    if (!cartItem || cartItem === 0) {
      let qtd = itemCart + 1;
      setItemCart(qtd);
      localStorage.setItem('cartItem', qtd);
    } else {
      let qtd = cartItem;
      qtd = parseInt(cartItem) + 1;
      setItemCart(qtd);
      localStorage.setItem('cartItem', qtd);
  }
  }
  return (
    <>
    <div className="container">
      <div className="header">
        <img alt="logo" className="img" src={Logo} />
        <TextField
            id="standard-basic"
            className="search" 
            label="O que está procurando?"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton disabled>
                    <Search />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <div className="account">
            <PersonOutlineOutlinedIcon />
            Minha Conta
          </div>
          <div className="div-cart">
            <ShoppingCartOutlinedIcon />
            <div>
            {cartItem ? <div className="item-cart">{cartItem}</div> : <></>}
            </div>
          </div>
        </div>
        <div className="banner">
          <img alt="logo" className="img-banner" src={Banner} />
        </div>
    </div>
    <div className="sellers-container">
      <div className="sellers-content">
        Mais Vendidos
        <div className="border-text"/>
      </div>
      <div className="product-list">
        <ChevronLeftIcon fontSize="large" />
          {props.products.map((item) => 
            <div key={item.productId} className="cards">
              <img src={item.imageUrl} alt="product"/>
              <p className="name">{item.productName}</p>
              <p className="price">
                {
                `${'R$'}` + String(item.price).replace(/([0-9]{2})$/g, ",$1")
                }
              </p>
              <button
                className="btn-product"
                onClick={incrementCart}
              >
                COMPRAR
              </button>
            </div>
          )}
          <ChevronRightIcon fontSize="large"/>
      </div>
    </div>
    <div className="newslatter">
      <p className="text-news">Participe de nossas news com promoções e novidades!</p>
      <Field onRequestSend={props.onRequestSend} />
    </div>
    <footer>
      <div>
        <h3>Localização</h3>
        <p className="div-address"></p>
        <p>Avenida Andrômeda, 2000. Bloco 6 e 8</p>
        <p>Alphavile SP</p>
        <p>brasil@corebiz.ag</p>
        <p>+55 11 3090 1039</p>
      </div>
      <div className="div-footer">
        <div className="card-footer">
          <button> <Email /> ENTRE EM CONTATO</button>
        </div>
        <div className="card-footer">
          <button> <HeadsetMic /> FALE COM O NOSSO CONSULTOR ONLINE</button>
        </div>
      </div>
      <div className="imgs-footer">
        <p>Created by</p>
        <img alt="footer-logo" src={Footer} />
      </div>
      </footer>
  </>
  )
}

export default Home;