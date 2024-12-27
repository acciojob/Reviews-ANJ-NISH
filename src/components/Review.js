import React, { useState } from 'react'

export const Review = () => {

    const reviewarr=
    [
        {
          id: 1,
          name: 'susan smith',
          job: 'web developer',
          image:
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
          text:
            "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
        },
        {
          id: 2,
          name: 'anna johnson',
          job: 'web designer',
          image:
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',
          text:
            'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
        },
        {
          id: 3,
          name: 'peter jones',
          job: 'intern',
          image:
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
          text:
            'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
        },
        {
          id: 4,
          name: 'bill anderson',
          job: 'the boss',
          image:
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
          text:
            'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
        },
      ];


      const [currreview, setCurrReview]=useState(0);

      let {id,name,job,image,text}=reviewarr[currreview];

  return (
    <>
    <div className='review'>
        <span style={{margin: '10px'}} author-id={id} className='author'>{name}</span>
        <span style={{margin: '10px'}} className='job'>{job}</span>
        <p style={{margin: '10px'}} className='info'>{text}</p>
        <img style={{height: '200px', width: '200px'}} className='person-img' src={image}/>
        </div>
        <button id="prev-btn" onClick={()=> {if(currreview===0){setCurrReview(3)} else{setCurrReview(currreview-1)}}}>Prev review</button>
        <button id="next-btn" onClick={()=> {if(currreview===3){setCurrReview(0)} else{setCurrReview(currreview+1)}}}>Next Review</button>
        <button id="random-btn" onClick={()=> {let k=currreview; while(k===currreview){
            k=Math.floor(Math.random()*4)
        } setCurrReview(k)}}>surprise me</button>
        </>
  )
}