import React from 'react'
import styled from 'styled-components'
import { other_images } from '../utils/images'

const hero = () => {
  return (
   <HeroWrapper classname="bg-black">
<div className='container h-100 flex'>
  <div className='hero-content'>
    <h1>Save big. Learn big.</h1>
    <p>Shop our It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,  </p>
  </div>
</div>
   </HeroWrapper>
  )
}

const HeroWrapper = styled.div`
background: url(${other_images.hero_img}) center/cover no-repeat;
height:300px;

.container{
  .hero-content{
    background-color: var(--clr-white);
    max-width:400px;
    width:100%;
    margin-left:0;
    padding:20px;

    h1{
      font-size:32px;
      margin-bottom:5px;
      white-space:nowrap;
    }
    p{
      font-size:15px
    }
  }
}

`;

export default hero